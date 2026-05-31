import express from "express";
import userRoutes from "./routes.js";
import  Sequelize  from "sequelize";
import User from "./models/User.js";
import config from "./config/database.cjs";

const app = express();
const sequelize = new Sequelize(config.development);
User.init(sequelize);

app.use(express.json());
User.init(sequelize);
app.use("/usuarios", userRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {console.error("Unable to connect to the database:", err)});
