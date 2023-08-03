import {PolicyLevel} from "@/types/policyLevel";

export type PrivacyPolicy = {
    id: number;
    name: string;
    description: string;
    levels : PolicyLevel[];
}