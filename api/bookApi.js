import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.NEXT_PUBLIC_API_URL + "/books";

export function getBooks() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function saveBook(book) {
    return fetch(baseUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(book)
    }).then(handleResponse).catch(handleError);
}