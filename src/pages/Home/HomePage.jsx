import { MainHome, HeaderStyled, NotDo } from "./StylesHome";
import { HomeContain } from "../../Components/ContainHome/ContainHome";
import { LogoStyle } from "../../Styles/Tipograpy";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContexts";
import { ListTech } from "../../Components/Tecnology/ListTecnology";
import { ModalModify} from "../../Components/RegisterTech/RegisterTech";
import { ModalRegister } from "../../Components/ModifyTech/ModalModify";
import { TechContext } from "../../providers/TechContext";

export const HomePage = () => {
  const {UserLogout} = useContext(UserContext)
  const {isOpen, isEdit} = useContext(TechContext)
  return (
    <>
      {isOpen ? <ModalRegister/> : null}
      {isEdit ? <ModalModify/> : null}
        <HeaderStyled>
            <LogoStyle>KenzieHub</LogoStyle>
            <button  className="ReturnBtnHome" onClick={()=>UserLogout()}>Sair</button>
        </HeaderStyled>
        <MainHome>
          <homeContain/>
          <NotDo>
            <ListTech/>
          </NotDo>
        </MainHome>
    </>
  );
};
