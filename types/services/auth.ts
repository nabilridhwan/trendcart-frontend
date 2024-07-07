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
