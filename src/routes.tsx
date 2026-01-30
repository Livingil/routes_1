import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { CategoryPage } from "./components/category";
import { DetailPage } from "./components/detail";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Home page!</h1>} />

        <Route path=":category" element={<CategoryPage />} />

        <Route path=":category/:id" element={<DetailPage />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
};
