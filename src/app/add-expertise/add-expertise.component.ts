import { Router } from "@angular/router";
import { ExpertiseService } from "./../services/expertise.service";
import { Component, OnInit } from "@angular/core";
import { Expertise } from "../models/expertise";

@Component({
  selector: "app-add-expertise",
  templateUrl: "./add-expertise.component.html",
  styleUrls: ["./add-expertise.component.css"]
})
export class AddExpertiseComponent implements OnInit {
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

  expertises: Expertise[] = [];

  add() {
    console.log(this.expertise);
    this.service.add(this.expertise).subscribe(expertise => {
      this.expertises = [expertise, ...this.expertises];
      this.router.navigate(["/"]);
    });
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.expertise = this.service.form.value;
      console.log(this.expertise);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }
}
