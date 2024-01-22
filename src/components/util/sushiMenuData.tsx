const menuList = [
  {
    id: "SUSHI MENU",
    menuSubtitle: [
      {
        subtitle: "Sushi Combos",
        menuName: [
          {
            id: 0,
            menuName: "Sushi Combo A",
            menuDescription:
              "5 pieces of nigiri sushi (chef's choice) with a California roll",
            menuPrice: "$19.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Sushi Combo B",
            menuDescription:
              "5 pieces of nigiri sushi (chef's choice) with a spicy tuna roll",
            menuPrice: "$21.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Sushi Combo C",
            menuDescription:
              "5 pieces of nigiri sushi (chef's choice) with either an American roll or a Hawaiian roll or a rainbow roll",
            menuPrice: "$23.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Two Roll Combo",
            menuDescription: "King of king roll, and an Austin roll",
            menuPrice: "$26.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "NIGIRI",
        menuName: [
          {
            id: 0,
            menuName: "Tuna/Maguro Nigiri",
            menuDescription: "",
            menuPrice: "$7.00 / $9.99",
            img: "",
          },
          {
            id: 1,
            menuName: "White Tuna Nigiri",
            menuDescription: "",
            menuPrice: "$7.00 / $9.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Salmon/Sake Nigiri",
            menuDescription: "",
            menuPrice: "$7.00 / $9.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Shrimp/EBI Nigiri",
            menuDescription: "",
            menuPrice: "$5.00 / $5.00",
            img: "",
          },
          {
            id: 4,
            menuName: "Crab/Kani Nigiri",
            menuDescription: "",
            menuPrice: "$5.00",
            img: "",
          },
          {
            id: 5,
            menuName: "Red Snapper/Tai Nigiri",
            menuDescription: "",
            menuPrice: "$5.00 / $5.99",
            img: "",
          },
          {
            id: 6,
            menuName: "Smelt Caviar/Masago Nigiri",
            menuDescription: "",
            menuPrice: "$5.00",
            img: "",
          },
          {
            id: 7,
            menuName: "Yellowtail/Hamachi Nigiri",
            menuDescription: "",
            menuPrice: "$6.00 / $6.99",
            img: "",
          },
          {
            id: 8,
            menuName: "Freshwater Eel/Unagi Nigiri",
            menuDescription: "",
            menuPrice: "$8.99 / $11.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "SUSHI SPECIAL ROLLS",
        menuName: [
          {
            id: 0,
            menuName: "Ahi Tower",
            menuDescription:
              "Tuna, spicy tuna, avocado, crab, rice, and masago built in a tower",
            menuPrice: "$17.99",
            img: "",
          },
          {
            id: 1,
            menuName: "King of King Roll",
            menuDescription:
              "Tempura shrimp, cucumber, avocado, and crab on top",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Hanara Roll",
            menuDescription:
              "Spicy crab, cucumber, avocado, and fried onion on top",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Spicy Baked Roll",
            menuDescription:
              "Baked with California roll on spicy tuna on top with jalapeno",
            menuPrice: "$14.99",
            img: "",
          },
          {
            id: 4,
            menuName: "Spicy Dragon Roll",
            menuDescription:
              "Tempura shrimp, cucumber, spicy tuna on top with jalapeno",
            menuPrice: "$14.99",
            img: "",
          },
          {
            id: 5,
            menuName: "Arboretum Roll",
            menuDescription: "Cucumber, carrot, avocado, and crab on top",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 6,
            menuName: "Hallelujah Roll",
            menuDescription:
              "Spicy tuna, avocado, cucumber, burdock root with Salmon on top",
            menuPrice: "$13.99",
            img: "./img/Hallelujah-Roll.webp",
          },
          {
            id: 7,
            menuName: "Spicy Yummy Roll",
            menuDescription:
              "Crab, cucumber, burdock root, pickled radis/avocado spicy tuna, jalapeno on top",
            menuPrice: "$14.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "TEMPURA ROLLS",
        menuName: [
          {
            id: 0,
            menuName: "Veggie Tempura Roll",
            menuDescription: "Avocado, carrot, cucumber, and sweet potato",
            menuPrice: "$11.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Shrimp Tempura Roll",
            menuDescription: "Tempura shrimp, crab, avocado, and cucumber",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Mexican Roll",
            menuDescription:
              "Salmon, avocado, jalapeno, cream cheese, and crab",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Samurai Roll",
            menuDescription:
              "Salmon, sweet potato, cream cheese, crab, avocado, and spicy tuna",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 4,
            menuName: "Spider Roll",
            menuDescription: "Soft shell crab, aocado, crab",
            menuPrice: "$15.99",
            img: "",
          },
          {
            id: 5,
            menuName: "Austin Roll",
            menuDescription:
              "Deep fried with crab, avocado, cream cheese, and jalapeno",
            menuPrice: "$12.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "POKE BOWL",
        menuName: [
          {
            id: 0,
            menuName: "Tuna Poke Bowl",
            menuDescription:
              "Lettuce, red cabbage, carrot, cucumber, avocado, masago, and tuna",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Salmon Poke Bowl",
            menuDescription:
              "Lettuce, red cabbage, carrot, cucumber, avocado, masago, and salmon",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Combo Poke Bowl",
            menuDescription:
              "Lettuce, red cabbage, carrot, cucumber, avocado, masago, tuna, and salmon",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Veggie Poke Bowl",
            menuDescription:
              "Lettuce, red cabbage, carrot, cucumber, avocado, masago",
            menuPrice: "$10.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "VEGETABLE ROLLS",
        menuName: [
          {
            id: 0,
            menuName: "Avocado Roll",
            menuDescription: "",
            menuPrice: "$7.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Kappa Roll",
            menuDescription: "Cucumber",
            menuPrice: "$6.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Veggie Roll",
            menuDescription: "",
            menuPrice: "$8.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Tofu Avocado Roll",
            menuDescription: "",
            menuPrice: "$8.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "MAKISUSHI / ROLL",
        menuName: [
          {
            id: 0,
            menuName: "American Roll",
            menuDescription: "Crab, cucumber, avocado, and salmon on top",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Crazy Fish Roll",
            menuDescription: "Cucumber, spicy tuna, avocado, and shrimp on top",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Hawaiian Roll",
            menuDescription: "Spicy tuna, cucumber, and tuna on top",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Rainbow Roll",
            menuDescription: "California roll with 5 pieces of fish on top",
            menuPrice: "$12.99",
            img: "./img/Rainbow-Roll.webp",
          },
          {
            id: 4,
            menuName: "Sunshine Roll",
            menuDescription: "Avocado, cucumber, and 5 pieces of fish",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 5,
            menuName: "Tiger Roll",
            menuDescription: "Shrimp tempura, cucumber, and spicy tuna on top",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 6,
            menuName: "Caterpillar Roll",
            menuDescription: "Eel, crab, cucumber, and avacado on top",
            menuPrice: "$14.99",
            img: "",
          },
          {
            id: 7,
            menuName: "Hot Rainbow Roll",
            menuDescription:
              "Spicy tuna, cucumber, and 5 pieces of fish on top",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 8,
            menuName: "Snow Roll",
            menuDescription: "Spicy salmon, cucumber, and white tuna on top",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 9,
            menuName: "Stupid Fish Roll",
            menuDescription: "Crab, cucumber, avocado, and yellowtail on top",
            menuPrice: "$14.99",
            img: "",
          },
          {
            id: 10,
            menuName: "Drunk Fish Roll",
            menuDescription: "Avocado, cucumber, crab, and eel on top",
            menuPrice: "$14.99",
            img: "",
          },
          {
            id: 11,
            menuName: "Salmon Skin Roll",
            menuDescription:
              "Spicy tuna, cucumber, and 5 pieces of fish on top",
            menuPrice: "$11.99",
            img: "",
          },
          {
            id: 12,
            menuName: "Green Dragon Roll",
            menuDescription: "Spicy tuna, cucumber, and avocado on top",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 13,
            menuName: "California Roll",
            menuDescription: "",
            menuPrice: "$7.99",
            img: "",
          },
          {
            id: 14,
            menuName: "Spicy California Roll",
            menuDescription: "",
            menuPrice: "$8.99",
            img: "",
          },
          {
            id: 15,
            menuName: "Tuna Roll",
            menuDescription: "",
            menuPrice: "$8.99",
            img: "",
          },
          {
            id: 16,
            menuName: "Spicy Tuna Roll",
            menuDescription: "Avocado, and cucumber",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 17,
            menuName: "Salmon Roll",
            menuDescription: "Avocado, cucumber",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 18,
            menuName: "Philadelphia Roll",
            menuDescription: "",
            menuPrice: "$11.99",
            img: "",
          },
          {
            id: 19,
            menuName: "Golden California Roll",
            menuDescription: "",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 20,
            menuName: "Eel Roll",
            menuDescription: "",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 21,
            menuName: "Crunch Roll",
            menuDescription: "Shrimp tempura, cucumber, and crunch on top",
            menuPrice: "$12.99",
            img: "",
          },
        ],
      },
    ],
  },
  {
    id: "KITCHEN MENU",
    menuSubtitle: [
      {
        subtitle: "Salads & Teriyaki",
        menuName: [
          {
            id: 0,
            menuName: "Garden Salad",
            menuDescription: "",
            menuPrice: "$5.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Seaweed Salad",
            menuDescription: "",
            menuPrice: "$5.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Chicken Teriyaki",
            menuDescription: "",
            menuPrice: "$9.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Beef Teriyaki",
            menuDescription: "",
            menuPrice: "$9.99",
            img: "",
          },
          {
            id: 4,
            menuName: "Bulgogi",
            menuDescription: "",
            menuPrice: "$9.99",
            img: "",
          },
          {
            id: 5,
            menuName: "Tofu Teriyaki",
            menuDescription: "",
            menuPrice: "$11.99",
            img: "",
          },
          {
            id: 6,
            menuName: "Salmon Teriyaki",
            menuDescription: "",
            menuPrice: "$13.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "Bowls",
        menuName: [
          {
            id: 0,
            menuName: "Chicken",
            menuDescription: "Chicken on a bed of rice with steamed vegetables",
            menuPrice: "$9.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Beef",
            menuDescription: "Beef on a bed of rice with steamed vegetables",
            menuPrice: "$9.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Tofu",
            menuDescription: "Tofu on a bed of rice with steamed vegetables",
            menuPrice: "$11.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Combo",
            menuDescription:
              "Beef & chicken on a bed of rice with steamed vegetables",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 4,
            menuName: "Salmon",
            menuDescription: "Salmon on a bed of rice with steamed vegetables",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 5,
            menuName: "Bulgogi",
            menuDescription:
              "Korean marinated and grilled beef on a bed of rice with steamed vegetables",
            menuPrice: "$9.99",
            img: "",
          },
          {
            id: 6,
            menuName: "Unagi",
            menuDescription:
              "Grilled freshwater eel on a bed of rice with steamed vegetables",
            menuPrice: "$15.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "Bento",
        menuName: [
          {
            id: 0,
            menuName: "Chicken",
            menuDescription:
              "Chicken served with tempura, salad, gyoza, California rolls (2pcs), and rice",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Beef",
            menuDescription:
              "Beef served with tempura, salad, gyoza, California rolls (2pcs), and rice",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Bulgogi",
            menuDescription:
              "Korean marinated and grilled beef served with tempura, salad, gyoza, California rolls (2pcs), and rice",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Tofu",
            menuDescription:
              "Tofu served with tempura, salad, gyoza, California rolls (2pcs), and rice",
            menuPrice: "$14.99",
            img: "",
          },
          {
            id: 4,
            menuName: "Combo",
            menuDescription:
              "Beef & Chicken served with tempura, salad, gyoza, California rolls (2pcs), and rice",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 5,
            menuName: "Salmon",
            menuDescription:
              "Salmon served with tempura, salad, gyoza, California rolls (2pcs), and rice",
            menuPrice: "$15.99",
            img: "",
          },
          {
            id: 6,
            menuName: "Unagi",
            menuDescription:
              "Grilled freshwater eel served with tempura, salad, gyoza, California rolls (2pcs), and rice",
            menuPrice: "$18.99",
            img: "",
          },
          {
            id: 7,
            menuName: "Tonkatsu",
            menuDescription:
              "Rice breaded pork cutlet served with miso soup, California roll (2pcs), cabbage salad, and rice",
            menuPrice: "$13.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "Udon",
        menuName: [
          {
            id: 0,
            menuName: "Veggies Only",
            menuDescription: "Thick and soft noodles in a vegetable broth",
            menuPrice: "$9.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Chicken",
            menuDescription:
              "Chicken with thick and soft noodles in a vegetable broth",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Beef",
            menuDescription:
              "Beef with thick and soft noodles in a vegetable broth",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Shrimp Tempura",
            menuDescription:
              "Shrimp Tempura with thick and soft noodles in a vegetable broth",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 4,
            menuName: "Seafood",
            menuDescription:
              "Seafood with thick and soft noodles in a vegetable broth",
            menuPrice: "$11.99",
            img: "",
          },
          {
            id: 5,
            menuName: "Tofu",
            menuDescription:
              "Tofu with thick and soft noodles in a vegetable broth",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 6,
            menuName: "Tonkatsu",
            menuDescription:
              "Fried pork cutlet with thick and soft noodles in a vegetable broth",
            menuPrice: "$12.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "Yakisoba",
        menuName: [
          {
            id: 0,
            menuName: "Veggies Only",
            menuDescription:
              "Stir fried noodle and vegetables (Carrots, onion, green cabbage, broccoli)",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Chicken",
            menuDescription: "Chicken with stir fried noodle and vegetables",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Beef",
            menuDescription: "Beef with stir fried noodle and vegetables",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Combo",
            menuDescription:
              "Chicken and beef with stir fried noodle and vegetables",
            menuPrice: "$14.99",
            img: "",
          },
          {
            id: 4,
            menuName: "Tofu",
            menuDescription: "Tofu with stir fried noodle and vegetables",
            menuPrice: "$16.99",
            img: "",
          },
          {
            id: 5,
            menuName: "Shrimp",
            menuDescription: "Shrimp with stir fried noodle and vegetables",
            menuPrice: "$16.99",
            img: "",
          },
        ],
      },
      {
        subtitle: "Ramen Noodles",
        menuName: [
          {
            id: 0,
            menuName: "Veggies Only Ramen",
            menuDescription: "Noodles in Spicy Broth with veggies",
            menuPrice: "$9.99",
            img: "",
          },
          {
            id: 1,
            menuName: "Chicken Ramen",
            menuDescription: "Chicken with noodles in Spicy Broth with veggies",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 2,
            menuName: "Beef Ramen",
            menuDescription: "Beef with noodles in Spicy Broth with veggies",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 3,
            menuName: "Combo (Chicken & Beef) Ramen",
            menuDescription:
              "Chicken and beef with noodles in Spicy Broth with veggies",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 4,
            menuName: "Shrimp Tempura Ramen",
            menuDescription:
              "Shrimp tempura with noodles in Spicy Broth with veggies",
            menuPrice: "$10.99",
            img: "",
          },
          {
            id: 5,
            menuName: "Seafood Ramen",
            menuDescription: "Seafood with noodles in Spicy Broth with veggies",
            menuPrice: "$11.99",
            img: "",
          },
          {
            id: 6,
            menuName: "Tofu Ramen",
            menuDescription: "Tofu with noodles in Spicy Broth with veggies",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 7,
            menuName: "Tonkatsu (Fried Pork Cutlet on the side) Ramen",
            menuDescription:
              "Tonkatsu with noodles in Spicy Broth with veggies",
            menuPrice: "$12.99",
            img: "",
          },
          {
            id: 8,
            menuName: "Gyoza (Fried Dumplings) Ramen",
            menuDescription: "Gyoza with noodles in Spicy Broth with veggies",
            menuPrice: "$13.99",
            img: "",
          },
          {
            id: 9,
            menuName: "Spider (Soft Shell Crab) Ramen",
            menuDescription:
              "Soft Shell Crab with stir fried noodle and vegetables",
            menuPrice: "$16.99",
            img: "",
          },
        ],
      },
    ],
  },
  {
    id: "SIDES",
    menuSubtitle: [
      {
        subtitle: "Sides",
        menuName: [
          {
            id: 0,
            menuName: "Bowl of White Rice",
            menuDescription: "",
            menuPrice: "$2.00",
            img: "",
          },
          {
            id: 1,
            menuName: "Bowl of Brown Rice",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "",
          },
          {
            id: 2,
            menuName: "Hot Green Tea",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "",
          },
          {
            id: 3,
            menuName: "Miso Soup",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "",
          },
          {
            id: 4,
            menuName: "Edamame",
            menuDescription: "",
            menuPrice: "$5.00",
            img: "",
          },
          {
            id: 5,
            menuName: "Gyoza",
            menuDescription: "",
            menuPrice: "$5.99",
            img: "",
          },
          {
            id: 6,
            menuName: "Seaweed Salad",
            menuDescription: "",
            menuPrice: "$5.99",
            img: "",
          },
          {
            id: 7,
            menuName: "Tempura",
            menuDescription: "",
            menuPrice: "$8.99",
            img: "",
          },
          {
            id: 8,
            menuName: "Shrimp only Tempura",
            menuDescription: "",
            menuPrice: "$8.99",
            img: "",
          },
        ],
      },
    ],
  },
  {
    id: "DRINKS",
    menuSubtitle: [
      {
        subtitle: "Drinks",
        menuName: [
          {
            id: 0,
            menuName: "Blueberry Bai",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "./img/blueberryBai.webp",
          },
          {
            id: 1,
            menuName: "Watermelon Bai",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "./img/watermelonBai.webp",
          },
          {
            id: 2,
            menuName: "Cherry Bai",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "./img/cherryBai.webp",
          },
          {
            id: 3,
            menuName: "Dr. Pepper Bottle",
            menuDescription: "",
            menuPrice: "$2.50",
            img: "./img/drPepper.webp",
          },
          {
            id: 4,
            menuName: "Coke Bottle",
            menuDescription: "",
            menuPrice: "$2.50",
            img: "",
          },
          {
            id: 5,
            menuName: "Diet Coke Bottle",
            menuDescription: "",
            menuPrice: "$2.50",
            img: "",
          },
          {
            id: 6,
            menuName: "Oi Ocha Green tea bottle",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "",
          },
          {
            id: 7,
            menuName: "Blackberry Izze",
            menuDescription: "",
            menuPrice: "$2.50",
            img: "",
          },
          {
            id: 8,
            menuName: "Green Apple Izze",
            menuDescription: "",
            menuPrice: "$2.50",
            img: "",
          },
          {
            id: 9,
            menuName: "Peach Izze",
            menuDescription: "",
            menuPrice: "$2.50",
            img: "",
          },
          {
            id: 10,
            menuName: "Clementine Izze",
            menuDescription: "",
            menuPrice: "$2.50",
            img: "",
          },
          {
            id: 11,
            menuName: "Jumex Can",
            menuDescription: "",
            menuPrice: "$2.50",
            img: "",
          },
          {
            id: 12,
            menuName: "Sweet PURE LEAF tea",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "",
          },
          {
            id: 13,
            menuName: "Original Ramune Japanese Marble Soda",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "",
          },
          {
            id: 14,
            menuName: "Strawberry Ramune Japanese Marble Soda",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "",
          },
          {
            id: 15,
            menuName: "Melon Ramune Japanese Marble Soda",
            menuDescription: "",
            menuPrice: "$3.00",
            img: "",
          },
          {
            id: 16,
            menuName: "Red Bull",
            menuDescription: "",
            menuPrice: "$3.50",
            img: "",
          },
          {
            id: 17,
            menuName: "Topo Chico",
            menuDescription: "",
            menuPrice: "$2.50",
            img: "",
          },
          {
            id: 18,
            menuName: "Water Bottle",
            menuDescription: "",
            menuPrice: "$1.50",
            img: "",
          },
        ],
      },
    ],
  },
];

export { menuList };
