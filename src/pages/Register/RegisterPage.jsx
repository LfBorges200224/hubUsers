import { ContainerMain } from "./StyleRegister";
import { Form } from "../../Components/ContainRegister/ContainRegister";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { LogoStyle, StyledH3 } from "../../Styles/Tipograpy";



export const RegisterPage = () => {
  return (
    <ContainerMain>
      <div className="headerCont">
        <LogoStyle>KenzieHub</LogoStyle>
        <Link to="/" className="BtnBack">
          <StyledH3>Voltar</StyledH3>
        </Link>
      </div>
      <Form />
    </ContainerMain>
  );
};
