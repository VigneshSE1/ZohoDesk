import { useState, useEffect } from "react";
import { DomainEvents } from "../enums/DomainEvents";
import { eventMap$ } from "./eventDispatcher";
const initialEventState = {};
const useEvent = (name) => {
    const [current, setCurrent] = useState(initialEventState.current);
    useEffect(() => {
        const subscription = eventMap$.subscribe((eventData) => {
            if (eventData === undefined) {
                return setCurrent(undefined);
            }
            if ((name === DomainEvents.GETUSERINFO || name === (eventData === null || eventData === void 0 ? void 0 : eventData.name)) &&
                (current === null || current === void 0 ? void 0 : current.id) !== (eventData === null || eventData === void 0 ? void 0 : eventData.id)) {
                setCurrent(eventData);
            }
        });
        return () => {
            subscription.unsubscribe();
        };
    }, [current, name]);
    return current;
};
export default useEvent;
