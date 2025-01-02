/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    sendResponse(res, {
      success: true,
      message: "All Student retrieve successfully",
      data: result,
      statusCode: status.OK,
    });
  } catch (error: any) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    sendResponse(res, {
      success: true,
      message: "Single Student retrieve successfully",
      data: result,
      statusCode: status.OK,
    });
  } catch (error: any) {
    next(error);
  }
};

const updateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const { student } = req.body;
    const result = await StudentServices.updateStudentIntoDB(
      studentId,
      student,
    );
    sendResponse(res, {
      success: true,
      message: "Student updated successfully",
      data: result,
      statusCode: status.OK,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    sendResponse(res, {
      success: true,
      message: "Student deleted successfully",
      data: result,
      statusCode: status.OK,
    });
  } catch (error: any) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
