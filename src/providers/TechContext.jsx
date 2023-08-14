import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { api } from "../Services/Api";
export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isId, setIsId] = useState(false);
  const [isName, setIsName] = useState(false);
  useEffect(() => {
    const TechLoad = async () => {
      try {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID");
        const { data } = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTechList(data.techs);
      } catch (error) {}
    };
    TechLoad();
  }, []);
  const CreatTech = async (TechData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post(`/users/techs`, TechData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList((techList) => [...techList, data]);
    } catch (error) {}
  };
  const DeleteTech = async (TechID) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/users/techs/${TechID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList((techList) =>
        techList.filter((ItensTech) => ItensTech.id !== TechID)
      );
    } catch (error) {
    }
  };
  const EditTech = async (TechID, TechData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.put(`/users/techs/${TechID}`, TechData,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList((oldTechList) => {
        const updatedTechList = oldTechList.map((itens) =>
          itens.id === isId ? { ...itens, ...TechData } : itens 
        );
        return updatedTechList;
      });
    } catch (error) {
        
    }
  };
  return (
    <TechContext.Provider
      value={{
        setIsOpen,
        isOpen,
        EditTech,
        DeleteTech,
        CreatTech,
        techList,
        isEdit,
        setIsEdit,
        setIsId,
        setIsName,
        isId,
        isName,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
