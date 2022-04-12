// works by trying to force focus on target component when mounted,
// couldn't be 100% guaranteed, as of user's interaction with window.
export const keyboardHandler = cb => {
	return {
		tabIndex: 0,
		ref: thisRef => thisRef && thisRef.focus(),
		onKeyDown: cb,
	};
};
