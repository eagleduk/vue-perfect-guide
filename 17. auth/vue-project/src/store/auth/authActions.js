import API_KEY from "./API_KEY.js";

export default {
  login() {},
  async signup(context, data) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        API_KEY.GOOGLE_APIKEY,
      {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData.error.message);
      throw Error(responseData.error.message || "ERROR");
    }

    context.commit("signup", {
      userId: responseData.localId,
      idToken: responseData.idToken,
      expiresIn: responseData.expiresIn,
    });
  },
};
