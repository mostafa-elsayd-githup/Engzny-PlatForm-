export interface RouteTypeprops {
  path: string;
  element: React.ReactNode;
  children: (
    | {
        index: boolean;
        element: React.ReactNode;
        handle: {
          title: string;
        };
      }
    | {
        path: string;
        element: React.ReactNode;
        handle: { title: string };
      }
  )[];
}
