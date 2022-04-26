import { texts } from 'Texts/texts';

export const changeDialogWithHighlight = ({
	newDialogStage,
	dialogRef,
	setDialogStageState,
	theme,
}) => {
	if (!dialogRef.current) return;
	const { style } = dialogRef.current;
	const fadeInDuration = 300;

	style.transition = `background-color ${fadeInDuration}ms, color 0ms`;
	style.backgroundColor = theme.colors.moneyScreen.dialog.focusBG;
	style.color = theme.colors.moneyScreen.text.transparent;

	setDialogStageState(newDialogStage);

	setTimeout(() => {
		style.transition = `background-color 2s ease-out, color 1000ms`;
		style.backgroundColor = theme.colors.moneyScreen.dialog.transparentBG;
		style.color = theme.colors.moneyScreen.text.light;
	}, fadeInDuration);
};

export const getCurrentDialogStage = moneyEarned => {
	const dialog = texts.moneyScreen.mainScreenDialog;
	const dialogStages = Object.keys(dialog);
	let newDialogStage = -1;

	const hasEarnedEnough = ({ required, earned, max }) => {
		return required <= earned && required >= max;
	};

	dialogStages.forEach(key => {
		const requiredMessageMoney = parseInt(key);

		if (
			hasEarnedEnough({ required: requiredMessageMoney, earned: moneyEarned, max: newDialogStage })
		) {
			newDialogStage = requiredMessageMoney;
		}
	});

	return newDialogStage >= 0 ? newDialogStage : null;
};
