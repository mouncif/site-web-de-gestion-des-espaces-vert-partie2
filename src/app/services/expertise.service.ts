import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Expertise } from "../models/expertise";

@Injectable({
  providedIn: "root"
})
export class ExpertiseService {
  constructor(private http: HttpClient) {}

  private url = "http://localhost:3000/expertise";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    date_travaux: new FormControl("", Validators.required),
    type_travaux: new FormControl("", Validators.required),
    N_debut: new FormControl("", Validators.required),
    N_fin: new FormControl("", Validators.required),
    taille: new FormControl("", Validators.required),
    agent_responsable: new FormControl("", Validators.required),
    heure: new FormControl("", Validators.required),
    Nom_station: new FormControl("", Validators.required),
    cout_travau: new FormControl("", Validators.required),
    taux_avencement: new FormControl(""),
    References: new FormControl(""),
    Date_expertise: new FormControl(""),
    Hauteur: new FormControl(""),
    Circonference: new FormControl(""),
    Etat_phytosanitaire: new FormControl(""),
    type: new FormControl(""),
    Niveau_risque: new FormControl(""),
    Montant_unitaire: new FormControl(""),
    Nombre_arbres: new FormControl(""),
    Total_couts: new FormControl(""),
    Numero_dossier: new FormControl(""),
    Date_commande: new FormControl(""),
    action: new FormControl("")
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
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
    });
  }

  findAll() {
    return this.http.get<Expertise[]>(this.url);
  }
  add(expertise) {
    return this.http.post<Expertise>(this.url, expertise);
  }
  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  update(expertise) {
    return this.http.put(`${this.url}/${expertise.id}`, expertise);
  }
  populateform(row) {
    this.form.setValue(row);
  }
}
