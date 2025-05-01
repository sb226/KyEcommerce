const response = await fetch("https://dummyjson.com/products/categories");
const result = await response.json();

const expandedItems = await Promise.all(
  result.map(async (item) => {
    const nestedResponse = await fetch(item.url);
    const nestedData = await nestedResponse.json();
    return { ...item, image: nestedData.products[0].thumbnail };
  })
);

let category_data = expandedItems;

export default category_data;
