import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await StudentServices.createStudentIntoDB(student);
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(201).json({
      success: true,
      message: "Student retrieve successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getSingleStudent = async(req: Request, res: Response) => {
  try {
    const {studentId} = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId)
    res.status(201).json({
      success: true,
      message: "single student retrieve successfully",
      data: result
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error
    })
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent
};
