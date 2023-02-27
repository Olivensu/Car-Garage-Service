import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import RequiredAuth from './requiredAuth/RequiredAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/checkout" element={<RequiredAuth><CheckOut></CheckOut></RequiredAuth>}></Route>
        <Route path="/AddService" element={<RequiredAuth><AddService></AddService></RequiredAuth>}></Route>
        <Route path="/manage" element={<RequiredAuth><ManageServices></ManageServices></RequiredAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
