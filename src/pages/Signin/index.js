import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import styled from "styled-components";
import AuthForm from "../../components/AuthForm";
import Footer from "../../components/Footer";

// Componente React
const Signin = () => {
  // Hook para navegação
  const navigate = useNavigate();
  // Estado para gerenciar erros de login
  const [error, setError] = useState(null);
  // Função para fazer login -> recebe email e senha como parâmetro e retorna um token
  const handleLogin = async (email, password, module) => {
    console.log(email, password, module);
    try {
      setError(null);
      const response = await fetch(module, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const { accessToken } = await response.json();
      const data = jwtDecode(accessToken);
      // Se o token for válido, armazena no localStorage e redireciona para a página inicial
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("firstName", data.dataValues.firstName);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <PageContainer>
      <div className="content-wrapper">
        <div className="logo-wrapper">
          <img src="images/logo-taci.png" alt="logo" />
        </div>
        <h1>Login</h1>
        <h3>Entre para iniciar sua sessão</h3>
        <AuthForm
          onSubmitForm={handleLogin}
          onSubmitButtonText="Acessar"
          onRouteText="esqueci senha"
          onRouteLink="/esqueci-senha"
          error={error}
        />
      </div>
      <Footer />
    </PageContainer>
  );
};

export default Signin;
// Estilização com styled-components
const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content-wrapper {
    width: fit-content;
    max-width: 400px;
    margin: 3% ${({ theme }) => theme.margins.main} 2em;
    display: grid;
    justify-items: center;
    gap: 1em;

    .logo-wrapper {
      width: fit-content;
      margin: 0 auto 30px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
      &::after {
        content: "";
        width: 50%;
        height: 1.6px;
        background: ${(props) => props.theme.colors.bgDark};
        opacity: 0.5;
      }
    }
  }
`;
