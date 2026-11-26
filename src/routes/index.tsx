import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/auth/loginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import { adminRouter } from "./AdminRoutes";
import { workerRouter } from "./WorkerRoutes";
import { clientRoutes } from "./ClientRoutes";
export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  ...adminRouter,
  ...workerRouter,
  ...clientRoutes

]);
