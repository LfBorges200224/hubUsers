import { RegisterForm, SelectStyled} from "./StyleContainRegister";
import { HelperText, StyledH2, Styledlabel } from "../../Styles/Tipograpy";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ImportantSchema } from "./RegisterSchema";
import { RegisterInput } from "../buttons/Inputs/Inputs";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContexts";
import { useState } from "react";

export const Form = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ImportantSchema),
  });
  const {UserRegister} = useContext(UserContext)
  const submit = async (formData) => {
    UserRegister (formData, setIsLoading)
  };

  return (
    <RegisterForm onSubmit={handleSubmit(submit)}>
      <StyledH2>Criar sua Conta</StyledH2>
      <Styledlabel>Rapido e grátis, vamos nessa</Styledlabel>
      <div className="contInputs">
        <Styledlabel htmlFor="registerName">Nome</Styledlabel>
        <RegisterInput
          id="registerName"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
          required
        />
        {errors.name ? <HelperText>{errors.name.message}</HelperText> : null}

        <Styledlabel htmlFor="registerEmail">Email</Styledlabel>
        <RegisterInput
          id="registerEmail"
          type="mail"
          placeholder="Digite aqui seu email"
          {...register("email")}
          required
        />
        {errors.email ? <HelperText>{errors.email.message}</HelperText> : null}

        <Styledlabel htmlFor="registerPass">Senha</Styledlabel>
        <RegisterInput
          id="registerPass"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          required
        />
        {errors.password ? <HelperText>{errors.password.message}</HelperText> : null}

        <Styledlabel htmlFor="registerPasscomfir">Confirmar Senha</Styledlabel>
        <RegisterInput
          id="registerPasscomfir"
          type="password"
          placeholder="confirme sua senha"
          {...register("confirm")}
          required
        />
        {errors.confirm ? <HelperText>{errors.confirm.message}</HelperText> : null}

        <Styledlabel htmlFor="RegisterAbout">Bio</Styledlabel>
        <RegisterInput
          id="RegisterAbout"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
          required
        />
        {errors.bio ? <HelperText>{errors.bio.message}</HelperText> : null}

        <Styledlabel htmlFor="RegisterContact">Contato</Styledlabel>
        <RegisterInput
          id="RegisterContact"
          placeholder="Opção de contato"
          {...register("contact")}
          required
        />
        {errors.course_module ? <HelperText>{errors.course_module.message}</HelperText> : null}

        <Styledlabel htmlFor="registerSelect">Selecionar módulo</Styledlabel>
        <SelectStyled
          id="registerSelect"
          name="registerSelect"
          {...register("course_module")}
        >
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
          <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
        </SelectStyled>
      </div>
      <button className="RegisterBtn" type="submit">{isLoading ? "Cadastrando..." : "Cadastrar"}</button>
    </RegisterForm>
  );
};
