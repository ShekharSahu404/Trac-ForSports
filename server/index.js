const express = require("express");
const app = express();
const InitiateMongoServer = require("./db");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const eventRoute = require("./Routes/EventRoute");
const regEvent = require("./Routes/RegisterRoute");
const Payment = require("./Routes/PaymentRoute");
const Myorder = require("./Routes/MyOrderRoute");
const cors = require("cors");
const showEvent = require("./Controllers/ShowEventController");

const port = 3000;

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
InitiateMongoServer();

app.use("/", authRoute);

app.use("/save-form", eventRoute);
app.use("/show-events", showEvent);
app.use("/reg-event", regEvent);
app.use("/payment", Payment);
app.use("/myorder", Myorder);

console.log("App listen at port 3000");
