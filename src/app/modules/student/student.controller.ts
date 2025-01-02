/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import { StudentValidations } from "./student.validation";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { student } = req.body;
    const validatedData =
      StudentValidations.studentValidationSchema.parse(student);
    const result = await StudentServices.createStudentIntoDB(validatedData);
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(201).json({
      success: true,
      message: "Student retrieve successfully",
      data: result,
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
    res.status(201).json({
      success: true,
      message: "single student retrieve successfully",
      data: result,
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
    const result = await StudentServices.updateStudentIntoDB(studentId, student);
    res.status(200).json({
      success: true,
      message: "student updated successfully",
      data: result,
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
    res.status(200).json({
      success: true,
      message: "student deleted successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
