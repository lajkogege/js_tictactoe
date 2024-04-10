import { palya_valasztas, jatekKezdese } from "./fuggvenyek.js";
import teszVizszintesEllenorzes from "./tesztVizszintesEllenorzes.js";
import tesztFuggolegesEllenorzes from "./tesztFuggolegesEllenorzes.js";
import tesztAtlosEllenorzes from "./tesztAtlosEllenorzes.js";
window.addEventListener("load", init);

function init() {
  teszVizszintesEllenorzes();
  tesztFuggolegesEllenorzes();
  tesztAtlosEllenorzes();
  palya_valasztas();
  jatekKezdese();
}
