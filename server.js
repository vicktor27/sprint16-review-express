import express from "express";
import cors from "cors";

const app = express(); //codigo, inicia a configurar
const PORT = 3000; //es una configuracion
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());

//endpoint
app.get("/saludo", (req, res) => {
  res.json({
    message:
      "Hola Arlente, esto vino desde Gomez Palacio Durango, hasta Queretaro",
  });
});

//inicia el servidor
app.listen(PORT, () => {
  console.log("Servidor Ejecutandose en http://localhost:" + PORT);
});
