import axios from "axios";
import apiService from "../../utils/service-utils";

export namespace PurchaseAPIService {
  export async function makeAPurchase() {
    try {
      const url = `/api/purchase`;
      const response = await apiService.post(url);
      return response.status;
    } catch (error) {
      console.error("Error making a purchase:", error);
      throw error;
    }
  }

  export async function getPurchases() {
    try {
      const url = `/api/purchase`;
      const response = await apiService.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching all purchases:", error);
      throw error;
    }
  }

  export async function getOnePurchases(purchase_id: number) {
    try {
      const url = `/api/purchase/${purchase_id}`;
      const response = await apiService.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching a required purchase:", error);
      throw error;
    }
  }
}
