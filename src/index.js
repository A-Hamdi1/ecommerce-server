const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
dotenv.config();
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const logger = require("./utils/logger");
const CreateAllFolder = require("./config/uploadFolderCreateScript");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

connectDB();
CreateAllFolder();

app.use(
  "/userPictures",
  express.static(path.join(__dirname, "../public/Users"))
);

app.use("/api/users", userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
