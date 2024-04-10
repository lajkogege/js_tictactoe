import { fuggoleges_ell } from "./fuggvenyek.js";

const tesztFuggolegesEllenorzes = () => {
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
      lista: ["X", "X", "O", "O", " ", " ", "X", "X", "O"],
      vart: "XOX@X X@O O@",
    },
    {
      nev: "Szeparálás nélkül nyerne",
      lista: ["X", "O", "X", "O", "X", "O", "O", "X", "O"],
      vart: "XOO@OXX@XOO@",
    },
    {
      nev: "Döntetlen lista",
      lista: ["X", "O", "X", "O", "X", "O", "O", "O", "X"],
      vart: "XOO@OXO@XOX@",
    },
  ];
  tesztesetek.forEach((teszt) => {
    console.assert(
      fuggoleges_ell(3, teszt.lista) === teszt.vart,
      `Hibás: ${teszt.nev}`
    );
  });
};

export default tesztFuggolegesEllenorzes;
