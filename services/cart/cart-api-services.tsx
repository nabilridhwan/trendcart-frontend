import {
  AddCartBody,
  AddCartSuccessResponse,
  DeleteCartItemResponse,
  GetCartSuccessResponse,
  UpdateCartBody,
  UpdateCartItemResponse,
} from "@/types/services/cart";
import apiService from "../../utils/service-utils";

export namespace CartAPIService {
  export async function getCart(): Promise<GetCartSuccessResponse | null> {
    try {
      const url = `/api/cart`;
      const response = await apiService.get(url);
      return response.data as GetCartSuccessResponse;
    } catch (error) {
      console.error("Error fetching cart:", error);
      return null;
    }
  }

  export async function addToCart(
    body: AddCartBody
  ): Promise<AddCartSuccessResponse | null> {
    try {
      const url = `/api/cart`;
      const response = await apiService.post(url, body);
      return response.data as AddCartSuccessResponse;
    } catch (error) {
      console.error("Error adding to cart:", error);
      return null;
    }
  }

  export async function updateCart(
    cart_id: number,
    body: UpdateCartBody
  ): Promise<UpdateCartItemResponse | null> {
    try {
      const url = `/api/cart/${cart_id}`;
      const response = await apiService.patch(url, body);
      return response.data as UpdateCartItemResponse;
    } catch (error) {
      console.error("Error updating cart:", error);
      return null;
    }
  }
  export async function removeCart(
    cart_item_id: number
  ): Promise<DeleteCartItemResponse | null> {
    try {
      const url = `/api/cart/${cart_item_id}`;
      const response = await apiService.delete(url);
      return response.data as DeleteCartItemResponse;
    } catch (error) {
      console.error("Error removing item from cart:", error);
      return null;
    }
  }
}
