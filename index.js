import { palya_valasztas, jatekKezdese } from "./fuggvenyek.js";
import teszVizszintesEllenorzes from "./tesztVizszintesEllenorzes.js";
import { Teszt_atlo } from "./teszt_atlo.js";
window.addEventListener("load", init);

function init() {
  teszVizszintesEllenorzes();
  palya_valasztas();
  jatekKezdese();
  Teszt_atlo();
}
