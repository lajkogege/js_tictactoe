import {fuggoleges_ell} from "./fuggvenyek.js";

export function tesztFuggolegesEllhez(){
    console.log("Függöleges tesztelés")
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
    vart="XXX@XXX@XXX@";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");

    nev="általános nincs győzelem, de nincs minden kitöltve";
    lista=["X","X","O","O","0"," ","X","X","O "];
    vart="XXX@OO @XXO@";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");

    nev="áltlanos nincs győzelem, minden kitöltve";
    lista=["X","O","X","O","X","O","O","X","O"];
    vart="XOX@OXO@OXO@";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");

    nev="áltlanos van győzelem, minden kitöltve";
    lista=["X","O","X","O","X","O","O","O","X"];
    vart="XOX@OXO@OOX@";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");

    nev="általános van győzelem, de nincs minden ki tötlve ";
    lista=["X","O"," "," ","X","O","O"," ","X"];
    vart="XO @ XO@O X@";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");

    nev="kukac rosz helyen van ";
    lista=["X","O","X","O","X","O","O","X","X"];
    vart="XO@XOXOO@XX@";
    console.log(nev, lista, vart);
    console.assert(vart===fuggoleges_ell(3,lista), "A várt eredmény nem stimmel");
}
/*
1.üres
2.csupa X
3.csupa O
4.általános nincs győzelem, de nincs minden kitöltve
5.általános, nincs győzelem, minden ki van töltve
6.áltlanos van győzelem, minden kitöltve
7. általános van győzelem, de nincs minden ki tötlve 
8.kukac rosz helyen van
*/
