import { palya_valasztas, jatekKezdese } from "./fuggvenyek.js";
import { tesztFuggolegesEllhez } from "./tesztFugoleges.js";
window.addEventListener("load", init);

function init() {
  tesztFuggolegesEllhez();
  palya_valasztas();
  jatekKezdese();
}


