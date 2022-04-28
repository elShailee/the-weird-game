import { usePlayerDataContext } from 'Context/PlayerDataContext';

export const useMoneyEarned = () => {
	const { playerDataState } = usePlayerDataContext();
	const { money, spentMoney } = playerDataState;
	return money + spentMoney;
};
