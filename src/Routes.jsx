import { createBrowserRouter ,useNavigate} from 'react-router-dom';
import Deshboard from './Deshboard';
import UserTitle from './UserTitle';
import SignUp from './register';
import SignIn from './login';
import UpdateProfile from './UpdateProfile';
import CurrentProfile from './CurrentProfile';

export const mainRoutes = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <SignIn />,
      },
      {
        path: '/register',
        element: <SignUp />,
      },
      {
        path: '/deshboard',
        element: <Deshboard />,
      },
      {
        path: '/projects/*',
        element: <Deshboard />,
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile />,
      },
      {
        path: '/currentProfile',
        element: <CurrentProfile />,
      },
      {
        path: '/userTitle',
        element: <UserTitle />,
      },
    ],
  },
]);



