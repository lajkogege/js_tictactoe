import { palya_valasztas, jatekKezdese } from "./fuggvenyek.js";
import { Teszt_atlo } from "./teszt_atlo.js";

window.addEventListener("load", init);

function init() {
  palya_valasztas();
  jatekKezdese();
  Teszt_atlo();
}
