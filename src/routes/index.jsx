import { createBrowserRouter } from 'react-router-dom';
import App from '@/pages/App'; // Home
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import LayoutPublic from '@/components/layout/LayoutPublic';
import Careers from '@/pages/Careers';

export const router = createBrowserRouter([
  {
    path: '/',
    element:<LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/careers',
        element: <Careers />,
      },
    ],
  },
]);
