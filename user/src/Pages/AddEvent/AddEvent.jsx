import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const AddEvent = () => {
  const [subForms, setSubForms] = useState([
    {
      subEvent: "",
      date: "",
      time: "",
      price: "",
      category: "",
    },
  ]);

  const [inputs, setInputs] = useState({
    title: "",
    about: "",
    summery: "",
    location: "",
    entryfee: "",
    eventday: "",
    eventdate: "",
    imageurl: "",
    creatorId: "",
    contact: "",
  });

  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [urllink, setUrllink] = useState("");
  const [getID, setID] = useState("");

  const curr = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();
  if (!curr) {
    return (
      <div>
        <Header />
        <h1>Loading</h1>
        <Footer />
      </div>
    );
  }

  const handleUpload = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "projectTrac");
    data.append("cloud_name", "dh8teofxu");

    setUploading(true);
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dh8teofxu/image/upload",

        data
      );

      const { url } = res.data;
      const link = url.toString();
      setUrllink(link);

      // console.log(urllink);
      setUploading(false);
      return url;
    } catch (err) {
      console.log(err);
    }
    // setInputs({
    //   ...inputs,
    //   imageurl: urllink,
    // });
  };

  const {
    title,
    about,
    summery,
    location,
    entryfee,
    eventday,
    eventdate,
    imageurl,
    creatorId,
    contact,
  } = inputs;

  const handleSubFormChange = (id, event) => {
    const { name, value } = event.target;
    setSubForms(
      subForms.map((subForm) =>
        subForm.id === id ? { ...subForm, [name]: value } : subForm
      )
    );
  };

  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => {
      return {
        ...inputs,
        [name]: value,
      };
    });
  };

  const addSubForm = () => {
    setSubForms([
      ...subForms,
      {
        id: Date.now(),
        subEvent: "",
        date: "",
        time: "",
        price: "",
        category: "",
      },
    ]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/save-form", {
        inputs: inputs,
        imageurl: urllink,
        creatorId: curr.userid,
        subForms,
      });
      setID(response.data._id);
      navigate(`/event/${response.data._id}`);
    } catch (error) {}
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="py-[30px]  flex-auto  bg-[#F9F9FD]  flex felx-row  justify-center items-center">
        <div className="bg-white xsm:w-[95%]  sm2:w-[60%] sm:w-[80%] rounded-xl mx-[20px] shadow-lg p-6">
          <form onSubmit={handleSubmit2}>
            <h1 className="font-custom mt-[10px] text-[27px] mb-[30px]  font-[600]">
              ADD EVENTS
            </h1>

            <div className="grid grid-cols-2  justify-evenly gap-5">
              <div className=" flex flex-col  gap-3">
                <div className="flex flex-col ">
                  <label className="flex items-start text-[16px] font-pop">
                    Name Of Organization
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Name"
                    value={title}
                    onChange={(event) => handleInputChange2(event)}
                    className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="flex items-start text-[16px] font-pop">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventdate"
                    // placeholder="Date"
                    value={eventdate}
                    onChange={(event) => handleInputChange2(event)}
                    className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="flex items-start text-[16px] font-pop">
                    Event Day
                  </label>
                  {/* <input
                        type="text"
                        name="day"
                        placeholder="Day"
                        value={subForm.day}
                        onChange={(e) => handleSubFormChange(subForm.id, e)}
                        className="border-[2px] w-[100%]  h-[45px] rounded-md px-4 mt-[8px] mb-4 focus:ring-blue-500 focus:border-blue-500 "
                      /> */}
                  <select
                    className="border-[2px] w-[100%]  h-[45px] rounded-md px-4  mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                    value={eventday}
                    type="text"
                    name="eventday"
                    onChange={(event) => handleInputChange2(event)}
                  >
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="flex items-start text-[16px] font-pop">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(event) => handleInputChange2(event)}
                    className="border-[2px] w-[100%]  h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <label className="flex items-start text-[16px] font-pop">
                    Summery
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    type="text"
                    name="summery"
                    placeholder="Summery"
                    value={summery}
                    onChange={(event) => handleInputChange2(event)}
                    className="border-[2px] w-[100%] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
              </div>
              <div className=" flex flex-col  gap-3">
                <div className="flex flex-col">
                  <label className="flex items-start text-[16px] font-pop">
                    About
                  </label>
                  <textarea
                    rows="5"
                    type="text"
                    name="about"
                    placeholder="About"
                    value={about}
                    onChange={(event) => handleInputChange2(event)}
                    className="border-[2px] w-[100%]  rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>

                <div className="flex flex-col mt-[10px] ">
                  <label className="flex items-start text-[16px] font-pop">
                    Entry Fee
                  </label>
                  <input
                    type="number"
                    name="entryfee"
                    placeholder="Fee"
                    value={entryfee}
                    onChange={(event) => handleInputChange2(event)}
                    className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
                <div className="flex flex-col mt-[2px] ">
                  <label className="flex items-start text-[16px] font-pop">
                    Contact
                  </label>
                  <input
                    type="number"
                    name="contact"
                    placeholder="Contact"
                    value={contact}
                    onChange={(event) => handleInputChange2(event)}
                    className="border-[2px] w-[100%] h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
                <div className="flex flex-col  mt-[5px] ">
                  <label htmlFor="" className="flex  text-[16px] font-pop  ">
                    Cover Image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="border-[2px] w-[100%] h-[45px] flex justify-center items-center rounded-md px-4 mt-[4px] py-[5.5px] focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
                <button
                  onClick={handleUpload}
                  className=" bg-[#0f32fa] text-white p-2 px-[12px] mt-[1px] font-semibold justify-center rounded-md w-[130px]  text-[19px]"
                >
                  {uploading ? "uploading" : "Upload"}
                </button>
              </div>
            </div>
          </form>
          <div>
            <h1 className="font-custom mt-[8px] text-[27px] mb-[10px]  font-[600]">
              SUB EVENTS
            </h1>
            <div className="flex flex-col gap-y-5 border-black border-2 rounded-lg p-5 py-6">
              <form onSubmit={handleSubmit}>
                {subForms.map((subForm, index) => (
                  <div key={subForm.id} className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col">
                      <label className="flex items-start text-[16px] font-pop">
                        Name Of Sub Event {index + 1}
                      </label>
                      <input
                        type="text"
                        name="subEvent"
                        placeholder="Name"
                        value={subForm.subEvent}
                        onChange={(e) => handleSubFormChange(subForm.id, e)}
                        className="border-[2px] w-[100%]  h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="flex items-start text-[16px] font-pop">
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={subForm.date}
                        onChange={(e) => handleSubFormChange(subForm.id, e)}
                        className="border-[2px] w-[100%]  h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="flex items-start text-[16px] font-pop">
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        placeholder="Time"
                        value={subForm.time}
                        onChange={(e) => handleSubFormChange(subForm.id, e)}
                        className="border-[2px] w-[100%]  h-[45px] rounded-md px-4 mt-[8px] focus:ring-blue-500 focus:border-blue-500 "
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="flex items-start text-[16px] font-pop">
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        value={subForm.price}
                        onChange={(e) => handleSubFormChange(subForm.id, e)}
                        className="border-[2px] w-[100%]  h-[45px] rounded-md px-4 mt-[8px] mb-4 focus:ring-blue-500 focus:border-blue-500 "
                      />
                    </div>

                    <div className="flex flex-col mt-[-15px]">
                      <label className="flex items-start text-[16px] font-pop">
                        Category
                      </label>
                      <select
                        className="border-[2px] w-[100%]  h-[45px] rounded-md px-4  mt-[8px] mb-4 focus:ring-blue-500 focus:border-blue-500 "
                        value={subForm.category}
                        type="text"
                        name="category"
                        onChange={(e) => handleSubFormChange(subForm.id, e)}
                      >
                        <option value="Cycling">Cycling</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Football">Football</option>
                        <option value="Kho-Kho">Kho-Kho</option>
                      </select>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className=" bg-[#0f32fa] text-white p-2 px-[15px] font-semibold rounded-md   mx-5"
                  onClick={addSubForm}
                >
                  Add Sub Event
                </button>
                <button
                  type="button"
                  onClick={() => removeSubForm(subForms.id)}
                  className=" bg-[#0f32fa] text-white p-2 px-[15px] mt-[20px] font-semibold rounded-md"
                >
                  Remove
                </button>
              </form>
            </div>
            <div></div>

            <button
              type="button"
              className=" bg-[#0f32fa] text-white p-2 px-[15px] mt-[20px] font-semibold rounded-md"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddEvent;

// import React, { useState } from "react";
// import Footer from "../../Components/Footer/Footer";
// import Header from "../../Components/Header/Header";

// const ddEvent = () => {
//   // State to hold the main form data
//   const [mainFormData, setMainFormData] = useState({
//     mainField: "",
//     name: "",
//     date: "",
//     time: "",
//   });

//   // State to hold the subforms data
//   const [subForms, setSubForms] = useState([
//     { id: Date.now(), field: "", name: "", date: "", time: "" },
//   ]);

//   // Handler to change the main form data
//   const handleMainFormChange = (event) => {
//     const { name, value } = event.target;
//     setMainFormData({
//       ...mainFormData,
//       [name]: value,
//     });
//   };

//   // Handler to change subform data
//   const handleSubFormChange = (id, event) => {
//     const { name, value } = event.target;
//     setSubForms(
//       subForms.map((subForm) =>
//         subForm.id === id ? { ...subForm, [name]: value } : subForm
//       )
//     );
//   };

//   // Handler to add a new subform
//   const addSubForm = () => {
//     setSubForms([
//       ...subForms,
//       { id: Date.now(), field: "", name: "", date: "", time: "" },
//     ]);
//   };

//   // Handler to remove a subform
//   const removeSubForm = (id) => {
//     setSubForms(subForms.filter((subForm) => subForm.id !== id));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Forms Data:", mainFormData);
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <label>Main Field:</label>
//           <input
//             type="text"
//             name="mainField"
//             value={mainFormData.mainField}
//             onChange={handleMainFormChange}
//           />
//         </div>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={mainFormData.name}
//             onChange={handleMainFormChange}
//           />
//         </div>
//         <div>
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={mainFormData.date}
//             onChange={handleMainFormChange}
//           />
//         </div>
//         <div>
//           <label>Time:</label>
//           <input
//             type="time"
//             name="time"
//             value={mainFormData.time}
//             onChange={handleMainFormChange}
//           />
//         </div>
//       </form>
//       <div>
//         {subForms.map((subForm, index) => (
//           <div key={subForm.id} className="subform">
//             <h2>Subform {index + 1}</h2>
//             <div>
//               <label>Subform Field {index + 1}:</label>
//               <input
//                 type="text"
//                 name="field"
//                 value={subForm.field}
//                 onChange={(e) => handleSubFormChange(subForm.id, e)}
//               />
//             </div>
//             <div>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={subForm.name}
//                 onChange={(e) => handleSubFormChange(subForm.id, e)}
//               />
//             </div>
//             <div>
//               <label>Date:</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={subForm.date}
//                 onChange={(e) => handleSubFormChange(subForm.id, e)}
//               />
//             </div>
//             <div>
//               <label>Time:</label>
//               <input
//                 type="time"
//                 name="time"
//                 value={subForm.time}
//                 onChange={(e) => handleSubFormChange(subForm.id, e)}
//               />
//             </div>
//             <button type="button" onClick={() => removeSubForm(subForm.id)}>
//               Remove Subform
//             </button>
//           </div>
//         ))}
//       </div>
//       <button type="button" onClick={addSubForm}>
//         Add Subform
//       </button>
//       <button onClick={handleSubmit}>Submitt</button>
//     </div>
//   );
// };
