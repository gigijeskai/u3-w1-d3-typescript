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
  btn?.addEventListener("click", calcLavoratore);
});
//^questa funzione mi permette di attaccare lo script all'head dell'html, dopo che il caricamento della pagina sarà completato le funzioni che utilizzano il dom
//traversing aspetteranno il completo caricamento della pagina

abstract class LavoratoriAutonomi {
  protected codeRedd: number;
  protected redditoAnnuoLordo: number;
  protected tasseInps: number;
  protected tasseIrpef: number;

  constructor(codeRedd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
    this.codeRedd = codeRedd;
    this.redditoAnnuoLordo = redditoAnnuoLordo;
    this.tasseInps = tasseInps;
    this.tasseIrpef = tasseIrpef;
  }
  public abstract getUtileTasse(): number;
  public abstract getTasseInps(): number;
  public abstract getTasseIrpef(): number;
}
//^classe astratta con metodi astratti, per essere astratti i metodi devono trovarsi in una classe astratta, questa è anche una super classe perchè è estesa

abstract class Artigiano extends LavoratoriAutonomi {
  public abstract getRedditoAnnuoNetto(): number;
}
abstract class Programmatore extends LavoratoriAutonomi {
  public abstract getRedditoAnnuoNetto(): number;
}
//^ possono anche assegnare un nuovo metodo ad una classe astratta estesa, i metodi astratti dovranno essere per forza ereditati dalla classe figlio
class FrontEndDev extends Programmatore {
  constructor(codeRedd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number) {
    super(codeRedd, redditoAnnuoLordo, tasseInps, tasseIrpef);
    //^ super si utilizza quando si vuole fare riferimento alla classe padre, in questo modo ho preso i valori della classe lovoratori autonomi
  }
  public getRedditoAnnuoLordo(): number {
    return this.redditoAnnuoLordo;
  }
  public getUtileTasse(): number {
    return (this.redditoAnnuoLordo * this.codeRedd) / 100;
  }
  public getTasseInps(): number {
    return (this.getUtileTasse() * this.tasseInps) / 100;
  }
  public getTasseIrpef(): number {
    return (this.getUtileTasse() * this.tasseIrpef) / 100;
  }
  public getRedditoAnnuoNetto(): number {
    return this.redditoAnnuoLordo - this.getTasseInps() - this.getTasseIrpef();
  }
  //^metodi della classe ereditati e utilizzati perchè astratti, ritornano un valore
}
function calcLavoratore() {
  let codRedd = document.querySelector("#codRedd") as HTMLInputElement;
  let reddAnnLordo = document.querySelector("#reddAnnLordo") as HTMLInputElement;
  let tasseInps = document.querySelector("#tasseInps") as HTMLInputElement;
  let tasseIrpef = document.querySelector("#tasseIrpef") as HTMLInputElement;
  let mario = new FrontEndDev(parseInt(codRedd.value), parseInt(reddAnnLordo.value), parseInt(tasseInps.value), parseInt(tasseIrpef.value));
  //^gli input di tipo number quando vengono presi dai nodi html in ts vengono restituiti come stringhe e quindi andranno convertiti in numeri con parseint
  //   console.log("reddito annuo lordo: " + mario.getRedditoAnnuoLordo());
  //   console.log("tasse inps: " + mario.getTasseInps());
  //   console.log("tasse irpef: " + mario.getTasseIrpef());
  //   console.log("reddito annuo netto: " + mario.getRedditoAnnuoNetto());
  //   console.log("utile tasse: " + mario.getUtileTasse());
  stampaAVideo(mario);
  //^ questa funzione si trova nella funzione ad inizio pagina, aspetterà il caricamento della pagina prima di eseguire il codice, questa funzione prende degli
  //input dall'html e li processa con i metodi della classe dando un output
}
function stampaAVideo(obj: FrontEndDev) {
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
  div?.appendChild(p);
  //^l'output sarà stampato nell'html con questa funzione che viene richiamata in quella precedente, e di conseguenza non serve inserirla nell'evento del caricamento
  //della pagina, preende come parametro gli oggetti di una classe instanziata crea degli elemnti html con il contenuto scritto qui in ts
}
