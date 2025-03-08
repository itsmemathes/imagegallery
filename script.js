// Function to filter categories
function filterCategory(category) {
    const items = document.querySelectorAll('.photo-item');
    
    // Show all if 'all' category is selected
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        // Hide items that don't belong to the selected category
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

// Initialize by showing all photos
document.addEventListener('DOMContentLoaded', function () {
    filterCategory('all');
});
let currentIndex = 0; // Keep track of the current image index

const images = document.querySelectorAll('.photo-item img'); // Get all images
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
    // Hide all images
    images.forEach(img => {
        img.parentElement.style.display = 'none';
    });

    // Show the current image
    images[index].parentElement.style.display = 'block';
}

// Show the first image on page load
showImage(currentIndex);

// Next Button Functionality
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    showImage(currentIndex);
});

// Previous Button Functionality
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image
    showImage(currentIndex);
});
