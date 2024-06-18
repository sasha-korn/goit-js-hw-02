function getShippingCost(country) {
  let info;
  switch (country) {
    case "China":
      info = "Shipping to China will cost 100 credits";
      break;
    case "Chile":
      info = "Shipping to Chile will cost 250 credits";
      break;
    case "Australia":
      info = "Shipping to Australia will cost 170 credits";
      break;
    case "Jamaica":
      info = "Shipping to Jamaica will cost 120 credits";
      break;
    default:
      info = "Sorry, there is no delivery to your country";
  }
  return info;
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
