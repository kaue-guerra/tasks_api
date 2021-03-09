import { getRepository } from 'typeorm';
import { Tasks } from '../entity/Tasks';
import { request, Request, Response } from 'express';

export const getTasks = async( request : Request, response: Response) =>{
    
    const tasks = await getRepository(Tasks).find();
    return response.json(tasks)
}

export const saveTask = async( request: Request, response:Response) =>{

    const task = await getRepository(Tasks).save(request.body);
    response.json(task);
}