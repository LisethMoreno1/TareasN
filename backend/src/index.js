const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routes/user")
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8500;
//middleware
app.use(express.json());
app.use(cors({
  origin: "*",
  credentals:true
}))
app.use("/api", userRouter);

//route
app.get("/", (req, res) => {
  res.send("Bienvenidos a mi api");
});

//MONGODB CONECTION
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conexion correcta"))
  .catch((error) => console.log(error));



app.listen(port, () => console.log("corriendo en el puerto", port));
