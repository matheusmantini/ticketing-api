import Router from "./routes/Router";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
};

export default App;
