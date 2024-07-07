// =============================================================================
// INTERFACES
// =============================================================================
export interface PurchaseItem {
  product_id: number;
  name: string;
  description: string;
  category_id: number;
  brand_id: number | null;
  created_at: string;
  updated_at: string;
  stock: number;
  price: number;
  currency: string;
}

// =============================================================================
//  GET ALL PURCHASES RESPONSE
// =============================================================================
export interface GetAllPurchasesSuccessResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: GetAllPurchasesSuccessResponseData[];
}

export interface GetAllPurchasesSuccessResponseData {
  purchase_id: number;
  user_id: number;
  address_id: number;
  tax_amount: number;
  total_price: number;
  final_price: number;
  created_at: string;
  updated_at: string;
  productProduct_id: number | null;
  PurchaseItem: PurchaseItem[];
}

// =============================================================================
// GET ONE PURCHASE RESPONSE
// =============================================================================
export interface GetOnePurchasesSuccessResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: PurchaseItem;
}
