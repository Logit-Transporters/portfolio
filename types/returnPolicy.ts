import { PolicyLevel } from "./policyLevel";

export type ReturnPolicy = {
    id: number;
    name: string;
    description: string;
    levels : PolicyLevel[];

}