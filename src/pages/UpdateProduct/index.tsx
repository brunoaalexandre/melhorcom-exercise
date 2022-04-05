import { useEffect, useState, FormEvent } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container } from "./styles";

export function UpdateProduction() {
  const { id } = useParams();
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("2022-04-05T00:00:00.000Z");
  const [endDate, setEndDate] = useState("2022-04-05T00:00:00.000Z");
  const [color, setColor] = useState("");
  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await api.get(`phone/${id}`, {
        headers: { cpf: "06834420401" },
      });

      setModel(response.data.model);
      setBrand(response.data.brand);
      setPrice(response.data.price);
      setDate(
        new Intl.DateTimeFormat("pt-BR").format(new Date(response.data.date))
      );
      setEndDate(
        new Intl.DateTimeFormat("pt-BR").format(new Date(response.data.endDate))
      );
      setColor(response.data.color);
      setCode(response.data.code);
      setLoading(false);
    }

    getData();
  }, []);

  const data = {
    model,
    brand,
    price,
    date,
    endDate,
    color,
    code,
  };

  async function handleUpdateProduct(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.patch(`phone/${id}`, data, {
        headers: { cpf: "06834420401" },
      });
      alert("Atualizado com sucesso!");
    } catch (e) {
      alert("Todos os campos devem ser preenchidos corretamente!");
    }
  }

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Skeleton count={6} height={20} />
        ) : (
          <>
            <h1>Detalhes do produto</h1>
            <form onSubmit={handleUpdateProduct}>
              <div>
                <label>Modelo</label>
                <input
                  type="text"
                  placeholder="XT2041-1"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
              <div>
                <label>Marca</label>
                <input
                  type="text"
                  placeholder="Motorola"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div>
                <label>Cor</label>
                <br />
                <select onChange={(e) => setColor(e.target.value)}>
                  <option selected hidden>
                    Selecione uma cor
                  </option>
                  <option value="BLACK">Preto</option>
                  <option value="WHITE">Branco</option>
                  <option value="PINK">Rosa</option>
                  <option value="GOLD">Dourado</option>
                </select>
              </div>
              <div>
                <label>Preço</label>
                <input
                  type="text"
                  placeholder="1.400,00"
                  value={price}
                  onChange={(e) => setPrice(+e.target.value)}
                />
              </div>
              <div>
                <label>Início das vendas</label>

                <input
                  type="text"
                  placeholder="15/03/2021"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label>Fim das vendas</label>
                <input
                  type="text"
                  placeholder="14/06/2021"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div></div>
              <div>
                <Link to="/">
                  <button>VOLTAR</button>
                </Link>
                <button type="submit">SALVAR</button>
              </div>
            </form>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}
