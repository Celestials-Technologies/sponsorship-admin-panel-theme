export type CryptoCardData = {
  icon: string;
  name: string;
  symbol: string;
  amount: number;
  currency: string;
  trend: "up" | "down";
  percentage: number;
  trendColor: string;
  chartId: string;
};

export type BalanceData = {
  total: string;
  percentage: number;
  income: string;
  expenses: string;
};

export type StakingRewardData = {
  icon: string;
  name: string;
  amount: number;
  percentage: number;
};

export type SubscriptionData = {
  icon: string;
  name: string;
  price: string;
};
