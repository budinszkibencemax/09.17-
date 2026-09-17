const express = require("express");
const app = express();
const port = 3030;

const { 
    getHello,
    getKonyvek,
    getKonyvById,
    createKonyv
} = require("./services/konyv_service");

// req.body miatt
app.use(express.json());

app.get("/hello", getHello);
app.get("/konyvek", getKonyvek);

// paraméterezés --> ugyan az a végpont különböző válaszokat tud adni a paramétertől függően 
// egy végpontnak van request és response objektuma, a paramétereket a requestben találod
// req.params.parameternev --> req.params["parameternev"]
// paraméter megadása esxpress js-ben: "/könyvek/:id" teszt: /könyvek/2
// paraméterben szereplőadatok szövegek "2"

app.get("/konyvek/:id",getKonyvById);

// adatfelvitel
// Post kérés
// req.body --> önmagában a végpont nem tudja mi ez ezért kellapp.use(express.json()) 
// app.use(express.json()) --> megmondja hogy jsonben fogadjuk az adatok
app.post("/ujkonyv", createKonyv);


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

