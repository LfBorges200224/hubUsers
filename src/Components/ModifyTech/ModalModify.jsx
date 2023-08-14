import { useContext, useEffect, useRef } from "react"
import { StyledH2 } from "../../Styles/Tipograpy"
import { Label, SelectTech } from "../RegisterTech/StyleRegister"
import { BtnRegister, CloseRegisterInput } from "../buttons/Inputs/Buttons"
import { RegisterInput } from "../buttons/Inputs/Inputs"
import { FormModify, HeaderModify, ModalDivModify, OverlayModal } from "./StyleModify"
import { TechContext } from "../../providers/TechContext"
import { useForm } from "react-hook-form";


export const ModalRegister = () =>{
    const ModalRef = useRef(null)
    const ButtonRef = useRef(null)
    const {isOpen, setIsOpen, CreatTech} = useContext(TechContext)
    const {register, handleSubmit } = useForm()
    useEffect(()=>{
        const handleOutClick = (e) => {
    
          if(!ModalRef.current?.contains(e.target)){
            setIsOpen(false)
          }
        }
    
        const handleKeyDown = (e) => {
            if(e.key === "Escape"){
              ButtonRef.current?.click()
            }
    
        }
        window.addEventListener('mousedown',handleOutClick)
        window.addEventListener('keydown',handleKeyDown)
    
        return () =>{
        window.removeEventListener('mousedown',handleOutClick)
        window.removeEventListener('keydown',handleKeyDown)
        }
      },[])
      const Submit = async (TechData) =>{
        const data = {...TechData}
        await CreatTech(data)
        setIsOpen(false)
      }
    return(
        <OverlayModal role="dialog">
            <ModalDivModify ref={ModalRef}>
                <HeaderModify>
                    <StyledH2>Cadastrar Tecnologia</StyledH2>
                    <CloseRegisterInput ref={ButtonRef} onClick={()=>setIsOpen(false)}>x</CloseRegisterInput>
                </HeaderModify>
                <FormModify onSubmit={handleSubmit(Submit)}>
                    <Label htmlFor="RegisterModify">Nome</Label>
                    <RegisterInput type="text" id="RegisterModify" placeholder="Nome do projeto" {...register("title")}/>
                    <Label htmlFor="SelectModify">Selecionar Status</Label>
                    <SelectTech id="SelectModify" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediario">Intermediario</option>
                        <option value="Avançado">Avançado</option>
                    </SelectTech >
                    <BtnRegister>Cadastrar Tecnologia</BtnRegister>
                </FormModify>
            </ModalDivModify>
        </OverlayModal>
    )
}