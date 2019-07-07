export async function getProductsByCategory(name) {
  return fetch("/api/products/category/" + name, {
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    }),
    method: "GET"
  })
    .then(data => data.json())
    .catch(error => console.log(error));
}
