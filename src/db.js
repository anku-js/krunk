export const chatBotInfo = {
  botAvatar: "bot-avatar.png", // Ideally will be a image hosted on a cdn
  isChatbotOnline: true,
  badge: "badge.png", // Ideally will be a image hosted on a cdn
  botName: "Timpu",
  botType: "Chat assistant",
  statusText: "Online",
};

export const chatMessages = [
  {
    id: 1,
    messageFrom: "bot",
    message:
      "Hi Sam! I am your personal shopping assistant , how can i help you today ?",
    messageSentAt: "4:45 PM", // Ideally this should be UTC timestamp
  },
  {
    id: 2,
    messageFrom: "user",
    message: "I am looking for a hand bag, with long strap",
    messageSentAt: "4:46 PM", // Ideally this should be UTC timestamp
  },
];

export const productInfo = {
  productName: "Bags",
  company: "Timpu",
  productCount: "1123",
  tags: ["Clutch", "Fabric lining", "Baggit", "Multi Compartment"],
  filters: ["Strap - Long", "Colour", "Size", "Brand", "Material"],
  sentAt: "4:48 PM",
};
