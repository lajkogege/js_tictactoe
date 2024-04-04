import { vizszintes_ell } from "./fuggvenyek.js";

const teszVizszintesEllenorzes = () => {
  const tesztesetek = [
    {
      nev: "Csak O betűk",
      lista: ["O", "O", "O", "O", "O", "O", "O", "O", "O"],
      vart: "OOO@OOO@OOO@",
    },
    {
      nev: "Csak X betűk",
      lista: ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
      vart: "XXX@XXX@XXX@",
    },
    {
      nev: "Üres lista",
      lista: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      vart: "   @   @   @",
    },
    {
      nev: "Vegyes lista",
      lista: [" ", " ", "O", "O", " ", "X", "O", " ", "X"],
      vart: "  O@O X@O X@",
    },
    {
      nev: "Szeparálás nélkül nyerne",
      lista: [" ", "X", "X", "X", " ", " ", " ", " ", " "],
      vart: " XX@X  @   @",
    },
  ];
  tesztesetek.forEach((teszt) => {
    console.log(teszt.nev);
    console.assert(vizszintes_ell(3, teszt.lista) === teszt.vart, "HIBA");
  });
};

export default teszVizszintesEllenorzes;
