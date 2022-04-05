import { Main } from "../../components/Main";
import { ProductsTable } from "../../components/ProductsTable";

export function ListProduct() {
  return (
    <Main children={<ProductsTable />} />
  );
}
