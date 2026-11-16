import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "../pages/LandingPage";
import AdminLayout from "../layouts/AdminLayout";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/loginPage";
import AdminWorkersPage from "../pages/Admin/AdminWorkersPage";
import AdminOrdersPage from "../pages/Admin/AdminOrdersPage";
import AdminFinancialsPage from "../pages/Admin/AdminFinancialsPage";
import AdminServicesPage from "../pages/Admin/AdminServicesPage";
function AdminRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminOrdersPage />,
          handle: { title: "لوحة متابعة عمليات الطلبات الفورية" },
        },
        {
          path: "worker",
          element: <AdminWorkersPage />,
          handle: { title: "شبكة الفنيين المعتمدين والمساحات" },
        },
        {
          path: "services",
          element: <AdminServicesPage />,
          handle: { title: "قائمة الخدمات وتحديد الأسعار المعتمدة" },
        },
        {
          path: "financials",
          element: <AdminFinancialsPage />,
          handle: { title: "المؤشرات المالية وإجمالي الأرباح" },
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AdminRoutes;
