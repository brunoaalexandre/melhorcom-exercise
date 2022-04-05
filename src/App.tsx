import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateProduct } from "./pages/CreateProduct";

import { ListProduct } from "./pages/ListProducts";
import { UpdateProduction } from "./pages/UpdateProduct";

import { GlobalStyles } from "./styles/global";

export function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<UpdateProduction />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}