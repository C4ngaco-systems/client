import styled from "styled-components";
import { useState } from "react";

const AuthForm = ({
  onSubmitForm,
  onSubmitButtonText,
  onRouteText,
  onRouteLink,
  error,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [module, setModule] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmitForm(email, password, module);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <select value={module} onChange={(e) => setModule(e.target.value)}>
          <option defaultValue="" value="">
            -- selecione o módulo --
          </option>
          <option value="http://localhost:4000/api/security/login">
            Administrativo
          </option>
          <option value="/taci-lojista/login/alterar-senha.html">
            Lojista
          </option>
          <option value="/taci-vendedor/login/alterar-senha.html">
            Vendedor
          </option>
        </select>
        {/* <!-- e-mail --> */}
        <div className="box-wrapper">
          <label htmlFor="e-mail">E-mail</label>
          <input
            type="text"
            id="e-mail"
            placeholder="meu-email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <!-- senha --> */}
        <div className="box-wrapper">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <h4 style={{color: 'red'}}>{error}</h4>}
        {/* <div
          className="g-recaptcha"
          data-sitekey="6LehaJ4dAAAAAOZBnu8mvcPJOj71NFyEJDW55_P0"
          data-callback="recaptcha_callBack"
        ></div> */}
        <button className="cta-button enabled">{onSubmitButtonText}</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    min-height: 250px;

    select {
      height: 2em;
      border: 2px solid ${(props) => props.theme.colors.bgDark};
      border-radius: 6px;
      font-size: 1em;
      text-indent: 3px;
    }

    .box-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.3em;
      height: fit-content;

      label {
        text-indent: 3px;
        font-size: 0.8em;
      }
      > input {
        font-size: 1em;
        height: 2em;
        border-radius: 6px;
        text-indent: 3px;
      }
    }
    .cta-button {
      margin-top: auto;
      height: 2.5em;
      font-size: 1.2em;
      font-weight: 600;
      color: ${(props) => props.theme.colors.main};
      border: 2px solid ${(props) => props.theme.colors.main};
      border-radius: 6px;
      cursor: pointer;

      &.enabled {
        background: ${(props) => props.theme.colors.main};
        color: ${(props) => props.theme.colors.dark};
      }
    }
  }
`;

export default AuthForm;
