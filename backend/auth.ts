import { User, users } from "./users";
import { Request, Response } from "express";
import { apiConfig } from "./api-config";

import * as jwt from 'jsonwebtoken'
export const handleAuthentication = (req: Request, resp: Response) => {
  const user: User = req.body;



  if (isValid(user)) {
    const dbUser = users[user.email]
    const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, 'meat-api-password')
    resp.json({name: dbUser.nome, email: dbUser.email, accessToken: token})
  } else {
    resp.status(403).json({ message: "Dados inválido." });
  }
};

function isValid(user: User): boolean {
  if (!user) {
    return false;
  } else {
    const dbUser = users[user.email];
    return dbUser !== undefined && dbUser.matches(user);
  }
}
