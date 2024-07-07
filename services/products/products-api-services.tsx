import {
  GetAllProductCategorySuccessResponse,
  GetOneProductSuccessResponse,
  GetProductsParams,
  GetProductsSuccessResponse,
  PostReviewSuccessResponse,
  ReviewObject,
} from "@/types/services/product";
import apiService from "../../utils/service-utils";

export namespace ProductAPIService {
  export async function searchLLMProducts(query: string) {
    try {
      const url = `/api/recommendation/query?query=${query}`;
      const response = await apiService.get(url);
      return response.data as GetProductsSuccessResponse;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  export async function getForYouRecommendations() {
    try {
      const url = `/api/recommendation/for-you`;
      const response = await apiService.get(url);
      return response.data as GetProductsSuccessResponse;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  export async function getProducts(params: GetProductsParams = {}) {
    try {
      const { query, price_high, price_low } = params;

      const searchParams = new URLSearchParams();

      if (query) {
        searchParams.append("query", query);
      }
      if (price_high) {
        searchParams.append("price_high", price_high.toString());
      }
      if (price_low) {
        searchParams.append("price_low", price_low.toString());
      }

      const url = `/api/product${
        searchParams.toString() ? `?${searchParams.toString()}` : ""
      }`;

      const response = await apiService.get(url);
      return response.data as GetProductsSuccessResponse;
    } catch (error) {
      return null;
    }
  }

  export async function getOneProduct(product_id: number) {
    try {
      const url = `/api/product/${product_id}`;
      const response = await apiService.get(url);
      return response.data as GetOneProductSuccessResponse;
    } catch (error) {
      console.error("Error a product:", error);
      return;
    }
  }

  export async function postReview(product_id: number, body: ReviewObject) {
    try {
      const url = `/api/product/${product_id}/review`;

      const response = await apiService.post(url, body);
      return response.data as PostReviewSuccessResponse;
    } catch (error) {
      console.error("Error a product:", error);
      return;
    }
  }

  export async function getProductCategories() {
    try {
      const url = `/api/category`;
      const response = await apiService.get(url);
      return response.data as GetAllProductCategorySuccessResponse;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return;
    }
  }
}
