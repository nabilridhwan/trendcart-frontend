// =============================================================================
//  REQUEST TYPES
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
    email: string;
    password: string;
  }

  export interface SignUpBody {
    username: string;
    email: string;
    country_id: number;
    address: AddressBody;
  }

