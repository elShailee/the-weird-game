import { useMemo, useState } from 'react';

// works by trying to force focus on target component when mounted,
// couldn't be 100% guaranteed, as of user's interaction with window.
export const KeyDownHandler = ({ action, children }) => {
	return (
		<div tabIndex='0' ref={ref => ref && ref.focus()} onKeyDown={action}>
			{children}
		</div>
	);
};

export const SwipeHandler = ({ actions, children }) => {
	const [touchStart, setTouchStart] = useState(null);
	const [touchEnd, setTouchEnd] = useState(null);
	const minSwipeDistance = 50;

	const touchPositionFromEvent = e => {
		return { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
	};

	const onTouchStart = e => {
		setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
		setTouchStart(touchPositionFromEvent(e));
	};

	const onTouchMove = e => setTouchEnd(touchPositionFromEvent(e));

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		const distance = {
			x: touchStart.x - touchEnd.x,
			y: touchStart.y - touchEnd.y,
		};
		const isLeftSwipe = distance.x > minSwipeDistance;
		const isRightSwipe = distance.x < -minSwipeDistance;
		const isUpSwipe = distance.y > minSwipeDistance;
		const isDownSwipe = distance.y < -minSwipeDistance;

		// if-else avoids matching both horizontal and vertical swipes at the same time.
		if (isLeftSwipe) {
			actions.left && actions.left();
		} else if (isRightSwipe) {
			actions.right && actions.right();
		} else if (isUpSwipe) {
			actions.up && actions.up();
		} else if (isDownSwipe) {
			actions.down && actions.down();
		}
	};

	const touchEventsProps = { onTouchStart, onTouchMove, onTouchEnd };
	const memoizedChildren = useMemo(() => children, [children]);

	return <div {...touchEventsProps}>{memoizedChildren}</div>;
};
