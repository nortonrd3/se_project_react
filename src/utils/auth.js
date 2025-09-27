import { processResponse } from "./api";

const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.wtwrapp.csproject.org"
  : "http://localhost:3001";

export function signUp({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then(processResponse);
}

export function signIn({ email, password }) {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(processResponse);
}

export function checkToken(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(processResponse)
    .then((data) => data.data);
}

export function updateProfile({ name, avatar }, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(processResponse)
  .then((data) => data.data);
}

export default {
  signUp,
  signIn,
  updateProfile,
  checkToken,
};
