const herbs= [
    {
      name: "Basil",
      scientific_name: "Ocimum basilicum",
      description: "Basil is a culinary herb of the family Lamiaceae. It is native to tropical regions from central Africa to Southeast Asia. Basil is widely used in cuisines around the world.",
      growing_conditions: {
        temperature: "Warm",
        soil_type: "Well-drained, fertile soil",
        sunlight: "Full sun"
      },
      image: {
        filename: "herbsimage",
        url: "https://media.istockphoto.com/id/970956876/photo/chia-seeds-in-wooden-spoon-and-basil-leaf-on-wooden-background-super-food-healthy-eating.jpg?s=612x612&w=0&k=20&c=buxMvtv18AAIK3dCtw_4Ci1Dw5likTdprVapYNSQQMU=",
         },
      price: 205,
      cp:100,
    },
    {
      name: "Mint",
      scientific_name: "Mentha",
      description: "Mint is a genus of plants in the family Lamiaceae. They are aromatic herbs with square stems and opposite leaves. Mint is widely used for its culinary, medicinal, and aromatic properties.",
      growing_conditions: {
        temperature: "Cool to warm",
        soil_type: "Moist, well-drained soil",
        sunlight: "Partial shade to full sun"
      },
      image: {
        filename: "herbsimage",
        url: "https://media.istockphoto.com/id/478775140/photo/fresh-mint-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=6Prm-8OtMLpP3avlUnYlCU_oY5Jyq9ls8Rr4grdSNCo=",
         },
      price: 300,
      cp:100,
    },
    {
      name: "Rosemary",
      scientific_name: "Rosmarinus officinalis",
      description: "Rosemary is a woody, perennial herb with fragrant, evergreen, needle-like leaves. It is native to the Mediterranean region. Rosemary is commonly used in cooking, as well as for medicinal and aromatic purposes.",
      growing_conditions: {
        temperature: "Warm",
        soil_type: "Well-drained, sandy soil",
        sunlight: "Full sun"
      },
      image: {
        filename: "herbsimage",
        url: "https://media.istockphoto.com/id/1291644676/photo/cutting-fresh-rosemary.jpg?s=612x612&w=0&k=20&c=fuASXzByuAMiQK4w92q7mYsmGZ1eSSQBqDJMqGpJ_5A=",
         },
      price: 200,
      cp:100,
    },

    {
      name: "Lavender",
      scientific_name: "Lavandula",
      description: "Lavender is a genus of plants in the mint family, Lamiaceae. It is known for its aromatic and medicinal properties. Lavender is widely used in aromatherapy, cosmetics, and culinary applications.",
      growing_conditions: {
        temperature: "Warm to hot",
        soil_type: "Well-drained, alkaline soil",
        sunlight: "Full sun"
      },
      image: {
        filename: "herbsimage",
        url: "https://media.istockphoto.com/id/479844966/photo/flower-pot-on-the-windowsill.jpg?s=612x612&w=0&k=20&c=5JKC9Y6bLidUEFqeC8f0BS-A9JAgooaNfp72BHvCNm8=",
         },
      price: 350,
      cp:100,
    },
    {
      name: "Thyme",
      scientific_name: "Thymus vulgaris",
      description: "Thyme is a herb in the mint family, Lamiaceae. It is native to southern Europe, and it is commonly used in cooking and traditional medicine. Thyme has a strong flavor and aroma.",
      growing_conditions: {
        temperature: "Warm",
        soil_type: "Well-drained, sandy soil",
        sunlight: "Full sun"
      },
      image: {
        filename: "herbsimage",
        url: "https://media.istockphoto.com/id/172221928/photo/thyme.jpg?s=612x612&w=0&k=20&c=4pQTo1W2lnHpDL9SS7-OxuwDQoIFTBxvQsJx9nnsmL0=",
         },
      price: 280,
      cp:100,
    }
  ];

  module.exports = { data: herbs };