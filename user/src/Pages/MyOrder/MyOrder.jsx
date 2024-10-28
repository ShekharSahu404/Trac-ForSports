import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "./Card";
import axios from "axios";

function MyOrder() {
  const [currId, SetCurrid] = useState("");
  const [info, setData] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const str = String(currentUser.userid);
    axios
      .get(`http://localhost:3000/myorder/${str}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center item-center">
        <div>
          <h1 className="text-[35px] m-auto font-pop mt-[45px] p-3 font-[700] border-[2px] border-b-2">
            My Ordered Event
          </h1>
        </div>
        <div className="w-[60%] h-[100%] my-[30px]  flex m-auto flex-col justify-center item-center   ">
          {info.map((event) => (
            <Card
              key={event._id}
              EventName={event.EventName}
              User={event.UserName}
              Team={event.teamName}
              Total={event.total}
              Date={event.date}
              Location={event.location}
              SubEvents={event.subEvent}
              Img={event.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyOrder;
