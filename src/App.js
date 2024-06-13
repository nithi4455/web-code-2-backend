import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Admin from "./Components/Admin/Admin";
import Auth from "./Components/Auth/Auth";
import Booking from "./Components/Bookings/Booking";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Movies from "./Components/Movies/Movies";
import { adminAction, userAction } from "./store";

function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn); 
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(userAction.login())
    } else if(localStorage.getItem("adminId")){
      dispatch(adminAction.login())
    }
  })
  return (
    <div >
      <Header/>
      <section>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/booking/:id' element={<Booking/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
