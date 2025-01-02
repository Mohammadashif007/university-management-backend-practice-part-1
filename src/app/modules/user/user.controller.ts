import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { student, password } = req.body;
    const result = await UserServices.createStudentIntoDB(password, student);
    sendResponse(res, {
      success: true,
      message: "Student created successfully",
      data: result,
      statusCode: status.OK,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
