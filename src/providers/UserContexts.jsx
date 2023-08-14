import { createContext, useEffect } from "react"
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../Services/Api";

export const UserContext = createContext({});

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const {reset} = useForm()
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false)
    const CurrentPath = window.location.pathname
    
    
    useEffect(()=>{
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID")
        const loadUser = async () => {
            try{
                setLoading(true)
                const {data} = await api.get(`/users/${id}`, { 
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data);
                navigate(CurrentPath);
            }catch(error){
            }finally{
                setLoading(false)
            }
        }
        if(token && id){
            loadUser();
        }
    }, [])

    const UserLogin = async (formData , setIsLoading)=>{
        
    try {
      const {data} = await api.post("/sessions", formData);
      setIsLoading(true);
      reset();
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      notifySuccess();
      setUser(data.user);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      notifyError();
    }finally{
        setIsLoading(false);
    }
    };

    const UserRegister = async (formData, setIsLoading)=>{
        try{
            const response = await api.post("/users", formData);
            SucessRegister()
            reset()
            setIsLoading(true)
            setTimeout(()=>{
              navigate("/")
            },3000)
        }catch(error){
            ErroRegister();
        }finally{
            setIsLoading(false)
        }
    }

    const UserLogout = ()=>{
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUser(null)
        NotifyExit()
        setTimeout(() => {
            navigate("/");
          }, 5000);
        navigate("/")
    }

    const NotifyExit = () =>{
        toast.success("Saindo")
    }

    const ErroRegister = () =>{
        toast.error("Alguma coisa deu errado")
    }

    const SucessRegister = () => {
    toast.success("Conta Criado com sucesso");
    };

    const notifySuccess = () => {
        toast.success("Conta logada com sucesso");
    };
    const notifyError = () => {
        toast.error("Login invalido");
    };

    return(
        <UserContext.Provider value={{ loading, user, UserLogin, UserRegister, UserLogout}}>
            {children}
        </UserContext.Provider>
    )
}