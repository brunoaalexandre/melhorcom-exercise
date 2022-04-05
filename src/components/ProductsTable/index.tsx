import { useEffect, useState } from "react";
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

import { Container, ContainerSkeleton } from "./styles";
import "react-loading-skeleton/dist/skeleton.css";

interface Data {
  _id: string;
  brand: string;
  code: string[];
  color: string;
  data: string;
  endDate: string;
  model: string;
  price: number;
}

export function ProductsTable() {
  const [datas, setDatas] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await api.get("phone", {
        headers: { cpf: "06834420401" },
      });

      await setDatas(response.data);
      setLoading(false);
    }

    getData();
  }, []);

  async function handleDelete(id: string) {
    await api.delete(`phone/${id}`, {
      headers: { cpf: "06834420401" },
    });
    const product = datas.findIndex((data) => data._id === id);
    const productList = [...datas];
    productList.splice(product, 1);
    setDatas(productList);
  }

  return loading ? (
    <ContainerSkeleton>
      <Skeleton count={6} height={50} />
    </ContainerSkeleton>
  ) : (
    <Container>
      <header>
        <h1>Produtos</h1>
        <Link to="/create">
          <button>ADICIONAR</button>
        </Link>
      </header>

      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Modelo</th>
            <th>Preço</th>
            <th>Marca</th>
            <th>Cor</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {datas.map((data) => (
            <tr key={data._id}>
              <td>{data.code}</td>
              <td>{data.model}</td>
              <td>{data.price}</td>
              <td>{data.brand}</td>
              <td>{data.color}</td>
              <td>
                <Link to={`/update/${data._id}`}>
                  <RiEdit2Fill fontSize={20} />{" "}
                </Link>
                <RiDeleteBin2Fill
                  onClick={() => handleDelete(data._id)}
                  fontSize={20}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
