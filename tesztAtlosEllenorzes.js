import { atlo_ell } from "./fuggvenyek.js";

const tesztAtlosEllenorzes = () => {
  const tesztesetek = [
    {
      nev: "Csak O betűk",
      lista: ["O", "O", "O", "O", "O", "O", "O", "O", "O"],
      vart: "OOO@OOO",
    },
    {
      nev: "Csak X betűk",
      lista: ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
      vart: "XXX@XXX",
    },
    {
      nev: "Üres lista",
      lista: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      vart: "   @   ",
    },
    {
      nev: "Vegyes lista",
      lista: [" ", " ", "O", "O", " ", "X", "O", " ", "X"],
      vart: "  X@O O",
    },
    {
      nev: "Szeparálás nélkül nyerne",
      lista: [" ", " ", "X", " ", "X", " ", " ", " ", "X"],
      vart: " XX@XX ",
    },
    {
      nev: "Döntetlen lista",
      lista: ["O", "X", "X", "X", "O", "O", "X", "O", "X"],
      vart: "OOX@XOX",
    },
  ];
  tesztesetek.forEach((teszt) => {
    console.assert(
      atlo_ell(3, teszt.lista) === teszt.vart,
      `Hibás: ${teszt.nev}`
    );
  });
};

export default tesztAtlosEllenorzes;
