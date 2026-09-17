const {
    konyvek = require("../database/konyvek_db")
} 

const getHello = (req, res) => {
    res.json({ message: "könyvek Backend" });
}
const getKonyvek = (req, res) => {
    res.json(konyvek);
}
const getKonyvById = (req, res) => {
    const Simaid = Number(req.params.id);
    const konyv = konyvek.find(konyv => konyv.id == Simaid);
    res.json(konyv);
    //const {id} = req.params;
}

module.exports = {
    getHello,
    getKonyvek,
    getKonyvById
}