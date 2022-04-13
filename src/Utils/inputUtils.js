import { useMemo, useState } from 'react';

// works by trying to force focus on target component when mounted,
// couldn't be 100% guaranteed, as of user's freedom.
export const KeyDownHandler = ({ handleKeyDown, children }) => {
	return (
		<div tabIndex='0' ref={ref => ref && ref.focus()} onKeyDown={handleKeyDown}>
			{children}
		</div>
	);
};

export const SwipeHandler = ({ handleSwipes, children }) => {
	const [touchStart, setTouchStart] = useState(null);
	const [touchEnd, setTouchEnd] = useState(null);
	const minSwipePxDistance = 70;

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
		const distanceSwiped = {
			x: touchStart.x - touchEnd.x,
			y: touchStart.y - touchEnd.y,
		};
		const isLeftSwipe = distanceSwiped.x > minSwipePxDistance;
		const isRightSwipe = distanceSwiped.x < -minSwipePxDistance;
		const isUpSwipe = distanceSwiped.y > minSwipePxDistance;
		const isDownSwipe = distanceSwiped.y < -minSwipePxDistance;

		// if-else avoids matching both horizontal and vertical swipes at the same time.
		if (isLeftSwipe) {
			handleSwipes.left && handleSwipes.left();
		} else if (isRightSwipe) {
			handleSwipes.right && handleSwipes.right();
		} else if (isUpSwipe) {
			handleSwipes.up && handleSwipes.up();
		} else if (isDownSwipe) {
			handleSwipes.down && handleSwipes.down();
		}
	};

	const touchEventsProps = { onTouchStart, onTouchMove, onTouchEnd };
	const memoizedChildren = useMemo(() => children, [children]);

	return <div {...touchEventsProps}>{memoizedChildren}</div>;
};
