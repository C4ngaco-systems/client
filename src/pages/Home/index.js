import { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StoreCard from "../../components/StoreCard";
// Componente React
const Home = () => {
  // Pegando token de acesso do localStorage
  const accessToken = localStorage.getItem("accessToken");
  // Estado para armazenar as lojas
  const [stores, setStores] = useState([]);
  // Estado para carregamento
  const [isLoading, setIsLoading] = useState(true);
  // Estado para gerenciar a pesquisa de lojas
  const [searchParam, setSearchParam] = useState("");
  // Effect para pegar as lojas
  useEffect(() => {
    let url = "";
    if (searchParam) {
      url = `/search?name=${searchParam}`;
    }

    const getStores = () => {
      try {
        fetch(`http://localhost:4000/api/stores${url}`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setStores(data);
            setIsLoading(false);
          });
      } catch (err) {
        console.error(err.message);
      }
    };
    getStores();
  }, [accessToken, searchParam]);

  return (
    <Container>
      <Navbar />
      <div className="content-wrapper">
        <h1>Lojas Associadas</h1>
        <input
          placeholder="Pesquisar"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <button className="add-button">
          <i className="fas fa-plus-circle"></i>
          Adicionar Lojista
        </button>

        {stores.length > 0 && (
          <div className="stores">
            {stores.map((store) => (
              <StoreCard
                key={store.id}
                name={store.name}
                createdAt={store.createdAt}
                id={store.id}
              />
            ))}
          </div>
        )}
        {isLoading && <h3>Carregando...</h3>}
      </div>
      <Footer />
    </Container>
  );
};
export default Home;

// Estilização com styled-components
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 700;
  }

  .content-wrapper {
    margin: 3% ${({ theme }) => theme.margins.main} 2em;
    padding: 0 1em;
    width: 100%;
    max-width: 1000px;
    display: grid;
    justify-items: center;
    gap: 1.5em;

    .add-button {
      justify-self: flex-start;
      display: flex;
      align-items: center;
      gap: 0.5em;
      border: none;
      font-size: 1.2rem;
      padding: 0.5em 1em;
      border-radius: 50px;
      box-shadow: ${({ theme }) => theme.shadows.main};
    }

    > input {
      width: 100%;
      height: 2em;
      font-size: 1.1em;
      border-radius: 50px;
      text-indent: 2.2em;
      background-image: url("images/magnifying-glass-solid.svg");
      background-repeat: no-repeat;
      background-position: 0.6em center;
      background-size: 1.1em;
    }

    .stores {
      width: 100%;
      display: grid;
      gap: 1em;

      @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
  }
`;
