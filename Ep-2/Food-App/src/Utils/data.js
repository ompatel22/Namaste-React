const restaurants = [
  {
    id: "510288",
    name: "Subway",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c51c1190-7c40-415b-b8d7-3af381e4c989_510288.JPG",
    locality: "Neelkanth Nagar",
    areaName: "Bhalej Road",
    costForTwo: "₹300 for two",
    cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
    avgRating: 4.4,
    totalRatings: "491",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 2.9,
      slaString: "20-25 mins",
      lastMileTravelString: "2.9 km",
    },
    availability: {
      nextCloseTime: "2025-01-20 00:00:00",
      opened: true,
    },
    badges: [
      {
        imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Sandwich.png",
        description: "Delivery!",
      },
    ],
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
  },
  {
    id: "929887",
    name: "Theobroma",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/522192b1-ea6e-47a6-983d-427298a770a2_929887.jpg",
    locality: "Radha Swami Sayujya Complex",
    areaName: "Vallabh",
    costForTwo: "₹400 for two",
    cuisines: ["Bakery", "Desserts"],
    avgRating: 4.4,
    totalRatings: "60",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 5,
      slaString: "25-30 mins",
      lastMileTravelString: "5.0 km",
    },
    availability: {
      nextCloseTime: "2025-01-20 00:00:00",
      opened: true,
    },
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discountInfo: {
      header: "ITEMS",
      subHeader: "AT ₹29",
    },
    isNewlyOnboarded: true,
  },
  {
    id: "102216",
    name: "McDonald's",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/eee88869-37a5-48ea-98b2-011c70f0fde4_102216.jpg",
    locality: "Anand Sojitra Road",
    areaName: "Vallabh Vidyanagar",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.4,
    totalRatings: "6.1K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 3,
      slaString: "15-20 mins",
      lastMileTravelString: "3.0 km",
    },
    availability: {
      nextCloseTime: "2025-01-20 02:45:00",
      opened: true,
    },
    badges: [
      {
        imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
        description: "Delivery!",
      },
    ],
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discountInfo: {
      header: "₹50 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
  },
  {
    id: "981958",
    name: "Domino's Pizza",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/7841b2a5-249c-4ba3-9ee9-32c3b3c53599_981958.jpg",
    locality: "Sojitra Road",
    areaName: "MARUTI SOLARIS ANNEX",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.1,
    totalRatings: "21",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 3,
      slaString: "25-30 mins",
      lastMileTravelString: "3.0 km",
    },
    availability: {
      nextCloseTime: "2025-01-19 23:59:00",
      opened: true,
    },
    badges: [
      {
        imageId: "v1695133679/badges/Pure_Veg111.png",
        description: "pureveg",
      },
    ],
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discountInfo: {
      header: "ITEMS",
      subHeader: "AT ₹89",
    },
    isNewlyOnboarded: true,
  },
  {
    id: "133905",
    name: "Pizza Hut",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/76ccb5b7-879a-46b9-bfca-e8cf4470f69c_133905.jpg",
    locality: "Maruti Solaris",
    areaName: "Hadgood",
    costForTwo: "₹600 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.4,
    totalRatings: "3.8K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 3,
      slaString: "25-30 mins",
      lastMileTravelString: "3.0 km",
    },
    availability: {
      nextCloseTime: "2025-01-20 03:00:00",
      opened: true,
    },
    badges: [
      {
        imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
        description: "Delivery!",
      },
    ],
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discountInfo: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
  },
  {
    id: "125678",
    name: "KFC",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/c01daea2-473f-484b-9679-8d8c91298e80_340376.JPG",
    locality: "Station Road",
    areaName: "Anand",
    costForTwo: "₹450 for two",
    cuisines: ["Chicken", "Fast Food", "Beverages"],
    avgRating: 4.3,
    totalRatings: "2.5K+",
    sla: {
      deliveryTime: 20,
      lastMileTravel: 2.5,
      slaString: "15-20 mins",
      lastMileTravelString: "2.5 km",
    },
    availability: {
      nextCloseTime: "2025-01-20 01:00:00",
      opened: true,
    },
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discountInfo: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹399",
      discountTag: "FLAT DEAL",
    },
  },
  {
    id: "826534",
    name: "Pastas By Pizza Hut",
    image:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/d5480383-5a6c-4324-8abe-926f4d4c5d3c_826534.JPG",
    locality: "Maruti Solaris",
    areaName: "Hadgood",
    costForTwo: "₹400 for two",
    cuisines: ["Pastas"],
    avgRating: 4.2,
    totalRatings: "59",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 3,
      slaString: "25-30 mins",
      lastMileTravelString: "3 km",
    },
    availability: {
      nextCloseTime: "2025-01-21 02:00:00",
      opened: true,
    },
    badges: [
      {
        imageId: "Green%20Dot%20Awards/Best%20In%20Pastas.png",
        description: "Best Seller!",
      },
    ],
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
  },
  {
    id: "301184",
    name: "PVR Cafe",
    image: "b9lpwrbxjbplmma3vdcy",
    locality: "Maruti Solaris Mall",
    areaName: "GIDC",
    costForTwo: "₹300 for two",
    cuisines: ["Snacks", "Fast Food", "Beverages"],
    avgRating: 4.7,
    totalRatings: "56",
    sla: {
      deliveryTime: 23,
      lastMileTravel: 3,
      slaString: "20-25 mins",
      lastMileTravelString: "3.0 km",
    },
    availability: {
      nextCloseTime: "2025-01-20 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discounts: {
      header: "ITEMS",
      subHeader: "AT ₹79",
    },
    cta: {
      link: "https://www.swiggy.com/city/anand/pvr-cafe-maruti-solaris-mall-gidc-rest301184",
      type: "WEBLINK",
    },
  },
  {
    id: "420309",
    name: "McDonald's Gourmet Burger Collection",
    image: "zf41hfwhz5ojkyydu18s",
    locality: "Maruti Mall",
    areaName: "Vallabh Vidyanagar",
    costForTwo: "₹500 for two",
    cuisines: ["Burgers", "Fast Food"],
    avgRating: 4.3,
    totalRatings: "120",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 3.2,
      slaString: "25-30 mins",
      lastMileTravelString: "3.2 km",
    },
    availability: {
      nextCloseTime: "2025-01-21 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discounts: {
      header: "20% OFF",
      subHeader: "UPTO ₹100",
    },
    cta: {
      link: "https://www.swiggy.com/city/anand/mcdonalds-gourmet-burger-collection-maruti-mall-vallabh-vidyanagar-rest420309",
      type: "WEBLINK",
    },
  },
  {
    id: "261176",
    name: "Santushti Shakes & More",
    image: "phxexmd1fhlr8c2dvxct",
    locality: "Mahadev Nagar",
    areaName: "Vallabh Vidyanagar",
    costForTwo: "₹250 for two",
    cuisines: ["Desserts", "Ice Cream"],
    avgRating: 4.1,
    totalRatings: "710",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 5,
      slaString: "20-25 mins",
      lastMileTravelString: "5.0 km",
    },
    availability: {
      nextCloseTime: "2025-01-20 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discounts: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    cta: {
      link: "https://www.swiggy.com/city/anand/santushti-shakes-and-more-mahadev-nagar-vallabh-vidyanagar-rest261176",
      type: "WEBLINK",
    },
  },
  {
    id: "588510",
    name: "La Milano Pizzeria",
    image: "p1serixl9sdprq47nump",
    locality: "Vallabh Vidyanagar",
    areaName: "Vallabh Vidyanagar",
    costForTwo: "₹400 for two",
    cuisines: [
      "Pizzas",
      "Italian",
      "Desserts",
      "Pastas",
      "Mexican",
      "Fast Food",
      "Beverages",
    ],
    avgRating: 4.5,
    totalRatings: "1.5K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 4.9,
      slaString: "25-30 mins",
      lastMileTravelString: "4.9 km",
    },
    availability: {
      nextCloseTime: "2025-01-19 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discounts: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    cta: {
      link: "https://www.swiggy.com/city/anand/la-milano-pizzeria-vallabh-vidyanagar-rest588510",
      type: "WEBLINK",
    },
  },
  {
    id: "499781",
    name: "Grameen Kulfi",
    image: "qwbnjytrstg6sltmijgh",
    locality: "Mahadev Nagar",
    areaName: "Vallabh Vidyanagar",
    costForTwo: "₹120 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.5,
    totalRatings: "171",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 5,
      slaString: "30-35 mins",
      lastMileTravelString: "5.0 km",
    },
    availability: {
      nextCloseTime: "2025-01-20 00:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discounts: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    cta: {
      link: "https://www.swiggy.com/city/anand/grameen-kulfi-mahadev-nagar-vallabh-vidyanagar-rest499781",
      type: "WEBLINK",
    },
  },
  {
    id: "327543",
    name: "Delights by INOX",
    image: "b857fcf611707fedd3773eb02688f925",
    locality: "City Pulse Mall",
    areaName: "Vallabh Vidyanagar",
    costForTwo: "₹400 for two",
    cuisines: ["Snacks"],
    avgRating: 4.5,
    totalRatings: "30",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 4,
      slaString: "20-25 mins",
      lastMileTravelString: "4.0 km",
    },
    availability: {
      nextCloseTime: "2025-01-20 01:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discounts: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    cta: {
      link: "https://www.swiggy.com/city/anand/delights-by-inox-city-pulse-mall-vallabh-vidyanagar-rest327543",
      type: "WEBLINK",
    },
  },
  {
    id: "602502",
    name: "Great Britain Waffle",
    image: "sqs0skzlevwkzijwztuq",
    locality: "Mahadev Nagar",
    areaName: "Mahadev Nagar",
    costForTwo: "₹280 for two",
    cuisines: ["Waffle", "Desserts", "Cafe"],
    avgRating: 4.5,
    totalRatings: "190",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 5,
      slaString: "30-35 mins",
      lastMileTravelString: "5.0 km",
    },
    availability: {
      nextCloseTime: "2025-01-19 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    loyaltyInfo: {
      logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
      freeDeliveryMessage: "FREE DELIVERY",
    },
    discounts: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    cta: {
      link: "https://www.swiggy.com/city/anand/great-britain-waffle-mahadev-nagar-rest602502",
      type: "WEBLINK",
    },
  }
];

export default restaurants;