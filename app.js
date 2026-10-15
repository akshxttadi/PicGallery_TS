"use strict";
// Select DOM elements with strict type checking
const photoContainer = document.getElementById("photo-container");
const message = document.getElementById("message");
// Picsum API endpoint (loads 8 photos)
const apiUrl = "https://picsum.photos/v2/list?page=1&limit=8";
/**
 * Fetches photo array from the Picsum API
 * @returns Promise resolving to an array of PicsumPhoto objects
 */
async function fetchPhotos() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`Failed to load photos. Status: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}
/**
 * Creates an article element for a single photo card
 * @param photo The PicsumPhoto object
 * @returns The populated HTMLArticleElement
 */
function createPhotoCard(photo) {
    const card = document.createElement("article");
    card.className = "photo-card";
    const image = document.createElement("img");
    image.src = `https://picsum.photos/id/${photo.id}/400/250`;
    image.alt = `Photo by ${photo.author}`;
    image.loading = "lazy";
    const photoInfo = document.createElement("div");
    photoInfo.className = "photo-info";
    const author = document.createElement("h2");
    author.textContent = photo.author;
    const photoId = document.createElement("p");
    photoId.textContent = `Photo ID: ${photo.id}`;
    const linkWrapper = document.createElement("a");
    linkWrapper.href = photo.url;
    linkWrapper.target = "_blank";
    linkWrapper.rel = "noopener noreferrer";
    linkWrapper.className = "view-original-link";
    linkWrapper.textContent = "View on Unsplash ↗";
    photoInfo.appendChild(author);
    photoInfo.appendChild(photoId);
    photoInfo.appendChild(linkWrapper);
    card.appendChild(image);
    card.appendChild(photoInfo);
    return card;
}
/**
 * Main function to load and display photos in the gallery
 */
async function loadPhotos() {
    if (!photoContainer || !message) {
        console.error("Required DOM elements (#photo-container or #message) not found.");
        return;
    }
    try {
        message.textContent = "Loading photos from Picsum API...";
        const photos = await fetchPhotos();
        message.textContent = "";
        photoContainer.innerHTML = "";
        photos.forEach((photo) => {
            const card = createPhotoCard(photo);
            photoContainer.appendChild(card);
        });
    }
    catch (error) {
        console.error("Error loading photos:", error);
        if (error instanceof Error) {
            message.textContent = `Could not load photos: ${error.message}. Please check your connection and refresh.`;
        }
        else {
            message.textContent = "Could not load photos. Please check your internet connection and refresh the page.";
        }
    }
}
// Initialise gallery on page load
loadPhotos();
//# sourceMappingURL=app.js.map