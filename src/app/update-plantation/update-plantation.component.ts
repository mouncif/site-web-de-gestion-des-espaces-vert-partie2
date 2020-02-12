import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlantationService } from "../services/plantation.service";
import { Plantation } from "../models/plantation";

@Component({
  selector: "app-update-plantation",
  templateUrl: "./update-plantation.component.html",
  styleUrls: ["./update-plantation.component.css"]
})
export class UpdatePlantationComponent implements OnInit {
  isUpdate: Boolean = false;

  private plantation: Plantation = {
    type_travaux: "",
    date_travaux: "",
    date_fin: "",
    reference_projet: "",
    entreprise: "",
    agent_responsable: "",
    Nombre_Arbre: "1",
    N_debut: "",
    N_fin: "",
    heure: "",
    Nom_station: "",
    Secteur: "",
    taux_avencement: "",
    cout_travau: "",
    etat: false,
    type_arbre: "",
    essences: "",
    variete: "",
    type_preparation: "",
    sols: "",
    protection: "",
    conduite: "",
    type_irrigation: "",
    age_plantation: ""
  };

  constructor(private service: PlantationService, private router: Router) {}

  ngOnInit() {}

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  phytosanitaires: Plantation[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.plantation = this.service.form.value;
    this.service.update(this.plantation).subscribe(plantation => {
      console.log(plantation);
      this.router.navigate(["home/allPlantation"]);
    });
  }

  onAnuller() {
    this.router.navigate(["home/allPlantation"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }
}
