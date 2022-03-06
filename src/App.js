import './App.css';
import './sb-admin-2.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from './Components/DashboardLayout';
import Home from './Components/Home';
//custom components
import Buttons from './Components/CustomComponents/Buttons';
import Cards from './Components/CustomComponents/Cards';

//utilities
import Colors from './Components/Utilities/Colors';
import Borders from './Components/Utilities/Borders';
import Animation from './Components/CustomComponents/Animation';
import OtherUtilities from './Components/CustomComponents/OtherUtilities';

import Tables from './Components/Tables';
import Charts from './Components/Charts';

//auth
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ForgotPassword from './Components/Auth/ForgotPassword';

//others
import Blank from "./Components/Blank";
import Page404 from "./Components/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/forgot-password" element={<ForgotPassword />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          {/* components */}
          <Route path="components/buttons" element={<Buttons />} />
          <Route path="components/cards" element={<Cards />} />
          {/* Utilities */}
          <Route path="utilities/colors" element={<Colors />} />
          <Route path="utilities/borders" element={<Borders />} />
          <Route path="utilities/animations" element={<Animation />} />
          <Route path="utilities/others" element={<OtherUtilities />} />
          {/* Tables */}
          <Route path="tables" element={<Tables />} />
          {/* charts */}
          <Route path="charts" element={<Charts />} />
          {/* Others */}
          <Route path="blank" element={<Blank />} />
          <Route path="page404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
