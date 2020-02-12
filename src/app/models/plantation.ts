import { Travaux } from "./travaux";
export interface Plantation extends Travaux {
  type_arbre: string;
  essences: string;
  variete: string;
  type_preparation: string;
  sols: string;
  protection: string;
  conduite: string;
  type_irrigation: string;
  age_plantation: string;
}
