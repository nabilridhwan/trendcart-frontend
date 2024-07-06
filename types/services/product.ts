export interface GetProductsParams {
  query?: string;
  price_high?: number;
  price_low?: number;
}

export interface ReviewObject {
  rating: number;
  review: string;
}

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

export interface CreateProductErrorResponseErrors {
  code: string;
  expected: string;
  received: string;
  path: [string, number, string];
  message: string;
}

export interface CreateProductErrorResponse {
  message: string;
  statusCode: number;
  errors: CreateProductErrorResponseErrors[];
}
