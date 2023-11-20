// Add imports above this line
import { galleryItems } from './gallery-items';
// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector('.gallery');
const itemsArray =[];

galleryItems.forEach(element => {
	const galleryLink = document.createElement('a');
	galleryLink.className = 'gallery__link';
	galleryLink.href = element.original;

	const galleryImage = document.createElement('img');
	galleryImage.className = 'gallery__image';
	galleryImage.src = element.preview;
	galleryImage.setAttribute('title', element.description);
	galleryImage.alt = element.description;

	galleryLink.append(galleryImage);
	itemsArray.push(galleryLink);
})
gallery.append(...itemsArray);

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})
