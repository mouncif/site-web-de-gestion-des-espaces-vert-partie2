import { StationService } from "./../services/station.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Station } from "src/app/models/station";

@Component({
  selector: "app-update-station",
  templateUrl: "./update-station.component.html",
  styleUrls: ["./update-station.component.css"]
})
export class UpdateStationComponent implements OnInit {
  isUpdate: Boolean = false;

  private station: Station = {
    Nom_Station: "",
    Date_description: "",
    Secteur: "",
    Quartier: "",
    Localistaion: "",
    vocation: "",
    Phase_physiologique_dominante: "",
    Etat_general: "",
    Conduite: "",
    Revetement: "",
    Nature_substrat: "",
    protection: "",
    Irrigation: "",
    Preconisation: "",
    Taille: "",
    Arrondissement: "",
    Zone: ""
  };

  constructor(private service: StationService, private router: Router) {}

  ngOnInit() {}

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  reclamations: Station[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.station = this.service.form.value;
    this.service.update(this.station).subscribe(station => {
      console.log(station);
      this.router.navigate(["home/allStation"]);
    });
  }

  onAnuller() {
    this.router.navigate(["home/allStation"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }
}
