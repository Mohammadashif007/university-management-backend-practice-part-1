import express from "express";
import { StudentRoutes } from "../modules/student/student.router";
import { UserRoutes } from "../modules/user/user.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/students",
    router: StudentRoutes,
  },
  {
    path: "/users",
    router: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
