export class Arbre {
    id: string;
    position: {
        x: number,
        y: number
    };
    essence: string;
    variete: string;
    circonference: number;
    hauter: number;
    surface: number;
    distanceAuBati: number;
    contraintesBatiment: string;
    incedentRacine: string;
    etatPhysiologique: string;
    atteintesPhysiologique: string;
    defautsMecaniques: string;
    pathogene: string;
    alignement: string;
    surplomb: string;
    photos: string[];

    constructor(){
      this.id = "";
      this.essence = "";
      this.variete = "";
      this.alignement = "";
      this.circonference = 0;
      this.atteintesPhysiologique = "none";
      this.contraintesBatiment = "";
      this.defautsMecaniques = "none";
      this.distanceAuBati = 0;
      this.etatPhysiologique = "";
      this.hauter = 0;
      this.incedentRacine = "";
      this.position = {x: 0, y: 0};
      this.pathogene = "none";
      this.photos = [
        '../../../assets/img/placeholder.png'
      ];
    }
}
