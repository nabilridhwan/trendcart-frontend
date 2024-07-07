// =============================================================================
// INTERFACES
// =============================================================================
export interface ReviewObject {
  rating: number;
  review: string;
}

export interface ProductImageObject {
  product_image_id: number;
  product_id: number;
  image_url: string;
  created_at: string;
  updated_at: string;
}

// =============================================================================
// CREATE PRODUCTS
// =============================================================================
export interface CreateProductSuccessResponseData {
  product_id: number;
  name: string;
  description: string;
  category_id: number;
  brand_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface CreateProductSuccessResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: CreateProductSuccessResponseData;
}

// =============================================================================
// GET PRODUCTS
// =============================================================================
export interface GetProductsParams {
  query?: string;
  price_high?: number;
  price_low?: number;
}
export interface GetProductSuccessItemCategory {
  category_id: number;
  name: string;
  parent_category_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface GetProductSuccessData {
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
  Brand: string | null;
  Category: GetProductSuccessItemCategory;
  Reviews: ReviewObject[];
  ProductImage: ProductImageObject[];
}

export interface GetProductsSuccessResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: GetProductSuccessData[];
}

// =============================================================================
// GET ONE PRODUCT
// =============================================================================
export interface GetOneProductSuccessResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: GetProductSuccessData;
}

// =============================================================================
// POST REVIEW
// =============================================================================
export interface PostReviewSuccessResponseData {
  review_id: number;
  user_id: number;
  product_id: number;
  rating: number;
  review_text: string;
  created_at: string;
  updated_at: string;
}
export interface PostReviewSuccessResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: PostReviewSuccessResponseData;
}

// =============================================================================
// PRODUCT CATEGORY RESPONSE
// =============================================================================
export interface CategoryObject {
  name: string;
  category_id: number;
}
export interface GetAllProductCategorySuccessResponse {
  message: string;
  statusCode: number;
  error: boolean;
  data: CategoryObject[];
}

// =============================================================================
//  ERROR RESPONSES
// =============================================================================
export interface ProductErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}

export interface CreateProductErrorResponseErrors {
  code: string;
  expected: string;
  received: string;
  path: [string, number, string];
  message: string;
}

export interface GetProductsParamErrorResponseErrors {
  code: string;
  minimum: number;
  type: string;
  inclusive: boolean;
  exact: boolean;
  message: string;
  path: string[];
}

export interface CreateProductErrorResponse {
  message: string;
  statusCode: number;
  errors: CreateProductErrorResponseErrors[];
}

export interface GetProductsParamErrorResponse {
  statusCode: number;
  message: string;
  errors: GetProductsParamErrorResponseErrors[];
}
