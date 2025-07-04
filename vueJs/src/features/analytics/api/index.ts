import axios from "axios";
import { onMounted, ref } from "vue";
import { AnalyticsInfo } from "../model/types";

export const useAnalyticsData = () => {
  const analyticsInfo = ref<AnalyticsInfo[]>([]);

  const fetchAnalyticsData = async () => {
    try {
      const response = await axios.get("/analyticsData/data.json");
      analyticsInfo.value = response.data.analyticsInfo;
    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
  };

  onMounted(fetchAnalyticsData);

  return {
    analyticsInfo,
    fetchAnalyticsData,
  };
};
