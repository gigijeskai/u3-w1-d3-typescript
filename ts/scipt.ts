document.addEventListener("DOMContentLoaded", function () {});

abstract class Lavoratore {
  private codeRedd: number; //codice lavoratore
  private redditoAnnuoLordo: number; // valore reddito lordo
  private tasseInps: number; // detrazione tasse inps da reddito
  private tasseIrpef: number; // detrazione tasse irpef da reddito

  constructor(codeRedd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
    this.codeRedd = codeRedd;
    this.redditoAnnuoLordo = redditoAnnuoLordo;
    this.tasseInps = tasseInps;
    this.tasseIrpef = tasseIrpef;
  }
  getUtileTasse() {
    // if (this.codeRedd < 5 && this.redditoAnnuoLordo < 20000) {
    //   return (this.redditoAnnuoLordo * (this.tasseInps + this.tasseIrpef * 2)) / 100;
    // } else {
    //   return (this.redditoAnnuoLordo * (this.tasseInps + this.tasseIrpef)) / 100;
    // }
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

class LavoratoreAutonomo extends Lavoratore {}
let lavoratore1 = new LavoratoreAutonomo(1, 25000, 15, 10);

console.log(lavoratore1.getUtileTasse());
console.log(lavoratore1.getTasseInps());
console.log(lavoratore1.getTasseIrpef());
console.log(lavoratore1.getRedditoAnnuoNetto());
