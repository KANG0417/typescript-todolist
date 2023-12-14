import DetailPage from "pages/DetailPage";
import MainPage from "pages/MainPage";
import Layout from "pages/Layout";
import GlobalStyle from "GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalColor from "GlobalColor";
import GlobalFont from "GlobalFont";

const Router = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalColor />
      <GlobalFont />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
