import { useRef, useEffect, useState } from 'react';

export const useTimeout = (callback, delay) => {
	const timeoutRef = useRef(null);
	const savedCallback = useRef(callback);
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);
	useEffect(() => {
		const tick = () => savedCallback.current();
		if (typeof delay === 'number') {
			timeoutRef.current = window.setTimeout(tick, delay);
			return () => window.clearTimeout(timeoutRef.current);
		}
	}, [delay]);
	return timeoutRef;
};

export const useTimeouts = (callbacks, delays) => {
	const [timoutIndex, setTimeoutIndex] = useState(0);
	const timeoutRef = useRef(null);
	const savedCallback = useRef(callbacks);
	useEffect(() => {
		savedCallback.current = callbacks[timoutIndex];
	}, [callbacks, timoutIndex]);
	useEffect(() => {
		const tick = () => {
			savedCallback.current();
			setTimeoutIndex(timoutIndex + 1);
		};
		if (typeof delays[timoutIndex] === 'number') {
			timeoutRef.current = window.setTimeout(() => tick(), delays[timoutIndex]);
			return () => window.clearTimeout(timeoutRef.current);
		}
	}, [delays, timoutIndex]);
	return timeoutRef;
};
