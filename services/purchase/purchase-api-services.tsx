import {
  GetAllPurchasesSuccessResponse,
  GetOnePurchasesSuccessResponse,
} from "@/types/services/purchase";
import apiService from "../../utils/service-utils";

export namespace PurchaseAPIService {
  export async function makeAPurchase() {
    try {
      const url = `/api/purchase`;
      const response = await apiService.post(url);
      return response.status;
    } catch (error) {
      console.error("Error making a purchase:", error);
      return;
    }
  }

  export async function getPurchases() {
    try {
      const url = `/api/purchase`;
      const response = await apiService.get(url);
      return response.data as GetAllPurchasesSuccessResponse;
    } catch (error) {
      console.error("Error fetching all purchases:", error);
      return;
    }
  }

  export async function getOnePurchases(purchase_id: number) {
    try {
      const url = `/api/purchase/${purchase_id}`;
      const response = await apiService.get(url);
      return response.data as GetOnePurchasesSuccessResponse;
    } catch (error) {
      console.error("Error fetching a required purchase:", error);
      return;
    }
  }
}
