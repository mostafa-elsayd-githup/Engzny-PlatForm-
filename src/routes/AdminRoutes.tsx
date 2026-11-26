
import AdminLayout from "../layouts/AdminLayout";
import AdminWorkersPage from "../pages/Admin/AdminWorkersPage";
import AdminOrdersPage from "../pages/Admin/AdminOrdersPage";
import AdminFinancialsPage from "../pages/Admin/AdminFinancialsPage";
import AdminServicesPage from "../pages/Admin/AdminServicesPage";
import type { RouteTypeprops } from "../Types/router/RouteType";
  export const adminRouter:RouteTypeprops[] = [
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
  ];

