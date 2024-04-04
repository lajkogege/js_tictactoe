import { vizszintes_ell } from "./fuggvenyek.js";

const csakOkTeszteset = () => {
  console.log("Csak O betűk");
  const lista = ["O", "O", "O", "O", "O", "O", "O", "O", "O"];
  const vart = "OOO@OOO@OOO@";
  console.assert(vizszintes_ell(3, lista) === vart, "HIBA");
};

const csakXTeszteset = () => {
  console.log("Csak X betűk");
  const lista = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
  const vart = "XXX@XXX@XXX@";
  console.assert(vizszintes_ell(3, lista) === vart, "HIBA");
};

const uresListaTeszteset = () => {
  console.log("Üres lista");
  const lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const vart = "   @   @   @";
  console.assert(vizszintes_ell(3, lista) === vart, "HIBA");
};

const vegyesListaTesztesetek = () => {
  console.log("Vegyes lista");
  const lista = [" ", " ", "O", "O", " ", "X", "O", " ", "X"];
  const vart = "  O@O X@O X@";
  console.assert(vizszintes_ell(3, lista) === vart, "HIBA");
};

const teszVizszintesEllenorzes = () => {
  csakOkTeszteset();
  csakXTeszteset();
  uresListaTeszteset();
  vegyesListaTesztesetek();
};

export default teszVizszintesEllenorzes;
