import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.router";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";

const app: Application = express();

// ! parser
app.use(express.json());
app.use(cors());

// ! application route
app.use("/api/v1/students", StudentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// ! global error handler
app.use(globalErrorHandler);

export default app;
