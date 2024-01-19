var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DomainEvents } from "../enums/DomainEvents";
import eventDispatcher from "../utils/eventDispatcher";
import { addPointsToUser } from "./LeaderBoardService";
export const updateGameAction = (userId, gameActionId, correspondingUserId, correspondingUserApplicationId) => __awaiter(void 0, void 0, void 0, function* () {
    const triggerGameAction = {
        gameActionId: gameActionId,
        userId: userId,
        correspondingUserId: correspondingUserId,
        correspondingUserApplicationId: correspondingUserApplicationId,
    };
    return yield addPointsToUser(triggerGameAction).then(() => {
        eventDispatcher.dispatch({
            name: DomainEvents.GETUSERINFO,
            data: {},
        });
    });
});
