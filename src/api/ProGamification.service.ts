import { DomainEvents } from "../enums/DomainEvents";
import eventDispatcher from "../utils/eventDispatcher";
import { addPointsToUser } from "./LeaderBoardService";
export const updateGameAction = async (
	userId: string,
	gameActionId: string,
	correspondingUserId: string,
	correspondingUserApplicationId: string
) => {
	const triggerGameAction = {
		gameActionId: gameActionId,
		userId: userId,
		correspondingUserId: correspondingUserId,
		correspondingUserApplicationId: correspondingUserApplicationId,
	};
	return await addPointsToUser(triggerGameAction).then(() => {
		eventDispatcher.dispatch({
			name: DomainEvents.GETUSERINFO,
			data: {},
		});
	});
};
