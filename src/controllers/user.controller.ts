import { Request, Response } from "express";
import { userCreateService, userSearchService } from "../services";


export const userSearch = async (req: Request, resp: Response) => {
    const name = req.query.name as string;
    const age = Number(req.query.age)

    console.log("params are ", name)
    //add zod here
    const result = await userSearchService({
        name,
        age
    });
    resp.status(200).json({
        "message": "User list retrived succesfully.",
        data: result
    })
}

export const userCreate = async (req: Request, resp: Response) => {
    const body: User = req.body;
    //add zod here
    const result = await userCreateService(body);
    resp.status(200).json({
        "message": "User with ID is created succesfully",
        data: {
            id: "1"
        }
    })
}