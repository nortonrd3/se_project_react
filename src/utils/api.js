const baseUrl = "http://localhost:3001";

function processResponse(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
}

function getItems() {
  return fetch(`${baseUrl}/items`)
    .then(processResponse)
    .then((data) => data.data);
}

function addClothingItem(item) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: item.name,
      imageUrl: item.imageUrl,
      weather: item.weather,
    }),
  })
    .then(processResponse)
    .then((data) => data.data);
}

function deleteClothingItem(id) {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(processResponse);
}

function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(processResponse)
    .then((data) => data.data);
}

function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(processResponse)
    .then((data) => data.data);
}

export {
  getItems,
  addClothingItem,
  deleteClothingItem,
  processResponse,
  addCardLike,
  removeCardLike,
};
