import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LogerMiddlware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("REQUEST...");
        next();
    }
}