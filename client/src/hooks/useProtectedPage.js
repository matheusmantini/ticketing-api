import { useContext, useEffect } from "react";
import { goToSignInPage } from "../routes/coordinator";
import GlobalStateContext from "../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(GlobalStateContext);
  useEffect(() => {
    /* if (!currentUser.currentUser) {
      goToSignInPage(navigate);
    } */
  }, []);
};

export default useProtectedPage;
