import { writable } from "svelte/store";

const userToken = writable({ accessToken: "" });

export default userToken;
