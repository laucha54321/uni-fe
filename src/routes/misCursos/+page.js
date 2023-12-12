import { redirect } from "@sveltejs/kit";
import userToken from "$lib/user";
userToken.subscribe((data) => {
  if (data.accessToken == "") {
    throw redirect(307, "/login");
  }
});
