export async function fetchCategory() {
  const cachedKey = "cachedCategory";
  const cachedData = localStorage.getItem(cachedKey);

  if (cachedData) {
    const data = JSON.parse(cachedData);
    return data;
  }
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    const result = await response.json();

    const expandedItems = await Promise.all(
      result.map(async (item) => {
        const nestedResponse = await fetch(item.url);
        const nestedData = await nestedResponse.json();
        return { ...item, image: nestedData.products[0].thumbnail };
      })
    );

    if (expandedItems && expandedItems.length) {
      localStorage.setItem(cachedKey, JSON.stringify(expandedItems));
      return expandedItems;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getCategoryNameList() {
  const cached = localStorage.getItem("categories");

  if (cached) {
    return JSON.parse(cached);
  } else {
    const response = await fetch(
      "https://dummyjson.com/products/category-list"
    );
    const result = await response.json();
    return result;
  }
}
