import axios from "axios";
import apiService from "../../utils/service-utils";
import { GetProductsParams, ReviewObject } from "@/types/services/product";

export namespace ProductAPIService {
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
      return response.data.data;
    } catch (error) {
      return null;
    }
  }

  export async function getOneProduct(product_id: number) {
    try {
      const searchParams = new URLSearchParams();

      const url = `/api/product/${product_id}`;

      const response = await apiService.get(url);
      return response.data;
    } catch (error) {
      console.error("Error a product:", error);
      throw error;
    }
  }

  export async function postReview(product_id: number, body: ReviewObject) {
    try {
      const searchParams = new URLSearchParams();

      const url = `/api/product/${product_id}/review`;

      const response = await apiService.post(url, body);
      return response.data;
    } catch (error) {
      console.error("Error a product:", error);
      throw error;
    }
  }

  export async function getProductCategories() {
    try {
      const url = `/api/category`;
      const response = await apiService.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
}
