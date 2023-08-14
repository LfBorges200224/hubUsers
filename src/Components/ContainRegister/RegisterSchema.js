import { z } from "zod";

export const ImportantSchema = z.object({
    name: z.string().min(3,"O nome é obrigatório") ,
    email: z.string().min(1,"O E-mail é obrigatório").email("Forneca um email valido"),
    password: z.string().min(8, "A senha precisa conter pelo menos 8 caracteres.")
    .regex(/(?=.*?[A-Z])/, "E necessario pelo menos uma letra maiuscula.")
    .regex(/(?=.*?[a-z])/, "E necessario pelo menos uma letra minuscula.")
    .regex(/(?=.*?[0-9])/, "E necessario pelo menos um numero.")
    .regex(/(?=.?[!@#$%^&])/, "E necessario pelo menos uma letra especial."),
    confirm: z.string().min(1,"Confirmar senha e obrigatorio"),
    bio: z.string().min(3,"A bio e obrigatoria"),
    contact: z.string().regex(/^\d{10,11}$/, "O contato precisa ser um número com 10 a 11 dígitos."),
    course_module: z.string().nonempty('Por favor, selecione um módulo'),
}).refine(({password, confirm})=> confirm === password, {
    message:"A confirmacao e a senha preisao corresponder",
    path: ["confirm"],
})