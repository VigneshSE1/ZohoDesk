import { createSignal } from "@react-rxjs/utils";
import { merge } from "rxjs";
import { v4 as uuid } from "uuid";
const [event$, setEvent] = createSignal();
export const eventMap$ = merge(event$);
const dispatch = (event) => {
    if (!event.id) {
        event.id = uuid();
    }
    setEvent(event);
};
export default Object.freeze({
    dispatch,
});
