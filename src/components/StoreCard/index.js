import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StoreCard = ({ name, createdAt, id }) => {
  const navigate = useNavigate();
  const date = new Date(createdAt);
  const formattedDate = `${date.getMonth()}/${date
    .getFullYear()
    .toString()
    .slice(-2)}`;
  return (
    <CardContainer className="store-card" onClick={() => navigate(`/stores/${id}`)}>
      <div className="img-wrapper">
        <img src="https://via.placeholder.com/100/FFD7F0/000000" alt="" />
      </div>
      <div className="store-card__content">
        <p className="store-card__name">{name}</p>
        <p>Vendas: 999 unidades</p>
        <p>{`Cliente desde: ${formattedDate}`}</p>
      </div>
      {/* <div className="edit-del-button-wrapper">
        <button className="edit-button">
          <i className="fas fa-edit" />
        </button>
        <button className="del-button" onclick="abrirModal()">
          <i className="fas fa-trash-alt" />
        </button>
      </div> */}
    </CardContainer>
  );
};

export default StoreCard;

const CardContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.shadows.main};
  display: flex;
  height: 100px;
  width: 100%;
  overflow: hidden;
  border-radius: 13px;
  transition: 0.1s ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  .img-wrapper {
    max-width: 100px;
    height: 100px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .store-card__content {
    padding: 0.3em 1em;
    height: 100%;
    display: grid;
    align-items: center;
    font-size: 0.8em;

    .store-card__name {
      font-weight: 700;
      font-size: 1.2em;
    }
  }
`;
