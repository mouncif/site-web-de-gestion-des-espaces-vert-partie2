import { Injectable } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Plantation } from "../models/plantation";

@Injectable({
  providedIn: "root"
})
export class PlantationService {
  constructor(private http: HttpClient) {}
  private url_plantation = "http://localhost:3000/plantation";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    type_travaux: new FormControl(0),
    date_travaux: new FormControl("", Validators.required),
    date_fin: new FormControl("", Validators.required),
    entreprise: new FormControl("", Validators.required),
    reference_projet: new FormControl("", Validators.required),
    agent_responsable: new FormControl("", Validators.required),
    Nom_station: new FormControl("", Validators.required),
    Secteur: new FormControl("", Validators.required),
    Nombre_Arbre: new FormControl("", Validators.required),
    N_debut: new FormControl("", Validators.required),
    N_fin: new FormControl("", Validators.required),
    type_arbre: new FormControl("", Validators.required),
    essences: new FormControl("", Validators.required),
    variete: new FormControl("", Validators.required),
    type_preparation: new FormControl("", Validators.required),
    sols: new FormControl("", Validators.required),
    Protection: new FormControl(0),
    conduite: new FormControl("", Validators.required),
    irrigation: new FormControl(0),
    Age: new FormControl("", Validators.required),
    taux_avencement: new FormControl("", Validators.required),
    cout_travau: new FormControl("", Validators.required),
    etat: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      type_travaux: "",
      date_travaux: "",
      date_fin: "",
      reference_projet: "",
      entreprise: "",
      agent_responsable: "",
      Nombre_Arbre: "1",
      N_debut: "",
      N_fin: "",
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
      Protection: "",
      conduite: "",
      irrigation: "",
      Age: ""
    });
  }

  findAll() {
    return this.http.get<Plantation[]>(this.url_plantation);
  }
  add_plantation(plantation) {
    return this.http.post<Plantation>(this.url_plantation, plantation);
  }

  delete(id) {
    return this.http.delete(`${this.url_plantation}/${id}`);
  }
  update(plantation) {
    return this.http.put(`${this.url_plantation}/${plantation.id}`, plantation);
  }
  populateform(row) {
    this.form.setValue(row);
  }
}
