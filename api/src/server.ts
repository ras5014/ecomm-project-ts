import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import logger from "./utils/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// Default Middlewares
app.use(cors());
app.use(helmet());
const morganFormat = ":method :url :status :response-time ms";
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message: string) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);
app.use(express.json());

// Router Middlewares

// Error Handler Middleware
app.use(errorHandler);

// notFound Middleware

// Start Server
const PORT = process.env.PORT || 8080;
app
  .listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
  })
  .on("error", (err) => {
    logger.error(err.message);
  });
