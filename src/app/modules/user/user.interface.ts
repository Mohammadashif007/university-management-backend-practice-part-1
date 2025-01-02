export type TUser = {
  id: string;
  password: string;
  needsChangePassword: boolean;
  role: "admin" | "student" | "faculty";
  status: "in-progress" | "block";
  isDeleted: boolean;
};
