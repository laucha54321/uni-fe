import { writable } from "svelte/store";
import { browser } from "$app/environment";

let userToken;

if (browser && sessionStorage.getItem("accessToken") !== null) {
  userToken = writable({ accessToken: sessionStorage.accessToken });
} else {
  userToken = writable({ accessToken: "" });
}

userToken.subscribe((val) => {
  browser && sessionStorage.setItem("accessToken", val.accessToken);
});

export default userToken;
