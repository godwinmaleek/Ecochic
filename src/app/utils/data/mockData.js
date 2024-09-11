const products = [
  {
    id: "72c54746-698e-4666-a227-3d0f83cfcf29",
    img: "/img/menEcoChic/1.jpg",
    name: "the yezid overshirt",
    description:
      "Constructed from premium quality, lightweight fabric, the Yezid Overshirt offers unparalleled comfort without compromising on durability. Its tailored fit provides a sleek silhouette, making it a wardrobe essential for any discerning individual.",
    rating: 5,
    review: "Love this product, very fashionable!",
    price: 500,
    views: 210,
    collection: "men",
    category: "jackets",
    date_added: "2-1-2024",
  },
  {
    id: "f06775aa-36b6-48ab-a5ea-38ec23663eb7",
    img: "/img/menEcoChic/2.jpg",
    name: "the qowiy trench coat",
    description:
      "Elegance meets functionality in the Qowiy Trench Coat. Crafted with water-resistant fabric and a timeless design, this coat effortlessly transitions from boardroom to evening soirée, embodying sophistication in every stitch.",
    rating: 5,
    review: "Love this product, very fashionable!",
    price: 480,
    views: 150,
    collection: "men",
    category: "jackets",
    date_added: "2-3-2024",
  },
  {
    id: "8770ab52-a20f-4cb4-b63e-5d8f8c0c2910",
    img: "/img/menEcoChic/3.jpg",
    name: "just another shirt",
    description:
      "Don't be fooled by its humble name - this shirt is anything but ordinary. With its innovative blend of eco-friendly materials and cutting-edge design, it's set to revolutionize your wardrobe and turn heads wherever you go.",
    rating: 5,
    review: "Love this product, very fashionable!",
    price: 490,
    views: 230,
    collection: "men",
    category: "jackets",
    date_added: "1-31-2024",
  },
  {
    id: "4d8c7e84-0f91-4576-b3af-f5d2ab860449",
    img: "/img/menEcoChic/4.jpg",
    name: "random shirt?",
    description:
      "Embrace the unexpected with our 'Random Shirt'. Each piece is uniquely patterned, ensuring no two are alike. It's a conversation starter, a style statement, and a testament to individuality all rolled into one.",
    rating: 3,
    review: "Love this product, very fashionable!",
    price: 460,
    views: 180,
    collection: "men",
    category: "jackets",
    date_added: "2-2-2024",
  },
  {
    id: "7b4ca9e1-1f44-4761-a6dd-b9620275c00a",
    img: "/img/menEcoChic/5.jpg",
    name: "i really don't know",
    description:
      "When indecision meets inspiration, you get this enigmatic piece. Its fluid design adapts to your mood, making it the perfect choice for those days when you just can't decide. Let your clothes do the talking!",
    rating: 4,
    review: "Love this product, very fashionable!",
    price: 470,
    views: 190,
    collection: "men",
    category: "jackets",
    date_added: "2-4-2024",
  },
  {
    id: "a2097ed3-e110-478f-a1a3-a4bb20bc758d",
    img: "/img/womenEcoChic/1.jpg",
    name: "the mahabubah blouse",
    description:
      "The Mahabubah Blouse is a symphony of grace and comfort. Its intricate embroidery tells a story of artisanal craftsmanship, while the breathable fabric ensures you stay cool and collected throughout the day.",
    rating: 5,
    review: "Love this product, very fashionable!",
    price: 500,
    views: 250,
    collection: "women",
    category: "jackets",
    date_added: "2-5-2024",
  },
  {
    id: "c15ea6de-8681-4a33-afbc-eed0a1155504",
    img: "/img/womenEcoChic/2.jpg",
    name: "transparent gown",
    description:
      "Dare to bare with our Transparent Gown. This avant-garde piece plays with perception, combining sheer panels with strategic opacity. It's not just a dress; it's a statement of confidence and haute couture.",
    rating: 4,
    review: "Love this product, very fashionable!",
    price: 480,
    views: 240,
    collection: "women",
    category: "jackets",
    date_added: "2-2-2024",
  },
  {
    id: "97b7fac1-5134-471e-99f2-32e9774f6603",
    img: "/img/womenEcoChic/3.jpg",
    name: "just another garment",
    description:
      "In a world of excess, sometimes simplicity speaks volumes. This 'Just Another Garment' is a minimalist's dream, offering versatility and style in equal measure. It's not trying to be special - and that's what makes it extraordinary.",
    rating: 5,
    review: "Love this product, very fashionable!",
    price: 490,
    views: 260,
    collection: "women",
    category: "jackets",
    date_added: "2-6-2024",
  },
  {
    id: "4bdac8f8-651a-4af3-8831-fa7e999dd386",
    img: "/img/womenEcoChic/4.jpg",
    name: "the tolu dress trouser?",
    description:
      "Is it a dress? Is it a trouser? It's both! The Tolu Dress Trouser defies categorization, offering the elegance of a dress with the practicality of trousers. Perfect for those who refuse to be boxed in by fashion norms.",
    rating: 3,
    review: "Love this product, very fashionable!",
    price: 460,
    views: 220,
    collection: "women",
    category: "jackets",
    date_added: "2-4-2024",
  },
  {
    id: "566aed91-2f54-4de9-9339-94074ba89f8c",
    img: "/img/womenEcoChic/5.jpg",
    name: "hmmmmmmm",
    description:
      "When words fail, style prevails. This enigmatically named piece invites contemplation and admiration in equal measure. Its unique design will leave onlookers saying 'Hmmmmmmm' in appreciation.",
    rating: 4,
    review: "Love this product, very fashionable!",
    price: 470,
    views: 230,
    collection: "women",
    category: "jackets",
    date_added: "2-7-2024",
  },
];

/**
 * Returns an array of products based on the provided query.
 *
 * @param {Object} query - An object containing the query parameters.
 * @param {string|string[]} query.collection - The collection(s) to filter by.
 * @param {string|string[]} query.category - The category(s) to filter by.
 *
 * @returns {Object[]} An array of products that match the query.
 *
 * @example
   Get all products
 * const products = getProducts();
 *
  Get all products from the "men" collection
 * const menProducts = getProducts({ collection: "men" });
 *
   Get all products from the "men" collection and "jackets" category
 * const menJackets = getProducts({ collection: "men", category: "jackets" });
 *
   Get all products from the "men" and "women" collections
 * const menAndWomenProducts = getProducts({ collection: ["men", "women"] });
 *
   Get all products from the "jackets" and "shirts" categories
 * const jacketsAndShirts = getProducts({ category: ["jackets", "shirts"] });
 */
export function getProducts(query = {}) {
  const { collection = [], category = [], id = "" } = query;

  // as set of valid collection and categories
  const validCollections = new Set(["men", "women", "bags", "jewelry"]);
  const validCategories = new Set(["shirts", "jackets", "trousers", "shoes"]);

  // convert collection and category to array if not an array
  const collectionsArray = Array.isArray(collection)
    ? collection
    : [collection];
  const categoriesArray = Array.isArray(category) ? category : [category];

  const isValidCollections = collectionsArray.every((col) =>
    validCollections.has(col)
  );
  const isValidCategories = categoriesArray.every((cat) =>
    validCategories.has(cat)
  );

  if (id) {
    return products.find((product) => product.id === id);
  } else if (isValidCollections && isValidCategories) {
    return products.filter(
      (product) =>
        collectionsArray.every((col) => product.collection == col) &&
        categoriesArray.every((cat) => product.category == cat)
    );
  } else if (isValidCollections) {
    return products.filter((product) =>
      collectionsArray.every((col) => product.collection == col)
    );
  } else if (isValidCategories) {
    return products.filter((product) =>
      categoriesArray.every((cat) => product.category == cat)
    );
  } else {
    return products;
  }
}
