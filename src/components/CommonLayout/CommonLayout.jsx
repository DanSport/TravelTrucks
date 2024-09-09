import { Header } from '../Header/Header';
import { Outlet } from 'react-router';

export const CommonLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
