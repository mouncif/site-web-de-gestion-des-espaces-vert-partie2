import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Station } from "src/app/models/station";

@Injectable({
  providedIn: "root"
})
export class StationService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/station";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    Nom_Station: new FormControl("", Validators.required),
    Date_description: new FormControl("", Validators.required),
    Secteur: new FormControl("", Validators.required),
    Quartier: new FormControl("", Validators.required),
    Localistaion: new FormControl("", Validators.required),
    vocation: new FormControl("", Validators.required),
    Phase_physiologique_dominante: new FormControl("", Validators.required),
    Etat_general: new FormControl("", Validators.required),
    Conduite: new FormControl("", Validators.required),
    Revetement: new FormControl(""),
    Nature_substrat: new FormControl(""),
    protection: new FormControl(""),
    Irrigation: new FormControl(""),
    Preconisation: new FormControl(""),
    Taille: new FormControl(""),
    Arrondissement: new FormControl(""),
    Zone: new FormControl("")
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
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
    });
  }

  findAll() {
    return this.http.get<Station[]>(this.url);
  }
  add(station) {
    return this.http.post<Station>(this.url, station);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(station) {
    return this.http.put(`${this.url}/${station.id}`, station);
  }
  populateform(row) {
    this.form.setValue(row);
  }
}
