import { StationService } from "./../services/station.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Station } from "src/app/models/station";

@Component({
  selector: "app-add-station",
  templateUrl: "./add-station.component.html",
  styleUrls: ["./add-station.component.css"]
})
export class AddStationComponent implements OnInit {
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

  stations: Station[] = [];

  add() {
    console.log(this.station);
    this.service.add(this.station).subscribe(station => {
      this.stations = [station, ...this.stations];
      this.router.navigate(["/"]);
    });
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.station = this.service.form.value;
      console.log(this.station);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }
}
