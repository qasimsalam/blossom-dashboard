import { store } from "rfx-core";

import AppState from "./AppState";
import LoginState from "./LoginState";

export default store.setup({
	appState: AppState,
	loginState: LoginState
});
