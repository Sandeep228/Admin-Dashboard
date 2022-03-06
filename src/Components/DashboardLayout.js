import { Outlet } from "react-router-dom";
import Sidebar from "./Navigation/Sidebar";
import TopNav from "./Navigation/TopNav";
import Footer from "./Navigation/Footer";

const DashboardLayout = () => {
  return ( 
    <>
      <div className="App">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopNav />  
              <Outlet />
            </div>
            <Footer/>
          </div>
        </div>
      </div >
    </>
  );
}
 
export default DashboardLayout;