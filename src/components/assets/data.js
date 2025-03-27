export async function fetchProducts(pickRandom = false) {
  const cachedKey = "cachedProducts";
  const cachedData = localStorage.getItem(cachedKey);

  if (cachedData) {
    const data = JSON.parse(cachedData);
    if (pickRandom) {
      return getRandomProduct(data);
    }
    return data;
  }

  try {
    const response = await fetch(`https://dummyjson.com/products?limit=20`);
    const result = await response.json();
    if (result && result.products && result.products.length) {
      localStorage.setItem(cachedKey, JSON.stringify(result.products));
      if (pickRandom) {
        return getRandomProduct(result.products);
      }
      return result.products;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

function getRandomProduct(data) {
  const randomIndex = Math.ceil(Math.random() * data.length);
  return data[randomIndex];
}
