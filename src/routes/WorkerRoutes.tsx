import WorkerLayout from "../layouts/WorkerLayout";
import AvailableOrdersPage from "../pages/worker/AvailableOrdersPage";
import ProfitsPage from "../pages/worker/ProfitsPage";
import WorkerActiveTaskPage from "../pages/worker/WorkerActiveTaskPage";
import type { RouteTypeprops } from "../Types/router/RouteType";

export const workerRouter:RouteTypeprops[] = [
  {
    path: "worker",
    element: <WorkerLayout />,
    children: [
      {
        index: true,
        element: <AvailableOrdersPage />,
        handle: { title: "الطلبات المتاحة للاستلام الفوري" },
      },
      {
        path: "ActiveTask",
        element: <WorkerActiveTaskPage />,
        handle: { title: "إدارة وتنفيذ مهامي الحالية" },
      },
      {
        path: "Profits",
        element: <ProfitsPage />,
        handle: { title: "محفظة الأرباح وسجل المهام المكتملة" },
      },
    ],
  },
];
