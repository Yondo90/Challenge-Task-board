import { Prisma, PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

const prisma = new PrismaClient();

export const createTask: RequestHandler = async (req, res, next) => {
  const taskboard = await prisma.task.create({
    data: { ...req.body },
  });
  res.status(200).json(taskboard);
};

export const getTask: RequestHandler = async (req, res, next) => {
  const recoverTask = await prisma.task.findMany({});
  res.status(200).json(recoverTask);
};

export const updateTask: RequestHandler = async (req, res, next) => {
  const modifyTask = await prisma.task.update({
    where: {
      idtask: req.params.idtask,
    },
    data: {
      ...req.body,
    },
  });
  res.status(200).json(modifyTask);
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  const delTask = await prisma.task.delete({
    where: {
      idtask: req.params.idtask,
    },
  });
  res.status(200).json(delTask);
};

export const getTaskById:RequestHandler = async(req,res,next) =>{
    const taskById = await prisma.task.findUnique({
        where:{
            idtask:req.params.idtask,
        },
    });
    res.status(200).json(taskById);
};