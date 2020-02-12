import { Component, OnInit } from "@angular/core";
import { ReclamationService } from "../services/reclamation.service";
import { Router } from "@angular/router";
import { Reclamation } from "src/app/models/reclamation";

@Component({
  selector: "app-update-reclamation",
  templateUrl: "./update-reclamation.component.html",
  styleUrls: ["./update-reclamation.component.css"]
})
export class UpdateReclamationComponent implements OnInit {
  isUpdate: Boolean = false;

  private reclamation: Reclamation = {
    dossier: "",
    date_reclamation: "",
    Nom_station: "",
    Secteur: "",
    N_Arbre: "",
    Demandeur: "",
    Numero_courrier: "",
    date_reception: "",
    reclamation: "",
    decision: "",
    date_decision: "",
    etat: false
  };
  constructor(private service: ReclamationService, private router: Router) {}

  ngOnInit() {}

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  reclamations: Reclamation[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.reclamation = this.service.form.value;
    this.service.update(this.reclamation).subscribe(reclamation => {
      console.log(reclamation);
      this.router.navigate(["home/allReclamation"]);
    });
  }

  onAnuller() {
    this.router.navigate(["home/allReclamation"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }
}
