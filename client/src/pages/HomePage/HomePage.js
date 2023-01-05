import { useContext } from "react";
import HeaderPage from "../Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../global/GlobalStateContext";

const HomePage = () => {
  useProtectedPage();
  const { currentUser } = useContext(GlobalStateContext);
  return (
    <div>
      <HeaderPage />
      {currentUser.currentUser && currentUser.currentUser.email && (
        <h1>
          You are signed in with '
          {currentUser.currentUser && currentUser.currentUser.email}'
        </h1>
      )}
      {!currentUser.currentUser && (
        <h1>
          You are NOT signed in
        </h1>
      )}
    </div>
  );
};

export default HomePage;
