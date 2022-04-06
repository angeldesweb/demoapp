import { AuthStore } from "./AuthStore";
import { RouterStore , ViewStore } from "./RouterStore";

export const router = RouterStore();

export const session = AuthStore();

export const view = ViewStore()