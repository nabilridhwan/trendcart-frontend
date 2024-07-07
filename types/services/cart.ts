// =============================================================================
// INTERFACES
// =============================================================================
export interface CartItemProductCategory {
  category_id: number;
  name: string;
  parent_category_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface CartItemProductReview {
  rating: number;
  review: string;
}

export interface CartItemProductImage {
  product_id: number;
  product_image_url: string;
}

export interface CartItemProduct {
  product_id: number;
  name: string;
  description: string;
  brand_id: number | null;
  category_id: number;
  Brand: string | null;
  price: number;
  stock: number;
  Reviews: CartItemProductReview[];
  created_at: string;
  updated_at: string;
  Category: CartItemProductCategory;
  ProductImage: CartItemProductImage[];
}

export interface CartItem {
  cart_item_id: number;
  product_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
  Product: CartItemProduct;
}

// =============================================================================
// REQUEST INTERFACES
// =============================================================================
export interface AddCartBody {
  product_id: number;
  quantity: string;
}

export interface UpdateCartBody {
  action: string;
  quantity: string;
}

// =============================================================================
// GET CART RESPONSE
// =============================================================================
export interface GetCartSuccessResponse {
  message: "Cart items retrieved";
  statusCode: 200;
  error: false;
  data: CartItem[];
}

// =============================================================================
// ADD CART RESPONSE
// =============================================================================
export interface AddCartSuccessResponse {
  message: "Product added to cart";
  statusCode: 200;
  error: false;
  data: AddCartSuccessResponseData;
}

export interface AddCartSuccessResponseData {
  cart_item_id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
}

// =============================================================================
// UPDATE CART RESPONSE
// =============================================================================
export interface UpdateCartItemResponseData {
  cart_item_id: number;
  product_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
}
export interface UpdateCartItemResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: UpdateCartItemResponseData;
}

// =============================================================================
// DELETE CART RESPONSE
// =============================================================================
export interface DeleteCartItemResponseData {
  cart_item_id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
}
export interface DeleteCartItemResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: DeleteCartItemResponseData;
}

// =============================================================================
// ERROR RESPONSE
// =============================================================================

export interface CartErrorResponse {
  message: string;
  error?: string;
  statusCode: number;
}
