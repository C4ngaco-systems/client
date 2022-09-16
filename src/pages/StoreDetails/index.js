import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StoreDetails = () => {
  const id = useParams().id;
  const accessToken = localStorage.getItem("accessToken");
  const [store, setStore] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
        {store && (
          <div className="store">
            <h1>{store.address}</h1>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100%;
  display: flex;
`;

export default StoreDetails;
