import express from "express";
import cors from "cors";  
import rateLimit from "express-rate-limit";  
import appRouter from "./routes/index.js";
import "./db/index.js";
const helmet = require('helmet');
const session = require('express-session');
import { connectToDatabase } from "./db/index.js";

const app = express();

//#region middlewares
app.use(express.json());

app.use(helmet());
app.use(cors());  // Habilitar CORS para todas las rutas


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutos
    max: 100,  // Limita a 100 solicitudes por IP cada 15 minutos
    message: "Demasiadas solicitudes desde esta IP, intenta de nuevo más tarde.",
});

app.use(limiter);

// Configuración de sesiones
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Configúralo a true si usas HTTPS
  }));

app.use("/api/v1/products", appRouter);
//#endregion

const PORT = process.env.PORT || 5000;

connectToDatabase()
    .then(() => {
        app.listen(PORT, () => console.log("Servidor abierto en el puerto:", PORT));
    })
    .catch((err) => {
        console.log("Ocurrió un error con la conexión MYSQL. Error =", err);
        process.exit(0);
    });
