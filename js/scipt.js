"use strict";
// document.addEventListener("DOMContentLoaded", function () {});
// abstract class Lavoratore {
//   private codeRedd: number; //codice lavoratore
//   private redditoAnnuoLordo: number; // valore reddito lordo
//   private tasseInps: number; // detrazione tasse inps da reddito
//   private tasseIrpef: number; // detrazione tasse irpef da reddito
//   constructor(codeRedd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
//     this.codeRedd = codeRedd;
//     this.redditoAnnuoLordo = redditoAnnuoLordo;
//     this.tasseInps = tasseInps;
//     this.tasseIrpef = tasseIrpef;
//   }
//   getUtileTasse() {
//     // if (this.codeRedd < 5 && this.redditoAnnuoLordo < 20000) {
//     //   return (this.redditoAnnuoLordo * (this.tasseInps + this.tasseIrpef * 2)) / 100;
//     // } else {
//     //   return (this.redditoAnnuoLordo * (this.tasseInps + this.tasseIrpef)) / 100;
//     // }
//     return (this.redditoAnnuoLordo * (this.tasseInps + this.tasseIrpef)) / 100;
//   }
//   getTasseInps() {
//     return (this.redditoAnnuoLordo -= (this.redditoAnnuoLordo * this.tasseInps) / 100);
//   }
//   getTasseIrpef() {
//     return (this.redditoAnnuoLordo -= (this.redditoAnnuoLordo * this.tasseIrpef) / 100);
//   }
//   getRedditoAnnuoNetto() {
//     let valoreTasse = this.getUtileTasse();
//     return (this.redditoAnnuoLordo -= valoreTasse);
//   }
// }
// class LavoratoreAutonomo extends Lavoratore {}
// let lavoratore1 = new LavoratoreAutonomo(1, 25000, 15, 10);
// console.log(lavoratore1.getUtileTasse());
// console.log(lavoratore1.getTasseInps());
// console.log(lavoratore1.getTasseIrpef());
// console.log(lavoratore1.getRedditoAnnuoNetto());
document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector(".container button");
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", calcLavoratore);
});
class LavoratoriAutonomi {
    constructor(codeRedd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codeRedd = codeRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
}
class Artigiano extends LavoratoriAutonomi {
}
class Programmatore extends LavoratoriAutonomi {
}
class FrontEndDev extends Programmatore {
    constructor(codeRedd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        super(codeRedd, redditoAnnuoLordo, tasseInps, tasseIrpef);
    }
    getRedditoAnnuoLordo() {
        return this.redditoAnnuoLordo;
    }
    getUtileTasse() {
        return (this.redditoAnnuoLordo * this.codeRedd) / 100;
    }
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseInps) / 100;
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
    }
}
function calcLavoratore() {
    let codRedd = document.querySelector("#codRedd");
    let reddAnnLordo = document.querySelector("#reddAnnLordo");
    let tasseInps = document.querySelector("#tasseInps");
    let tasseIrpef = document.querySelector("#tasseIrpef");
    let mario = new FrontEndDev(parseInt(codRedd.value), parseInt(reddAnnLordo.value), parseInt(tasseInps.value), parseInt(tasseIrpef.value));
    console.log("reddito annuo lordo: " + mario.getRedditoAnnuoLordo());
    console.log("tasse inps: " + mario.getTasseInps());
    console.log("tasse irpef: " + mario.getTasseIrpef());
    console.log("reddito annuo netto: " + mario.getRedditoAnnuoNetto());
    console.log("utile tasse: " + mario.getUtileTasse());
    stampaAVideo(mario);
}
function stampaAVideo(obj) {
    //   console.log("reddito annuo lordo: " + obj.getRedditoAnnuoLordo());
    //   console.log("tasse inps: " + obj.getTasseInps());
    //   console.log("tasse irpef: " + obj.getTasseIrpef());
    //   console.log("reddito annuo netto: " + obj.getRedditoAnnuoNetto());
    //   console.log("utile tasse: " + obj.getUtileTasse());
    let div = document.querySelector("#display");
    let p = document.createElement("p");
    p.innerHTML = `<strong>- reddito annuo lordo: </strong>${obj.getRedditoAnnuoLordo()}<br />
  <strong>- tasse inps: </strong>${obj.getTasseInps()}<br />
  <strong>- tasse irpef: </strong>${obj.getTasseIrpef()}<br />
  <strong>- reddito annuo netto: </strong>${obj.getRedditoAnnuoNetto()}<br />
  <strong>- utile tasse: </strong>${obj.getUtileTasse()}<br />`;
    div === null || div === void 0 ? void 0 : div.appendChild(p);
}
