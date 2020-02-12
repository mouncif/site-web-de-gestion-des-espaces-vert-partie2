import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { PlantationService } from "../services/plantation.service";
import { Plantation } from "../models/plantation";
import { Projet } from "../models/projet";
import { Travaux } from "../models/travaux";

@Component({
  selector: "app-plantation",
  templateUrl: "./plantation.component.html",
  styleUrls: ["./plantation.component.css"]
})
export class PlantationComponent implements OnInit {
  private plantation: {
    type_travaux: "";
    date_travaux: "";
    date_fin: "";
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
    type_arbre: "";
    essences: "";
    variete: "";
    type_preparation: "";
    sols: "";
    protection: "";
    conduite: "";
    type_irrigation: "";
    age_plantation: "";
  };

  private travau: {
    type_travaux: "";
    date_travaux: "";
    date_fin: "";
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

  constructor(private service: PlantationService, private router: Router) {}

  ngOnInit() {}

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  plantations: Plantation[] = [];
  projets: Projet[] = [];
  travaux: Travaux[] = [];

  add() {
    this.service.add_plantation(this.plantation).subscribe(plantation => {
      this.plantations = [plantation, ...this.plantations];
    });
    this.router.navigate(["home/plantation"]);
  }

  onSubmit() {
    this.plantation = this.service.form.value;

    console.log(this.plantation);
    this.add();
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
