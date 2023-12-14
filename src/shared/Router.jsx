import Detail from "pages/Detail";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalColor from "./GlobalColor";
import GlobalFont from "./GlobalFont";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalColor />
      <GlobalFont />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
