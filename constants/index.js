export const categories = [
  {
    id: "1",
    name: "Fast Food",
    image: require("../assets/images/fastfood.png"),
  },
  {
    id: "2",
    name: "Fruit Item",
    image: require("../assets/images/fruit.png"),
  },
  {
    id: "3",
    name: "Rice Item",
    image: require("../assets/images/rice.png"),
  },
  {
    id: "4",
    name: "Noodle Item",
    image: require("../assets/images/noodle.png"),
  },
  {
    id: "5",
    name: "Vegetable Item",
    image: require("../assets/images/vegetable.png"),
  },
  {
    id: "6",
    name: "Sea Food",
    image: require("../assets/images/seafood.png"),
  },
  {
    id: "7",
    name: "Sweets",
    image: require("../assets/images/sweets.png"),
  },
  {
    id: "8",
    name: "Drink",
    image: require("../assets/images/drink.png"),
  },
];

export const featured = [
  {
    id: "1",
    title: "hot and Spicy",
    description: "Spicy food is the best food",
    restaurants: [
      {
        id: `1`,
        name: "Hot Chicken",
        image: require("../assets/images/hot-chicken.png"),
        description: "Hot Chicken is a spicy chicken dish",
        lng: 38.2145602,
        lat: -85.927079,
        address: "1234 Hot Chicken Blvd",
        stars: 4,
        reviews: 122,
        category: "Fast Food",
        dishes: [
          {
            id: "1",
            name: "Hot Chicken",
            image: require("../assets/images/hot-chicken.png"),
            description: "Hot Chicken is a spicy chicken dish",
            price: 12.99,
          },
          {
            id: "2",
            name: "Hot Chicken",
            image: require("../assets/images/hot-chicken.png"),
            description: "Hot Chicken is a spicy chicken dish",
            price: 12.99,
          },
          {
            id: "3",
            name: "Hot Chicken",
            image: require("../assets/images/hot-chicken.png"),
            description: "Hot Chicken is a spicy chicken dish",
            price: 12.99,
          },
        ],
      },
    ],
  },
];
