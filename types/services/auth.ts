// =============================================================================
//  REQUEST INTERFACES
// =============================================================================
interface AddressBody {
  address_line1: string;
  address_line2: string;
  city: string;
  postal_code: string;
  state: string;
  country_id: number;
  remarks: string;
}

export interface LoginBody {
  tiktok_access_token: string;
}

export interface SignUpBody {
  name: string;
  email: string;
  country_id: number;
  tiktok_open_id: string;
  address: AddressBody;
}

export interface ObtainAccessTokenBody {
  redirect_uri: string;
  code: string;
}

// =============================================================================
// OBTAIN TOKEN RESPONSE
// =============================================================================
export interface ObtainTokenSuccessResponseData {
  avatar_url: string;
  display_name: string;
  open_id: string;
  union_id: string;
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}
export interface ObtainTokenSuccessResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: ObtainTokenSuccessResponseData;
}

// =============================================================================
// GET SELF RESPONSE
// =============================================================================
export interface GetSelfResponseData {
  user_id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  country_id: number;
  tiktok_open_id: string;
  Address: Array<{
    address_id: number;
    user_id: number;
    address_line1: string;
    address_line2: string;
    city: string;
    state: string;
    postal_code: string;
    country_id: number;
    building_name: string | null;
    building_no: string | null;
    remarks: string | null;
    created_at: string;
    updated_at: string;
    country: {
      country_id: number;
      country_code: string;
      country_name: string;
      created_at: string;
      updated_at: string;
    };
  }>;
  country: {
    country_id: number;
    country_code: string;
    country_name: string;
    created_at: string;
    updated_at: string;
  };
}

// =============================================================================
// ERROR RESPONSES
// =============================================================================
export interface AuthErrorResponse {
  response: {
    message: string;
    error: string;
    statusCode: number;
  };
  status: number;
  options: {};
  message: string;
  name: string;
}
