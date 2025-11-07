import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import { BrowserRouter, Routes, Route } from "react-router";
import WatchPage from "./components/watchPage/WatchPage";
import Body from "./components/Body";

createRoot(document.getElementById("root")).render(
// read about strict mode
  <StrictMode>

    {/* code for providing redux store to the entire app */}
    <Provider store={store}>

      {/* code for react-router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Body />} />
            <Route path="/watch/:id" element={<WatchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
