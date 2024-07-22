import { CategoriesPage, Home } from "../pages";

export const routes = [
  {
    id: 1,
    element: <Home/>,
    path: '/',
  },
  {
    id: 2,
    element: <CategoriesPage />,
    path: '/categories',
  },
  {
    id: 6,
    element: <NotFoundPage />,
    path: '*',
  },
]