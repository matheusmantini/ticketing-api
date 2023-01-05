import { useContext, useEffect } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToSignInPage, goToSignUpPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { ContainerButton } from "./styled";

const HeaderPage = () => {
  const { currentUser, email, password } = useContext(GlobalStateContext);

  const navigate = useNavigate();

  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => goToSignInPage(navigate),
  });

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <form className="form-inline">
          {currentUser.length === 0 && (
            <>
              <ContainerButton>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={() => {
                    goToSignUpPage(navigate);
                  }}
                >
                  Sign Up
                </button>
              </ContainerButton>
              <ContainerButton>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => {
                    goToSignInPage(navigate);
                  }}
                >
                  Sign In
                </button>
              </ContainerButton>
            </>
          )}

          {currentUser.length !== 0 && (
            <ContainerButton>
              <button
                className="btn btn-danger"
                type="button"
                onClick={async () => {
                  await doRequest();
                  navigate(0);
                }}
              >
                Sign Out
              </button>
            </ContainerButton>
          )}
        </form>
      </nav>
    </div>
  );
};

export default HeaderPage;
