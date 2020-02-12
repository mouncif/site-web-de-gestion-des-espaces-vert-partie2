import { Component, OnInit } from "@angular/core";
import { PhytosanitaireService } from "src/app/services/phytosanitaire.service";
import { Router } from "@angular/router";
import { Projet } from "src/app/models/projet";
import { Travaux } from "src/app/models/travaux";
import { Phytosanitaire } from "src/app/models/phytosanitaire";

@Component({
  selector: "app-phytosanitaire",
  templateUrl: "./phytosanitaire.component.html",
  styleUrls: ["./phytosanitaire.component.css"]
})
export class PhytosanitaireComponent implements OnInit {
  private phytosanitaire: {
    type_travaux: "";
    date_travaux: "";
    date_fin: "";
    heure: "";
    reference_projet: "";
    entreprise: "";
    agent_responsable: "";
    Nombre_Arbre: "1";
    N_debut: "";
    N_fin: "";
    Nom_station: "";
    Secteur: "";
    N_Arbre: "";
    type_arbre: "";
    forme: "";
    vitalite: "";
    stade_dev: "";
    type_atteinte: "";
    atteinte: "";
    localisation: "";
    quentite: "";
    dimX: "";
    dimY: "";
    contraintes_intensite: "";
    risques_mecanique: "";
    taux_avencement: "";
    cout_travau: "";
    etat: false;
  };

  private travau: {
    type_travaux: "";
    date_travaux: "";
    date_fin: "";
    heure: "";
    reference_projet: "";
    entreprise: "";
    agent_responsable: "";
    Nombre_Arbre: "1";
    N_debut: "";
    N_fin: "";
    Nom_station: "";
    Secteur: "";
    taux_avencement: "";
    cout_travau: "";
    etat: false;
  };

  private projet: {
    date_travaux: "";
    date_fin: "";
    reference_projet: "";
    entreprise: "";
  };

  constructor(private service: PhytosanitaireService, private router: Router) {}

  ngOnInit() {}

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  phytosanitaires: Phytosanitaire[] = [];
  projets: Projet[] = [];
  travaux: Travaux[] = [];

  add() {
    this.service.add_phyto(this.phytosanitaire).subscribe(phytosanitaire => {
      this.phytosanitaires = [phytosanitaire, ...this.phytosanitaires];
    });

    this.router.navigate(["home/phytosanitaire"]);
  }

  onSubmit() {
    this.phytosanitaire = this.service.form.value;

    console.log(this.phytosanitaire);
    this.add();
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
