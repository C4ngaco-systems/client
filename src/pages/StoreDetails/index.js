import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Componente React
const StoreDetails = () => {
  // id: parâmetro da URL
  const id = useParams().id;
  // Pegando token de acesso do localStorage
  const accessToken = localStorage.getItem("accessToken");
  // Estado para armazenar os dados da loja
  const [store, setStore] = useState("");
  // Estado para carregamento
  const [isLoading, setIsLoading] = useState(true);

  // Effect para pegar os dados da loja
  useEffect(() => {
    const getStore = () => {
      try {
        fetch(`http://localhost:4000/api/stores/${id}`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setStore(data);
            setIsLoading(false);
          });
      } catch (err) {
        console.error(err.message);
      }
    };
    getStore();
  }, [accessToken, id]);

  return (
    <PageContainer>
      <Navbar />
      <div className="content-wrapper">
        <h1>Informações da Loja</h1>
        {isLoading && <h3>carregando</h3>}
        {store && (
          <div className="store">
            <p>{store.address}</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

// Estilização com styled-components
const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  .content-wrapper {
    margin: 3% ${({ theme }) => theme.margins.main} 2em;
    padding: 0 1em;
    width: 100%;
    max-width: 1000px;
    display: grid;
    justify-items: center;
    gap: 1.5em;
  }
`;

export default StoreDetails;
