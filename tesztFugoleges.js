import {fuggoleges_ell} from "./fuggvenyek.js";

export function tesztFuggolegesEllhez(){
    let lista=[" "," "," "," "," "," "," "," "," "];
    let vart="   @   @   @";
    console.assert(vart===fuggoleges_ell(3,lista), `lista=${lista}, lnko=${vart}`, "A várt eredmény nem stimmel");

    lista=[" "," "," "," "," "," "," "," "," "];
    vart="   @   @   @";
    console.assert(vart===fuggoleges_ell(3,lista), `lista=${lista}, lnko=${vart}`, "A várt eredmény nem stimmel");
}

