const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");
const cookieParser=require("cookie-parser")
app.use(express.json());
app.use(cookieParser());
// {================================ROUTES_IMPORT====================}
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use("/api/v1", product);
app.use("/api/v1", user);
// {==================MIDLEWARE FOR ERROR=============================}
app.use(errorMiddleware);
module.exports = app;
