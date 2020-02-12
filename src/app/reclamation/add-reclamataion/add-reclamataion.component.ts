import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ReclamationService } from "../services/reclamation.service";
import { Reclamation } from "src/app/models/reclamation";

@Component({
  selector: "app-add-reclamation",
  templateUrl: "./add-reclamataion.component.html",
  styleUrls: ["./add-reclamataion.component.css"]
})
export class AddReclamationComponent implements OnInit {
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

  add() {
    console.log(this.reclamation);
    this.service.add(this.reclamation).subscribe(reclamation => {
      this.reclamations = [reclamation, ...this.reclamations];
      this.router.navigate(["/"]);
    });
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.reclamation = this.service.form.value;
      console.log(this.reclamation);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }
}
