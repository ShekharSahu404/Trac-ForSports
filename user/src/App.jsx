import "./App.css";
import Signup from "./Components/Signup/Signup";
import Hero from "./Components/Hero/Hero";
import AllEvents from "./Components/AllEvents/AllEvents";
import Event from "./Components/Event/Event";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/Login";
import AddEvent from "./Pages/AddEvent/AddEvent";
import RegisterEvent from "./Pages/RegisterEvent";
import MyOrder from "./Pages/MyOrder/MyOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route exact path="/allEvents" element={<AllEvents />}></Route>
          <Route exact path="/event/:id" element={<Event />}></Route>
          <Route
            exact
            path="/event/:id/register"
            element={<RegisterEvent />}
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/myorder/:id" element={<MyOrder />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/AddEvent" element={<AddEvent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
