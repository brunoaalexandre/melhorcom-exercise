import { FormProduct } from "../../components/FormProduct";
import { Main } from "../../components/Main";

export function CreateProduct() {
  return(
    <Main children={<FormProduct />} />
  );
}