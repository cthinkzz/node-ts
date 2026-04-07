import { NextFunction, Request, Response } from "express";

export function errorHandler(err: Error, req: Request, resp: Response, next: NextFunction) {
    // console.log("Errr ", err)
    resp.status(500).json({
        "message": err.message,
        "description": "Hello World"
    })
}