import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function RegisterEvent() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedValues, setSelectedValues] = useState([]);
  const [title, setTitle] = useState("");
  const [regid, SetRegid] = useState("");
  const [res, setRes] = useState({});
  const [currId, SetCurrid] = useState("");
  const [subEvent, SetSubevent] = useState([]);

  const [regData, setRegData] = useState({
    userName: "",
    teamName: "",
  });

  const { userName, teamName } = regData;

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const str = String(currentUser.userid);
    SetCurrid(str);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/show-events/${id}`)
      .then((response) => {
        setData(response.data);

        setLoading(false);
        setTitle(data.title);
      })

      .catch((error) => console.error(error));
  }, []);

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setRegData((inputs) => {
      return {
        ...inputs,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    const temp = id + currId;
    console.log(temp);
    SetRegid(temp);
    console.log("----------", regid, "-----------");
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/reg-event", {
        id,
        regData: regData,
        total,
        title: data.title,
        temp,
        currId,
        date: data.eventdate,
        location: data.location,
        subEvent,
        img: data.imageurl,
      });
      // console.log(response);
      setRes(response);
      buyFunction();
      // navigate(`/event/${getID}/payment`);
    } catch (error) {}
  };

  const buyFunction = async () => {
    try {
      const temp = id + currId;
      const response = await axios.post("http://localhost:3000/payment", {
        temp,
      });
      if (response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
  };

  const handlePrice = (event) => {
    const name = event.target.name;
    const value = Number(event.target.value);
    if (event.target.checked) {
      setSelectedValues((prevValues) => [...prevValues, value]);
      SetSubevent((subEve) => [...subEve, name]);
    } else {
      setSelectedValues((prevValues) => prevValues.filter((v) => v !== value));
    }
  };

  const total = selectedValues.reduce(
    (acc, curr) => Number(acc) + Number(curr) + Number(data.entryfee),
    0
  );

  if (loading || !currId) {
    return (
      <div>
        <Header />
        <h1>Loading</h1>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="py-[30px]  flex-auto  bg-[#F9F9FD]  flex felx-row  justify-center items-center">
        <div className="bg-white  xsm:w-[95%]  sm2:w-[60%] sm:w-[80%]  rounded-xl mx-[20px] shadow-lg p-6">
          <form onSubmit={handleSubmit2}>
            <h1 className="font-custom mt-[10px] text-[27px] mb-[30px]  font-[600]">
              Register For Event
            </h1>

            <div className="grid grid-cols-2  justify-evenly gap-5">
              <div className=" flex flex-col  gap-3">
                <div className="flex flex-col items-start ">
                  <label className="flex justify-start text-[16px] font-pop ">
                    Name Of Organization
                  </label>
                  <div className="border-[2px] w-[100%]  h-[45px] rounded-md pt-1 px-3 mt-[5px] flex items-start justify-start">
                    <h1 className="text-[16px] font-pop font-semibold mt-1 ">
                      {data.title}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col items-start ">
                  <label className="flex items-start text-[16px] font-pop">
                    Event Date
                  </label>
                  {/* <input
                    type="date"
                    name="eventdate"
                    // placeholder="Date"

                    className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  /> */}
                  <div className="border-[2px] w-[100%]  h-[45px] rounded-md pt-1 px-3 mt-[5px] flex items-start justify-start">
                    <h1 className="text-[16px] font-pop font-semibold mt-1 ">
                      {data.eventdate}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="flex items-start text-[16px] font-pop">
                    Event Day
                  </label>
                  <div className="border-[2px] w-[100%]  h-[45px] rounded-md pt-1 px-3 mt-[5px] flex items-start justify-start">
                    <h1 className="text-[16px] font-pop font-semibold mt-1 ">
                      {data.eventday}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <label className="flex items-start text-[16px] font-pop">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Name"
                    value={userName}
                    onChange={(event) => handleInputChange2(event)}
                    className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="flex items-start text-[16px] font-pop">
                    Team Name
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    placeholder="Name"
                    value={teamName}
                    onChange={(event) => handleInputChange2(event)}
                    className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
              </div>

              <div className=" flex flex-col  gap-3 mt-[-10px]">
                <div className="flex flex-col mt-[10px] ">
                  <label className="flex items-start text-[16px] font-pop">
                    Entry Fee
                  </label>
                  <div className="border-[2px] w-[100%]  h-[45px] rounded-md pt-1 px-3 mt-[5px] flex items-start justify-start">
                    <h1 className="text-[16px] font-pop font-semibold mt-1 ">
                      {data.entryfee}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="flex items-start text-[16px] font-pop">
                    Location
                  </label>
                  <div className="border-[2px] w-[100%]  h-[45px] rounded-md pt-1 px-3 mt-[5px] flex items-start justify-start">
                    <h1 className="text-[16px] font-pop font-semibold mt-1 ">
                      {data.location}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="flex items-start text-[18px] font-pop my-2  ">
                    Select Sub Events
                  </h1>
                  {data.subForms.map((item, index) => (
                    <div key={index}>
                      <label className="flex items-center font-semibold text-[18px] font-pop gap-2 my-1 ">
                        <input
                          type="checkbox"
                          className="size-5"
                          onChange={handlePrice}
                          value={item.price}
                          name={item.subEvent}
                        />
                        {item.subEvent}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <label className="flex items-start text-[16px] font-pop">
                    Total Price
                  </label>
                  <div className="border-[2px] w-[100%]  h-[45px] rounded-md pt-1 px-3 mt-[5px] flex items-start justify-start">
                    <h1 className="text-[16px] font-pop font-semibold mt-1 ">
                      {total}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <button
            type="button"
            onClick={handleSubmit}
            className=" bg-[#0f32fa] text-white p-2 px-[15px] mt-[20px] font-semibold rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterEvent;
