import { useContext } from "react";
import { StyledH2, StyledH3 } from "../../Styles/Tipograpy";
import { AddTech, ContInformation, TitleInformation } from "../Tecnology/StyleListTecnology"
import { ListUl,} from "../Tecnology/StyleListTecnology"
import { TechContext } from "../../providers/TechContext";


export const ListTech = () =>{
    const {setIsOpen, techList, setIsEdit, setIsName, setIsId} = useContext(TechContext)
    const openEditModal = (TechDatas) => {
        setIsEdit(true)
        setIsId(TechDatas.id)
        setIsName(TechDatas.title)
    }
    return(
        <ContInformation>
            <TitleInformation>
            <StyledH2>tecnologia</StyledH2>
            <AddTech onClick={()=>{setIsOpen(true)}}>+</AddTech>
            </TitleInformation>
           <ListUl >
            {techList.map(itens => (
                <li  key={itens.id} onClick={()=>{openEditModal(itens)}}>
                    <StyledH2>{itens.title}</StyledH2>
                    <StyledH3>{itens.status}</StyledH3>
                </li>
            ))}
           </ListUl>
        </ContInformation>
    )
};