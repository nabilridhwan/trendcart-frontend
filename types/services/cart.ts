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
// RESPONSE INTERFACES
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
