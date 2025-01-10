const baseUrl = 'http://localhost:3001';

function processResponse(res) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res.json();
}

function getItems() {
    return fetch(`${baseUrl}/items`)
        .then(processResponse);
}

function addClothingItem(item) {
    return fetch(`${baseUrl}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"name": item.name, "imageUrl": item.imageUrl, "weather": item.weather}),
    })
        .then(processResponse);
}

function deleteClothingItem(id) {
    return fetch(`${baseUrl}/items/${id}`, {
        method: 'DELETE',
    })
        .then(processResponse);
}

export {getItems, addClothingItem, deleteClothingItem};