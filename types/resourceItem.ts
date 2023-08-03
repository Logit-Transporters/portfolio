import {PolicyLevel} from "@/types/policyLevel";

export type HelpCentre = {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    description: string;
    levels :PolicyLevel[]
}