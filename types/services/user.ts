// =============================================================================
// INTERFACES
// =============================================================================
export interface CountryObject {
  country_id: number;
  country_code: string;
  country_name: string;
  created_at: string;
  updated_at: string;
}

export interface AdressObject {
  address_id: number;
  user_id: number;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  postal_code: string;
  country_id: number;
  building_name: string | null;
  building_no: number | null;
  remarks: string;
  created_at: string;
  updated_at: string;
}

// =============================================================================
// FIND USER RESPONSE
// =============================================================================
export interface FindUserSuccessResponseData {
  user_id: number;
  username: string;
  email: string;
  created_at: string;
  updated_at: string;
  country_id: number;
  Address: AdressObject[];
  country: CountryObject;
}

export interface FindUserSuccessResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: FindUserSuccessResponseData;
}

// =============================================================================
// ERROR RESPONSE
// =============================================================================
export interface UserErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
