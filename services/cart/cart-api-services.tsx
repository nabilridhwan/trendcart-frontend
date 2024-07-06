import { AddCartBody, CartItem, UpdateCartBody } from "@/types/services/cart";
import axios from "axios";
import apiService from "../../utils/service-utils";

export namespace CartAPIService {
  export async function getCart(): Promise<CartItem[] | null> {
    try {
      const url = `/api/cart`;
      const response = await apiService.get(url);
      return response.data as CartItem[];
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  }

  export async function addToCart(body: AddCartBody) {
    try {
      const url = `/api/cart`;
      const response = await apiService.post(url, body);
      return response.status;
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  }

  export async function updateCart(cart_id: number, body: UpdateCartBody) {
    try {
      const url = `/api/cart/${cart_id}`;
      const response = await apiService.patch(url, body);
      return response.status;
    } catch (error) {
      console.error("Error updating cart:", error);
      throw error;
    }
  }
  export async function removeCart(cart_item_id: number) {
    try {
      const url = `/api/cart/${cart_item_id}`;
      const response = await apiService.delete(url);
      return response.status;
    } catch (error) {
      console.error("Error removing item from cart:", error);
      throw error;
    }
  }
}
