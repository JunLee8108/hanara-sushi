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
          },
          {
            id: 1,
            menuName: "Sushi Combo B",
            menuDescription:
              "5 pieces of nigiri sushi (chef's choice) with a spicy tuna roll",
            menuPrice: "$21.99",
          },
          {
            id: 2,
            menuName: "Sushi Combo C",
            menuDescription:
              "5 pieces of nigiri sushi (chef's choice) with either an American roll or a Hawaiian roll or a rainbow roll",
            menuPrice: "$23.99",
          },
          {
            id: 3,
            menuName: "Twol Roll Combo",
            menuDescription: "King of king roll, and an Austin roll",
            menuPrice: "$26.99",
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
          },
          {
            id: 1,
            menuName: "White Tuna Nigiri",
            menuDescription: "",
            menuPrice: "$7.00 / $9.99",
          },
          {
            id: 2,
            menuName: "Salmon/Sake Nigiri",
            menuDescription: "",
            menuPrice: "$7.00 / $9.99",
          },
          {
            id: 3,
            menuName: "Shrimp/EBI Nigiri",
            menuDescription: "",
            menuPrice: "$5.00 / $5.00",
          },
          {
            id: 4,
            menuName: "Crab/Kani Nigiri",
            menuDescription: "",
            menuPrice: "$5.00",
          },
          {
            id: 5,
            menuName: "Red Snapper/Tai Nigiri",
            menuDescription: "",
            menuPrice: "$5.00 / $5.99",
          },
          {
            id: 6,
            menuName: "Smelt Caviar/Masago Nigiri",
            menuDescription: "",
            menuPrice: "$5.00",
          },
          {
            id: 7,
            menuName: "Yellowtail/Hamachi Nigiri",
            menuDescription: "",
            menuPrice: "$6.00 / $6.99",
          },
          {
            id: 8,
            menuName: "Freshwater Eel/Unagi Nigiri",
            menuDescription: "",
            menuPrice: "$8.99 / $11.99",
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
          },
          {
            id: 1,
            menuName: "King of King Roll",
            menuDescription:
              "Tempura shrimp, cucumber, avocado, and crab on top",
            menuPrice: "$13.99",
          },
          {
            id: 2,
            menuName: "Hanara Roll",
            menuDescription:
              "Spicy crab, cucumber, avocado, and fried onion on top",
            menuPrice: "$12.99",
          },
          {
            id: 3,
            menuName: "Spicy Baked Roll",
            menuDescription:
              "Baked with California roll on spicy tuna on top with jalapeno",
            menuPrice: "$14.99",
          },
          {
            id: 4,
            menuName: "Spicy Dragon Roll",
            menuDescription:
              "Tempura shrimp, cucumber, spicy tuna on top with jalapeno",
            menuPrice: "$14.99",
          },
          {
            id: 5,
            menuName: "Arboretum Roll",
            menuDescription: "Cucumber, carrot, avocado, and crab on top",
            menuPrice: "$12.99",
          },
          {
            id: 6,
            menuName: "Hallelujah Roll",
            menuDescription:
              "Spicy tuna, avocado, cucumber, burdock root with Salmon on top",
            menuPrice: "$13.99",
          },
          {
            id: 7,
            menuName: "Spicy Yummy Roll",
            menuDescription:
              "Crab, cucumber, burdock root, pickled radis/avocado spicy tuna, jalapeno on top",
            menuPrice: "$14.99",
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
          },
          {
            id: 1,
            menuName: "Shrimp Tempura Roll",
            menuDescription: "Tempura shrimp, crab, avocado, and cucumber",
            menuPrice: "$12.99",
          },
          {
            id: 2,
            menuName: "Mexican Roll",
            menuDescription:
              "Salmon, avocado, jalapeno, cream cheese, and crab",
            menuPrice: "$13.99",
          },
          {
            id: 3,
            menuName: "Samurai Roll",
            menuDescription:
              "Salmon, sweet potato, cream cheese, crab, avocado, and spicy tuna",
            menuPrice: "$13.99",
          },
          {
            id: 4,
            menuName: "Spider Roll",
            menuDescription: "Soft shell crab, aocado, crab",
            menuPrice: "$15.99",
          },
          {
            id: 5,
            menuName: "Austin Roll",
            menuDescription:
              "Deep fried with crab, avocado, cream cheese, and jalapeno",
            menuPrice: "$12.99",
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
          },
          {
            id: 1,
            menuName: "Salmon Poke Bowl",
            menuDescription:
              "Lettuce, red cabbage, carrot, cucumber, avocado, masago, and salmon",
            menuPrice: "$12.99",
          },
          {
            id: 2,
            menuName: "Combo Poke Bowl",
            menuDescription:
              "Lettuce, red cabbage, carrot, cucumber, avocado, masago, tuna, and salmon",
            menuPrice: "$13.99",
          },
          {
            id: 3,
            menuName: "Veggie Poke Bowl",
            menuDescription:
              "Lettuce, red cabbage, carrot, cucumber, avocado, masago",
            menuPrice: "$10.99",
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
          },
          {
            id: 1,
            menuName: "Kappa Roll",
            menuDescription: "Cucumber",
            menuPrice: "$6.99",
          },
          {
            id: 2,
            menuName: "Veggie Roll",
            menuDescription: "",
            menuPrice: "$8.99",
          },
          {
            id: 3,
            menuName: "Tofu Avocado Roll",
            menuDescription: "",
            menuPrice: "$8.99",
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
          },
          {
            id: 1,
            menuName: "Crazy Fish Roll",
            menuDescription: "Cucumber, spicy tuna, avocado, and shrimp on top",
            menuPrice: "$12.99",
          },
          {
            id: 2,
            menuName: "Hawaiian Roll",
            menuDescription: "Spicy tuna, cucumber, and tuna on top",
            menuPrice: "$12.99",
          },
          {
            id: 3,
            menuName: "Rainbow Roll",
            menuDescription: "California roll with 5 pieces of fish on top",
            menuPrice: "$12.99",
          },
          {
            id: 4,
            menuName: "Sunshine Roll",
            menuDescription: "Avocado, cucumber, and 5 pieces of fish",
            menuPrice: "$12.99",
          },
          {
            id: 5,
            menuName: "Tiger Roll",
            menuDescription: "Shrimp tempura, cucumber, and spicy tuna on top",
            menuPrice: "$13.99",
          },
          {
            id: 6,
            menuName: "Caterpillar Roll",
            menuDescription: "Eel, crab, cucumber, and avacado on top",
            menuPrice: "$14.99",
          },
          {
            id: 7,
            menuName: "Hot Rainbow Roll",
            menuDescription:
              "Spicy tuna, cucumber, and 5 pieces of fish on top",
            menuPrice: "$13.99",
          },
          {
            id: 8,
            menuName: "Snow Roll",
            menuDescription: "Spicy salmon, cucumber, and white tuna on top",
            menuPrice: "$13.99",
          },
          {
            id: 9,
            menuName: "Stupid Fish Roll",
            menuDescription: "Crab, cucumber, avocado, and yellowtail on top",
            menuPrice: "$14.99",
          },
          {
            id: 10,
            menuName: "Drunk Fish Roll",
            menuDescription: "Avocado, cucumber, crab, and eel on top",
            menuPrice: "$14.99",
          },
          {
            id: 11,
            menuName: "Salmon Skin Roll",
            menuDescription:
              "Spicy tuna, cucumber, and 5 pieces of fish on top",
            menuPrice: "$11.99",
          },
          {
            id: 12,
            menuName: "Green Dragon Roll",
            menuDescription: "Spicy tuna, cucumber, and avocado on top",
            menuPrice: "$12.99",
          },
          {
            id: 13,
            menuName: "California Roll",
            menuDescription: "",
            menuPrice: "$7.99",
          },
          {
            id: 14,
            menuName: "Spicy California Roll",
            menuDescription: "",
            menuPrice: "$8.99",
          },
          {
            id: 15,
            menuName: "Tuna Roll",
            menuDescription: "",
            menuPrice: "$8.99",
          },
          {
            id: 16,
            menuName: "Spicy Tuna Roll",
            menuDescription: "Avocado, and cucumber",
            menuPrice: "$10.99",
          },
          {
            id: 17,
            menuName: "Salmon Roll",
            menuDescription: "Avocado, cucumber",
            menuPrice: "$10.99",
          },
          {
            id: 18,
            menuName: "Philadelphia Roll",
            menuDescription: "",
            menuPrice: "$11.99",
          },
          {
            id: 19,
            menuName: "Golden California Roll",
            menuDescription: "",
            menuPrice: "$10.99",
          },
          {
            id: 20,
            menuName: "Eel Roll",
            menuDescription: "",
            menuPrice: "$12.99",
          },
          {
            id: 21,
            menuName: "Crunch Roll",
            menuDescription: "Shrimp tempura, cucumber, and crunch on top",
            menuPrice: "$12.99",
          },
        ],
      },
    ],
  },
];

export { menuList };