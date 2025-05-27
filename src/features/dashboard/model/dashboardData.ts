type CryptoCardData = {
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

type BalanceData = {
  total: string;
  percentage: number;
  income: string;
  expenses: string;
};

export const cryptoCards: CryptoCardData[] = [
  {
    icon: "images/bitcoin_mid.png",
    name: "Bitcoin",
    symbol: "BTC",
    amount: 671.28,
    currency: "USDT",
    trend: "up",
    percentage: 92.4,
    trendColor: "#00A385",
    chartId: "Bitcoin",
  },
  {
    icon: "/images/cardano_mid.png",
    name: "Cardano",
    symbol: "ADA",
    amount: 456.12,
    currency: "ADA",
    trend: "up",
    percentage: 50.9,
    trendColor: "#8957ff",
    chartId: "marketCap",
  },
  {
    icon: "images/electro_mid.png",
    name: "EOS",
    symbol: "EOS",
    amount: 324.17,
    currency: "EOS",
    trend: "up",
    percentage: 19.3,
    trendColor: "#FF6161",
    chartId: "volume",
  },
];

export const stakingRewards = [
  {
    icon: "/images/bitcoin_mid.png",
    name: "BTC",
    amount: 95,
    percentage: 73,
  },
  {
    icon: "images/cardano_mid.png",
    name: "ADA",
    amount: 56,
    percentage: 73,
  },
  {
    icon: "/images/bnb.png",
    name: "BNB",
    amount: 44,
    percentage: 73,
  },
  {
    icon: "/images/dogecoin_lg.png",
    name: "DOG",
    amount: 32,
    percentage: 73,
  },
];

export const subscriptions = [
  {
    icon: "images/youtube.png",
    name: "Youtube",
    price: "$10.99",
  },
];

export const balanceData: BalanceData = {
  total: "$324.74 USD",
  percentage: 15.4,
  income: "$23,863.21 USD",
  expenses: "$5,678.45 USD",
};
