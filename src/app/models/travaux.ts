import { Projet } from "./projet";
export interface Travaux extends Projet {
  id?: number;
  type_travaux: string;
  heure: string;
  Nom_station: string;
  Secteur: string;
  Nombre_Arbre: string;
  N_debut: string;
  N_fin: string;
  agent_responsable: string;
  cout_travau: string;
  taux_avencement: string;
  etat: boolean;
}
