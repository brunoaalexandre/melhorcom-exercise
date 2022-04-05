import { useState, FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { uid } from "uid";
import { api } from "../../services/api";

import { Container } from "./styles";

export function FormProduct() {
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const date = useRef("");
  const endDate = useRef("");
  const [color, setColor] = useState("");
  const [code, setCode] = useState(uid(8));

  const [currentlyDateState, setCurrentlyDateState] = useState("");
  const [lastDateState, setLastDateState] = useState("");

  const data = {
    model,
    price,
    brand,
    color,
    code,
  };

  function handleVerifyContent(event: FormEvent) {
    event.preventDefault();

    if (
      model.replace(/ /g, "").length > 255 ||
      model.replace(/ /g, "").length < 2
    ) {
      alert(
        "Verique se o campo MODELO tem mais de 2 caracteres e menos que 255!"
      );
      return false;
    }
    if (price <= 0) {
      alert("Verifque se o valor está correto!");
      return false;
    }
    if (
      brand.replace(/ /g, "").length > 255 ||
      brand.replace(/ /g, "").length < 2
    ) {
      alert(
        "Verique se o campo MARCA tem mais de 2 caracteres e menos que 255!"
      );
      return false;
    }

    const splitDate = currentlyDateState.split("-");
    const formatDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    date.current = formatDate;

    const splitEndDate = lastDateState.split("-");
    const formatEndDate = `${splitEndDate[2]}/${splitEndDate[1]}/${splitEndDate[0]}`;
    endDate.current = formatEndDate;

    if (code.length < 8) {
      return false;
    }

    createProduct();
  }

  async function createProduct() {
    try {
      const response = await api.post(
        "phone",
        { ...data, date: date.current, endDate: endDate.current },
        {
          headers: {
            "Content-Type": "application/json",
            cpf: "06834420401",
          },
        }
      );

      setModel("");
      setBrand("");
      setPrice(0);
      setColor("");

      alert("Cadastrado com sucesso!");
    } catch (e) {
      alert("Todos os campos devem ser preenchidos corretamente!");
      console.log(e);
    }
  }

  return (
    <Container>
      <h1>Detalhes do produto</h1>
      <form onSubmit={handleVerifyContent}>
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
            type="date"
            min="2018-12-25"
            placeholder="15/03/2021"
            value={currentlyDateState}
            onChange={(e) => setCurrentlyDateState(e.target.value)}
          />
        </div>
        <div>
          <label>Fim das vendas</label>
          <input
            type="date"
            min={currentlyDateState}
            placeholder="14/06/2021"
            value={lastDateState}
            onChange={(e) => setLastDateState(e.target.value)}
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
    </Container>
  );
}
