import API_KEY from "./API_KEY.js";

export default {
  async login(context, data) {
    return context.dispatch("auth", {
      ...data,
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
    });
  },
  async signup(context, data) {
    return context.dispatch("auth", {
      ...data,
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
    });
  },

  autoLogin(context) {
    const userId = localStorage.getItem("userId");
    const idToken = localStorage.getItem("idToken");

    context.commit("setUser", {
      userId,
      idToken,
    });
  },

  async auth(context, data) {
    const url = data.url;

    const response = await fetch(url + API_KEY.GOOGLE_APIKEY, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData.error.message);
      throw Error(responseData.error.message || "ERROR");
    }

    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("idToken", responseData.idToken);

    context.commit("setUser", {
      userId: responseData.localId,
      idToken: responseData.idToken,
    });
  },

  logout(context) {
    context.commit("logout");
  },
};
