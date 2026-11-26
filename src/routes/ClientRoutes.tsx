import ClientLayout from "../layouts/ClientLayout";
import MyAddress from "../pages/Client/MyAddress";
import MyOrdersPage from "../pages/Client/MyOrdersPage";
import NewOrderPage from "../pages/Client/NewOrderPage";

export const clientRoutes = [
  {
    path: "client",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <NewOrderPage />,
        handle: { title: "اختر خدمة الصيانة واطلب فنياً الآن" },
      },
      {
        path: "MyOrdersPage",
        element: <MyOrdersPage />,
        handle: { title: "سجل طلباتي ومتابعة الفني المباشرة" },
      },
      {
        path: "MyAddress",
        element: <MyAddress />,
        handle: { title: "بيانات العميل والعناوين المحفوظة" },
      },
    ],
  },
];
