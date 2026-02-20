const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const app = express();
const PORT = process.env.PORT || 3000;

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("tresPuntos");
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
  }
}

connectDB();

app.use(cors());
app.use(express.json());


// 🔥 POST
app.post("/api/productos", async (req, res) => {
  try {
    const resultado = await db
      .collection("productos")
      .insertOne(req.body);

    res.status(201).json({
      mensaje: "Producto guardado en MongoDB",
      idMongo: resultado.insertedId
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 🔥 GET
app.get("/api/productos", async (req, res) => {
  try {
    const productos = await db
      .collection("productos")
      .find()
      .toArray();

    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 🔥 DELETE
app.delete("/api/productos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await db.collection("productos").deleteOne({ id });

    res.json({ mensaje: "Producto eliminado de MongoDB" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
