import axios from "axios";
import type { DashboardData } from "@/features/dashboard/model/types";
import { ref, onMounted } from "vue";

export const useDashboardData = () => {
  const isLoading = ref(true);
  const dashboardData = ref<DashboardData>({
    cryptoCards: [],
    stakingRewards: [],
    subscriptions: [],
    balanceData: {
      total: "",
      percentage: 0,
      income: "",
      expenses: "",
    },
  });

  const fetchDashboardData = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get("/dashboardData/data.json");
      dashboardData.value = response.data;
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetchDashboardData);

  return {
    dashboardData,
    isLoading,
    fetchDashboardData,
  };
};
