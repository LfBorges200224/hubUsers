import { LoginContain } from "../../Components/ContainLogin/ContainLogin"
import { LogoStyle } from "../../Styles/Tipograpy"
import { ContainerMain, } from "./StyleLogin"

export const LoginPage = ({setUser}) =>{
    return(
    <ContainerMain>
        <LogoStyle>KenzieHub</LogoStyle>
        <LoginContain setUser = {setUser}/>
    </ContainerMain>
    )
}