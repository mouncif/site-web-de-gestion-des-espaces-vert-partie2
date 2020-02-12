import { Injectable } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Reclamation } from "src/app/models/reclamation";
@Injectable({
  providedIn: "root"
})
export class ReclamationService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/reclamation";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    dossier: new FormControl("", Validators.required),
    date_reclamation: new FormControl("", Validators.required),
    Nom_station: new FormControl("", Validators.required),
    Secteur: new FormControl("", Validators.required),
    N_Arbre: new FormControl("", Validators.required),
    Demandeur: new FormControl("", Validators.required),
    Numero_courrier: new FormControl("", Validators.required),
    date_reception: new FormControl("", Validators.required),
    reclamation: new FormControl("", Validators.required),
    decision: new FormControl(""),
    date_decision: new FormControl(""),
    etat: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
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
    });
  }

  findAll() {
    return this.http.get<Reclamation[]>(this.url);
  }
  add(reclamation) {
    return this.http.post<Reclamation>(this.url, reclamation);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(reclamation) {
    return this.http.put(`${this.url}/${reclamation.id}`, reclamation);
  }
  populateform(row) {
    this.form.setValue(row);
  }
}
