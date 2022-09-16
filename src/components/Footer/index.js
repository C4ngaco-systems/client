import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <div className="marca-wrapper">
        <p>Powered by C4NGAÇO SYSTEMS ©{year}</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  font-size: .8em;
  width: 100%;
  padding: 0 -200px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.bgDark};
  height: 2.5em;
  margin-top: auto;
  padding: .3em 0;

  .marca-wrapper {
    width: fit-content;
    margin: 0 auto;
  }
`;
