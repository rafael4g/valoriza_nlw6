import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    // Verificar se o usuario é admin
    // Receber o token

    const authToken = req.headers.authorization;   
    // Validade se token esta preenchido
    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        // Validar se token é valido
        const { sub } = verify(token, process.env.COD_JWT) as IPayload;
        
        req.user_id = sub

        return next();
        
    } catch (err){
        return res.status(401).end();
    }  


    // Recuperar informações do usuario

}