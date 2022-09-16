import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// Componente React
const Navbar = () => {
  // Hook para navegação
  const navigate = useNavigate();
  return (
    <NavStyled className="navbar">
      <div className="container">
        <div className="logo-wrapper" onClick={() => navigate("/home")}>
          <img src="/images/logo-taci-menor.png" alt="company logo" />
        </div>
        <div>hambuquer ---</div>
      </div>
    </NavStyled>
  );
};
// Estilização com styled-components
const NavStyled = styled.nav`
  box-shadow: 0px 0 0.75em 0.25em rgba(235, 143, 169, 0.2);
  height: 60px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.margins.main};
  display: flex;
  align-items: center;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 1em;

    .logo-wrapper {
      max-width: fit-content;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default Navbar;
