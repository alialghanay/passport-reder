type Sex = "F" | "M";
type PPType = "A" | "D" | "L" | "S" | "E" | "P" | "M" | "C" | "R" | "V";

export interface PassportData {
  name: string;
  surname: string;
  sex: Sex;
  date_of_birth: string;
  nationality: string;
  passport_type: PPType;
  passport_number: string;
  issuing_country: string;
  expiration_date: string;
  personal_number: string;
}

export interface RespondError {
  success: boolean;
  message: string;
}
