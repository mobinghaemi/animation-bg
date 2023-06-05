/** @typedef {typeof __propDef.props}  BackgroundProps */
/** @typedef {typeof __propDef.events}  BackgroundEvents */
/** @typedef {typeof __propDef.slots}  BackgroundSlots */
export default class Background extends SvelteComponentTyped<{
    name?: string;
    characters?: string[];
    count?: number;
    colour?: string;
    colours?: string[];
    deg?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BackgroundProps = typeof __propDef.props;
export type BackgroundEvents = typeof __propDef.events;
export type BackgroundSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        name?: string;
        characters?: string[];
        count?: number;
        colour?: string;
        colours?: string[];
        deg?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
