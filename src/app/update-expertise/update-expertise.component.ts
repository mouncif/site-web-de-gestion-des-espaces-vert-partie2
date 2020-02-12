import { Component, OnInit } from "@angular/core";
import { ExpertiseService } from "../services/expertise.service";
import { Router } from "@angular/router";
import { Expertise } from "../models/expertise";

@Component({
  selector: "app-update-expertise",
  templateUrl: "./update-expertise.component.html",
  styleUrls: ["./update-expertise.component.css"]
})
export class UpdateExpertiseComponent implements OnInit {
  isUpdate: Boolean = false;

  private expertise: Expertise = {
    date_travaux: "",
    type_travaux: "",
    N_debut: "",
    N_fin: "",
    taille: "",
    agent_responsable: "",
    heure: "",
    Nom_station: "",
    cout_travau: "",
    taux_avencement: "",
    References: "",
    Date_expertise: "",
    Hauteur: "",
    Circonference: "",
    Etat_phytosanitaire: "",
    type: "",
    Niveau_risque: "",
    Montant_unitaire: "",
    Nombre_arbres: "",
    Total_couts: "",
    Numero_dossier: "",
    Date_commande: "",
    action: ""
  };

  constructor(private service: ExpertiseService, private router: Router) {}

  ngOnInit() {}

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  reclamations: Expertise[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.expertise = this.service.form.value;
    this.service.update(this.expertise).subscribe(expertise => {
      console.log(expertise);
      this.router.navigate(["home/allExpertise"]);
    });
  }

  onAnuller() {
    this.router.navigate(["home/allExpertise"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }
}
