import { User, users } from "./users";
import { Request, Response } from "express";
import { apiConfig } from "./api-config";

import * as jwt from 'jsonwebtoken'
export const handleAuthentication = (req: Request, resp: Response) => {
  const user: User = req.body;


    // resp.json({message: 'ola'})

  if (isValid(user)) {
    const dbUser: User = users[user.email]
    const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, apiConfig.secret)
    resp.json({name: dbUser.name, email: dbUser.email, accessToken: token})
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
