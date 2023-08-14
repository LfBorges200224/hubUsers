import { HelperText, StyledH2, StyledH3, Styledlabel } from "../../Styles/Tipograpy";
import { LoginContainer } from "../../pages/Login/StyleLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImportantLoginSchema } from "./SchemaLogin";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { InputsStyle } from "../buttons/Inputs/Inputs";
import { UserContext } from "../../providers/UserContexts";
import { useState } from "react";


export const LoginContain = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ImportantLoginSchema),
  });
  
  const { UserLogin } = useContext(UserContext)
  const submit = (formData) => {
    UserLogin(formData, setIsLoading)
  };
  

  return (
    <LoginContainer onSubmit={handleSubmit(submit)}>
      <StyledH2>Login</StyledH2>
      <div className="containInput">
        <Styledlabel htmlFor="new-email">Email</Styledlabel>
        <InputsStyle
          id="new-email"
          placeholder="digite seu Email"
          {...register("email")}
        />
        {errors.email ? <HelperText>{errors.email.message}</HelperText> : null}
        <Styledlabel htmlFor="new-password">Senha</Styledlabel>
        <InputsStyle
          id="new-password"
          placeholder="digite sua senha"
          {...register("password")}
        />
        {errors.password ? (
          <HelperText>{errors.password.message}</HelperText>
        ) : null}
      </div>
      <button className="btnSubmiteLogin" type="submit">
        {isLoading ? "Logando..." : "Enviar"}
      </button>
      <div className="containRegister">
        <Styledlabel>Ainda não possui uma conta?</Styledlabel>
        <Link className="BtnRegisterStyle" to="/register">
          <StyledH3>Cadastre-se</StyledH3>
        </Link>
      </div>
    </LoginContainer>
  );
};
