import axios from "axios";
import { onMounted, ref } from "vue";
import {
  LimitsType,
  RecentTransactionType,
  UpcommingTransactionType,
} from "../model/types";

export const useWalletData = () => {
  const limits = ref<LimitsType[]>([]);
  const recentTransaction = ref<RecentTransactionType[]>([]);
  const tableData = ref<UpcommingTransactionType[]>([]);

  const fetchData = async () => {
    const response = await axios.get("/wallet/data.json");
    limits.value = response.data.Limits;
    recentTransaction.value = response.data.RecentTransaction;
    tableData.value = response.data.UpcommingTransaction;
  };

  onMounted(fetchData);

  return {
    limits,
    recentTransaction,
    tableData,
  };
};
