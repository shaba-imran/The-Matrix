import { Outlet } from "react-router-dom";
import Navigation from '../components/Navigation/Navigation';

const Layout = () => {
  return (
    <div className='pb5 pt2'>
      <Navigation />

      <Outlet/>
    </div>
  );
}

export default Layout;