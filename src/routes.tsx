import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from 'react-icons/md';
import SimulationIcon from './components/CustomeIcone/Simulation-Icon'
import Explore from 'components/CustomeIcone/Explore';
import Learning from 'components/CustomeIcone/Learning';
import Profile from 'components/CustomeIcone/profile';
import Login from 'components/CustomeIcone/login';
const routes = [
  // {
  //   name: 'Main Dashboard',
  //   layout: '/admin',
  //   path: 'default',
  //   icon: <MdHome className="h-6 w-6" />,
  // },
  {
    name: 'Learning',
    layout: '/admin',
    path: 'Learning',
    icon: <Learning />,

    secondary: true,
  },
  {
    name: 'Explore',
    layout: '/admin',
    path: 'nft-marketplace',
    icon: <Explore/>,

    secondary: true,
  },
  {
    name: 'Simulation',
    layout: '/admin',
    icon: <SimulationIcon  />,
    path: 'data-tables',
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: 'profile',
    icon: <Profile />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <Login/>,
  },
];
export default routes;
