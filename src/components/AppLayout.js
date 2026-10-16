import { Outlet } from "react-router";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";


const AppLayout = () => {
  return (
    <div>
      <Header />
         <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;