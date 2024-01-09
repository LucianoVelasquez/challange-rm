import "./App.css";
import { Project } from "./pages/Project";
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Project/>} ></Route>

        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
