import en from "./messages/en.json";

type Message = typeof en;

declare global {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface IntlMessages extends Message {}
}
