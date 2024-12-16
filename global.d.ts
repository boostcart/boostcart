import en from "./messages/en.json";

type Message = typeof en;

declare global {
	type IntlMessages = Messages
}