import { Injectable } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Phytosanitaire } from "../models/phytosanitaire";
import { Travaux } from "../models/travaux";
import { Projet } from "../models/projet";

@Injectable({
  providedIn: "root"
})
export class PhytosanitaireService {
  constructor(private http: HttpClient) {}

  private url_phytosanitaire = "http://localhost:3000/phytosanitaire";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    type_travaux: new FormControl(0),
    date_travaux: new FormControl("", Validators.required),
    date_fin: new FormControl("", Validators.required),
    entreprise: new FormControl("", Validators.required),
    heure: new FormControl("", Validators.required),
    reference_projet: new FormControl("", Validators.required),
    agent_responsable: new FormControl("", Validators.required),
    Nom_station: new FormControl("", Validators.required),
    Secteur: new FormControl("", Validators.required),
    Nombre_Arbre: new FormControl("", Validators.required),
    N_debut: new FormControl("", Validators.required),
    N_fin: new FormControl("", Validators.required),
    type_arbre: new FormControl("", Validators.required),
    forme: new FormControl(0),
    vitalite: new FormControl(0),
    stade_dev: new FormControl(0),
    type_atteinte: new FormControl("", Validators.required),
    atteinte: new FormControl("", Validators.required),
    localisation: new FormControl("", Validators.required),
    quentite: new FormControl("", Validators.required),
    dimX: new FormControl("", Validators.required),
    dimY: new FormControl("", Validators.required),
    contraintes_intensite: new FormControl(0),
    risques_mecanique: new FormControl(0),
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
      entreprise: "",
      heure: "",
      reference_projet: "",
      agent_responsable: "",
      Nom_station: "",
      Secteur: "",
      Nombre_Arbre: "",
      N_debut: "",
      N_fin: "",
      type_arbre: "",
      forme: "",
      vitalite: "",
      stade_dev: "",
      type_atteinte: "",
      atteinte: "",
      localisation: "",
      quentite: "",
      dimX: "",
      dimY: "",
      contraintes_intensite: "",
      risques_mecanique: "",
      taux_avencement: "",
      cout_travau: "",
      etat: false
    });
  }

  findAll() {
    return this.http.get<Phytosanitaire[]>(this.url_phytosanitaire);
  }
  add_phyto(phytosanitaire) {
    return this.http.post<Phytosanitaire>(
      this.url_phytosanitaire,
      phytosanitaire
    );
  }

  delete(id) {
    return this.http.delete(`${this.url_phytosanitaire}/${id}`);
  }
  update(phytosanitaire) {
    return this.http.put(
      `${this.url_phytosanitaire}/${phytosanitaire.id}`,
      phytosanitaire
    );
  }
  populateform(row) {
    this.form.setValue(row);
  }
}
