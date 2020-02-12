import { Travaux } from "./travaux";
export interface Phytosanitaire extends Travaux {
  type_arbre: string;
  forme: string;
  vitalite: string;
  risques_mecanique: string;
  stade_dev: string;
  type_atteinte: string;
  atteinte: string;
  localisation: string;
  quentite: string;
  dimX: string;
  dimY: string;
  contraintes_intensite: string;
}
