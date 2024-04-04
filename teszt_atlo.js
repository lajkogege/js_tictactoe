import {atlo_ell} from "./fuggvenyek.js";

export function Teszt_atlo() {
    const lista=[" "," "," "," "," "," "," "," "," "];
    let vart=" ";
    let kapott="nem tudom";
    console.assert(vart===atlo_ell(3,lista),"HIBA")

};
{
    const lista=["x" ,"x", "x" ,"x" ,"x", "x", "x", "x", "x" ];
    let vart="csak x"
    let kapott="nem tudom";
    console.assert(vart===atlo_ell(3,lista),"HIBA")
};
{
    const lista=["o","o","o","o","o","o","o","o","o"];
    let vart="csak o ";
    let kapott="nem tudom";
    console.assert(vart===atlo_ell(3,lista),"HIBA")
;
{
    const lista=["x","o","x","x","o","o","o","x"," o"];
    let vart="vegyes ";
    let kapott="nem tudom";
    console.assert(vart===atlo_ell(3,lista),"HIBA")
}
};

