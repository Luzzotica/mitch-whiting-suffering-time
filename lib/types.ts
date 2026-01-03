// Form state types

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whoResonates: string | null;
  sufferingHoursRange: string | null;
  problems: string[];
  obstacles: string[];
  admittingMore: string | null;
  whatYouWant: string[];
  supportType: string;
}

export const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  whoResonates: null,
  sufferingHoursRange: null,
  problems: [],
  obstacles: [],
  admittingMore: null,
  whatYouWant: [],
  supportType: "",
};

export type StepId =
  | "intro"
  | "name"
  | "email"
  | "phone"
  | "who-help"
  | "chris-referral"
  | "suffering-hours"
  | "acknowledgment"
  | "problems"
  | "obstacles"
  | "transition"
  | "admitting"
  | "support-type"
  | "complete";

