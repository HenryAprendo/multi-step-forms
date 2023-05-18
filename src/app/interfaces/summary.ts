import { Extra } from "./extra";
import { Plan } from "./plan";

export interface Summary {
  plan: Plan|undefined,
  services: Extra[],
  typePlan: string
}
