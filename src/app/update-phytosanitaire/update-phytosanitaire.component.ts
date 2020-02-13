import { Component, OnInit } from "@angular/core";
import { PhytosanitaireService } from "src/app/services/phytosanitaire.service";
import { Router } from "@angular/router";
import { Phytosanitaire } from "../models/phytosanitaire";

@Component({
  selector: "app-update-phytosanitaire",
  templateUrl: "./update-phytosanitaire.component.html",
  styleUrls: ["./update-phytosanitaire.component.css"]
})
export class UpdatePhytosanitaireComponent implements OnInit {
  isUpdate: Boolean = false;

  private phytosanitaire: Phytosanitaire = {
    type_travaux: "",
    date_travaux: "",
    date_fin: "",
    heure: "",
    reference_projet: "",
    entreprise: "",
    agent_responsable: "",
    Nombre_Arbre: "1",
    N_debut: "",
    N_fin: "",
    Nom_station: "",
    Secteur: "",
    type_arbre: "",
    forme: "",
    vitalite: "",
    stade_dev: "",
    type_atteinte: "",
    atteinte: "",
    localisation: "",
    quentite: "",
    dimX: "",
    dimY: "",
    contraintes_intensite: "",
    risques_mecanique: "",
    taux_avencement: "",
    cout_travau: "",
    etat: false
  };

  constructor(private service: PhytosanitaireService, private router: Router) {}

  ngOnInit() {}

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  phytosanitaires: Phytosanitaire[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.phytosanitaire = this.service.form.value;
    this.service.update(this.phytosanitaire).subscribe(phytosanitaire => {
      console.log(phytosanitaire);
      this.router.navigate(["home/allPhytosanitaire"]);
    });
  }

  onAnuller() {
    this.router.navigate(["home/allPhytosanitaire"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }
}
