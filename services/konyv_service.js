const {
    konyvek
} = require("../database/konyvek_db")

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
const createKonyv =  (req, res) => {
/*
    {
        id: 14,
        title: "A Da Vinci-kód",
        author: "Dan Brown",
        category: "Krimi",
        year: 2003,
        pages: 608,
        price: 4590,
        views: 2900
    } 
*/
    //const {id, title, author, category, year, pages, price, views} = req.body;
    console.log(req.body);
}

module.exports = {
    getHello,
    getKonyvek,
    getKonyvById,
    createKonyv
}