import {fuggoleges_ell} from "./fuggvenyek.js";

export function tesztFuggolegesEllhez(){
    let nev="üres lista";
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

    nev="Csupa X";
    lista=["X","X","X","X","X","X","X","X","X"];
    vart="XXX@XYX@XXX@";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");
}
/*
1.üres
2.csupa X
3.csupa O
4.általános nincs győzelem, de nincs minden kitöltve
5.általános, nincs győzelem, minden ki van töltve
6.áltlanos nincs győzelem, minden kitöltve
7. általános van győzelem, minden kivan tötlve 
8.kukac rosz helyen van
*/
