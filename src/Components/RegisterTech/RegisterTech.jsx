import { StyledH2 } from "../../Styles/Tipograpy"
import { TechContext } from "../../providers/TechContext"
import { CloseRegisterInput, RemoveRegister, SaveAlt } from "../buttons/Inputs/Buttons"
import { RegisterTechInput } from "../buttons/Inputs/Inputs"
import { ContButton, Dialog, FormRegister, HeaderTech, Label, ModalRegisterDiv, SelectTech } from "./StyleRegister"
import { useContext, useEffect, useRef } from "react"
import { useForm } from "react-hook-form";

export const ModalModify = () =>{
    const ModalRef = useRef(null)
    const ButtonRef = useRef(null)
    const {setIsEdit, DeleteTech, EditTech, isId, isName, techList} = useContext(TechContext)
    const {register, handleSubmit } = useForm()
    useEffect(()=>{
        const handleOutClick = (e) => {
    
          if(!ModalRef.current?.contains(e.target)){
            setIsEdit(false)
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
      const Edit = async (TechData) =>{
        EditTech(isId,TechData)
        setIsEdit(false)
      }

      const HandleDelete = async () =>{
        await DeleteTech(isId)
        setIsEdit(false)
      } 
    return(
        <Dialog role="dialog"> 
            <ModalRegisterDiv ref={ModalRef}>
                <HeaderTech>
                    <StyledH2>tecnologias Detalhes</StyledH2>
                    <CloseRegisterInput ref={ButtonRef} onClick={() => setIsEdit(false)}>X</CloseRegisterInput>
                </HeaderTech>
                <FormRegister onSubmit={handleSubmit(Edit)}>
                    <Label htmlFor="NameRegister">Nome do projeto</Label>
                    <RegisterTechInput id="NameRegister" type="text" placeholder="digite seu titulo aqui"/>
                    <Label htmlFor="RegisterTech">Status</Label>
                    <SelectTech  id="RegisterTech" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediario">Intermediario</option>
                        <option value="Avançado">Avançado</option>
                    </SelectTech>
                    <ContButton>
                        <SaveAlt>Salvar alteracoes</SaveAlt>
                        <RemoveRegister type="button" onClick={()=>{HandleDelete()}}>Excluir</RemoveRegister>
                    </ContButton>
                </FormRegister >
            </ModalRegisterDiv>
        </Dialog>
    )
}