import Routing from "_utils/routing";
import "./App.css";
import { store } from "./_redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routing />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
