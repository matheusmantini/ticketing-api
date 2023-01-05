export const goToSignUpPage = (navigate) => {
  navigate("/auth/signup");
};

export const goToSignInPage = (navigate) => {
  navigate("/auth/signin");
};

export const goToHomePage = (navigate) => {
  navigate("/");
  navigate(0);
};

export const goBack = (navigate) => {
  navigate(-1);
};
