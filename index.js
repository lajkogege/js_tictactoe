import { palya_valasztas, jatekKezdese } from "./fuggvenyek.js";
import teszVizszintesEllenorzes from "./tesztVizszintesEllenorzes.js";
import { tesztFuggolegesEllhez } from "./tesztFugoleges.js";
window.addEventListener("load", init);

function init() {
  teszVizszintesEllenorzes();
  tesztFuggolegesEllhez();
  palya_valasztas();
  jatekKezdese();
  //Teszt_atlo();
}


