"use strict";
document.addEventListener("DOMContentLoaded", function () { });
class Lavoratore {
    constructor(codeRedd, redditoAnnuoLordo, tasseInps, tasseIrpef) {
        this.codeRedd = codeRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getUtileTasse() {
        return (this.redditoAnnuoLordo * (this.tasseInps + this.tasseIrpef)) / 100;
    }
    getTasseInps() {
        return (this.redditoAnnuoLordo -= (this.redditoAnnuoLordo * this.tasseInps) / 100);
    }
    getTasseIrpef() {
        return (this.redditoAnnuoLordo -= (this.redditoAnnuoLordo * this.tasseIrpef) / 100);
    }
    getRedditoAnnuoNetto() {
        let valoreTasse = this.getUtileTasse();
        return (this.redditoAnnuoLordo -= valoreTasse);
    }
}
class LavoratoreAutonomo extends Lavoratore {
}
let lavoratore1 = new LavoratoreAutonomo(1, 100, 15, 10);
// console.log(lavoratore1.getUtileTasse());
// console.log(lavoratore1.getTasseInps());
// console.log(lavoratore1.getTasseIrpef());
console.log(lavoratore1.getRedditoAnnuoNetto());
