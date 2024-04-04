import {fuggoleges_ell} from "./fuggvenyek.js";

export function tesztFuggolegesEllhez(){
    nev="üres lista";
    let lista=[" "," "," "," "," "," "," "," "," "];
    let vart="   @   @   @";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");

    nev="Csupa ";
    lista=["O","O","O","O","O","O","O","O","O"];
    vart="OOOO@OOO@OOO@";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");

    nev="Csupa X";
    lista=["X","X","X","X","X","X","X","X","X"];
    vart="XXX@XYX@XXX@";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");
}

