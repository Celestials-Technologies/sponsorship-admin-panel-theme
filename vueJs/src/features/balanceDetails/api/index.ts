import axios from "axios";
import { ref, onMounted } from "vue";
import { AverageBalanceData, CurrencyOverviewData } from "../model/types";

export const useBalanceDetailsData = () => {
  const averageBalanceData = ref<AverageBalanceData[]>([]);
  const currencyOverviewData = ref<CurrencyOverviewData[]>([]);
  const isLoading = ref(false);

  const fetchBalanceDetailsData = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get("/balanceDetailData/data.json");
      const data = response.data;
      averageBalanceData.value = data.AverageBalanceInfo;
      currencyOverviewData.value = data.CurrencyOverview;
    } catch (error) {
      console.error("Error fetching balance details data:", error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchBalanceDetailsData);

  return {
    averageBalanceData,
    currencyOverviewData,
    isLoading,
    fetchBalanceDetailsData,
  };
};
