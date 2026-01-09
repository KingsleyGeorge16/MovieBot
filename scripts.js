// // Movie Data
// const movies = {
//     newReleases: [
//         {
//             id: 1,
//             title: "Fast and Furious X",
//             image: "./img/f-1.jpeg",
//             rating: 8.5,
//             year: 2023,
//             duration: "2h 21m",
//             genre: "Action",
//             desc: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes."
//         },
//         {
//             id: 2,
//             title: "Live Die Repeat",
//             image: "./img/rel-1.jpeg",
//             rating: 7.9,
//             year: 2024,
//             duration: "1h 53m",
//             genre: "Sci-Fi",
//             desc: "A soldier fighting aliens gets to relive the same day over and over again."
//         },
//         {
//             id: 3,
//             title: "Elemental",
//             image: "./img/rel-2.jpeg",
//             rating: 8.1,
//             year: 2024,
//             duration: "1h 47m",
//             genre: "Animation",
//             desc: "In a city where fire, water, land, and air residents live together."
//         },
//         {
//             id: 4,
//             title: "The Marine",
//             image: "./img/rel-3.jpeg",
//             rating: 6.8,
//             year: 2024,
//             duration: "1h 45m",
//             genre: "Action",
//             desc: "A former Marine must use all his skills to save his kidnapped wife."
//         },
//         {
//             id: 5,
//             title: "Soul",
//             image: "./img/rel-4.jpeg",
//             rating: 8.7,
//             year: 2024,
//             duration: "1h 40m",
//             genre: "Animation",
//             desc: "A musician who has lost his passion for music is transported out of his body."
//         },
//         {
//             id: 6,
//             title: "John Wick",
//             image: "./img/rel-5.png",
//             rating: 9.2,
//             year: 2024,
//             duration: "2h 30m",
//             genre: "Action",
//             desc: "Legendary assassin John Wick must confront his past one last time."
//         },
//         {
//             id: 7,
//             title: "Mad Max",
//             image: "./img/rel-6.png",
//             rating: 8.5,
//             year: 2024,
//             duration: "2h 15m",
//             genre: "Action",
//             desc: "In a post-apocalyptic wasteland, a rebel rises up against a tyrannical ruler."
//         }
//     ],
//     trending: [
//         {
//             id: 8,
//             title: "Star Wars",
//             image: "./img/rel-8.png",
//             rating: 8.7,
//             year: 2024,
//             duration: "2h 28m",
//             genre: "Sci-Fi",
//             desc: "The saga continues in a galaxy far, far away."
//         },
//         {
//             id: 9,
//             title: "Scream",
//             image: "./img/rel-9.webp",
//             rating: 7.5,
//             year: 2024,
//             duration: "1h 54m",
//             genre: "Horror",
//             desc: "Ghostface returns to terrorize a new group of teenagers."
//         },
//         {
//             id: 10,
//             title: "Shrek",
//             image: "./img/rel-10.png",
//             rating: 8.9,
//             year: 2024,
//             duration: "1h 35m",
//             genre: "Animation",
//             desc: "The beloved ogre returns for another adventure in Far Far Away."
//         },
//         {
//             id: 11,
//             title: "Deadpool & Wolverine",
//             image: "./img/rel-12.png",
//             rating: 9.1,
//             year: 2024,
//             duration: "2h 10m",
//             genre: "Action",
//             desc: "The merc with a mouth teams up with the mutant with claws."
//         },
//         {
//             id: 12,
//             title: "X-Men",
//             image: "./img/rel-13.jpg",
//             rating: 8.3,
//             year: 2024,
//             duration: "2h 20m",
//             genre: "Action",
//             desc: "Mutants must unite to face their greatest threat yet."
//         },
//         {
//             id: 13,
//             title: "Oppenheimer",
//             image: "./img/rel-14.jpg",
//             rating: 8.8,
//             year: 2024,
//             duration: "3h 00m",
//             genre: "Biography",
//             desc: "The story of J. Robert Oppenheimer and the creation of the atomic bomb."
//         }
//     ],
//     popular: [
//         {
//             id: 14,
//             title: "The Maze Runner",
//             image: "./img/f-2.png",
//             rating: 7.2,
//             year: 2014,
//             duration: "1h 53m",
//             genre: "Sci-Fi",
//             desc: "Thomas is deposited in a community of boys after his memory is erased."
//         },
//         {
//             id: 15,
//             title: "Avatar: Way of Water",
//             image: "./img/rel-18.jpg",
//             rating: 8.6,
//             year: 2023,
//             duration: "3h 12m",
//             genre: "Sci-Fi",
//             desc: "Jake Sully and his family explore the reefs of Pandora."
//         },
//         {
//             id: 16,
//             title: "Black Widow",
//             image: "./img/rel-19.jpg",
//             rating: 7.8,
//             year: 2021,
//             duration: "2h 14m",
//             genre: "Action",
//             desc: "Natasha Romanoff confronts the darker parts of her ledger."
//         },
//         {
//             id: 17,
//             title: "Tomb Raider",
//             image: "./img/rel-15.jpg",
//             rating: 7.1,
//             year: 2023,
//             duration: "2h 05m",
//             genre: "Adventure",
//             desc: "Lara Croft's latest adventure takes her to unexplored tombs."
//         }
//     ]
// };

// // DOM Elements
// const themeToggle = document.querySelector('.theme-toggle');
// const navbar = document.querySelector('.navbar');
// const searchBtn = document.querySelector('.search-btn');
// const searchInput = document.querySelector('.search-input');
// const profile = document.querySelector('.profile');
// const profileDropdown = document.querySelector('.profile-dropdown');
// const modal = document.querySelector('#videoModal');
// const modalClose = document.querySelector('.modal-close');
// const videoPlayer = document.querySelector('#moviePlayer');
// const modalTitle = document.querySelector('#modalTitle');
// const modalDesc = document.querySelector('#modalDesc');
// const carouselBtns = document.querySelectorAll('.carousel-btn');
// const menuToggle = document.querySelector('.menu-toggle');
// const menuContainer = document.querySelector('.menu-container');

// // Initialize
// document.addEventListener('DOMContentLoaded', () => {
//     initMovies();
//     initEventListeners();
//     initScrollEffects();
// });

// // Initialize Movie Lists
// function initMovies() {
//     // New Releases
//     const newReleasesContainer = document.querySelector('#new-releases');
//     movies.newReleases.forEach(movie => {
//         newReleasesContainer.appendChild(createMovieCard(movie));
//     });

//     // Trending
//     const trendingContainer = document.querySelector('#trending');
//     movies.trending.forEach(movie => {
//         trendingContainer.appendChild(createMovieCard(movie));
//     });

//     // Popular
//     const popularContainer = document.querySelector('#popular');
//     movies.popular.forEach(movie => {
//         popularContainer.appendChild(createMovieCard(movie));
//     });

//     // Coming Soon (duplicate new releases for demo)
//     const comingSoonContainer = document.querySelector('#coming-soon');
//     movies.newReleases.slice(0, 6).forEach(movie => {
//         comingSoonContainer.appendChild(createMovieCard(movie));
//     });
// }

// // Create Movie Card
// function createMovieCard(movie) {
//     const card = document.createElement('div');
//     card.className = 'movie-card';
//     card.dataset.id = movie.id;
    
//     card.innerHTML = `
//         <div class="movie-poster">
//             <img src="${movie.image}" alt="${movie.title}" loading="lazy">
//         </div>
//         <div class="movie-info">
//             <h3 class="movie-title">${movie.title}</h3>
//             <p class="movie-desc">${movie.desc}</p>
//             <div class="movie-meta">
//                 <span class="movie-rating"><i class="fas fa-star"></i> ${movie.rating}</span>
//                 <span class="movie-year">${movie.year}</span>
//             </div>
//             <button class="watch-btn" onclick="playMovie(${movie.id})">
//                 <i class="fas fa-play"></i> Watch Now
//             </button>
//         </div>
//     `;
    
//     return card;
// }

// // Initialize Event Listeners
// function initEventListeners() {
//     // Theme Toggle
//     themeToggle.addEventListener('click', () => {
//         document.body.classList.toggle('light-mode');
//     });

//     // Search Toggle
//     searchBtn.addEventListener('click', () => {
//         searchInput.classList.toggle('active');
//         if (searchInput.classList.contains('active')) {
//             searchInput.focus();
//         }
//     });

//     // Profile Dropdown
//     profile.addEventListener('click', () => {
//         profileDropdown.classList.toggle('show');
//     });

//     // Close dropdown when clicking outside
//     document.addEventListener('click', (e) => {
//         if (!profile.contains(e.target)) {
//             profileDropdown.classList.remove('show');
//         }
//     });

//     // Modal Close
//     modalClose.addEventListener('click', () => {
//         modal.classList.remove('show');
//         videoPlayer.pause();
//     });

//     // Close modal when clicking outside
//     modal.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             modal.classList.remove('show');
//             videoPlayer.pause();
//         }
//     });

//     // Escape key to close modal
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && modal.classList.contains('show')) {
//             modal.classList.remove('show');
//             videoPlayer.pause();
//         }
//     });

//     // Carousel Navigation
//     carouselBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const direction = btn.classList.contains('next') ? 1 : -1;
//             const movieList = btn.closest('.movie-carousel').querySelector('.movie-list');
//             const scrollAmount = 300;
//             movieList.scrollLeft += direction * scrollAmount;
//         });
//     });

//     // Mobile Menu Toggle
//     menuToggle.addEventListener('click', () => {
//         menuContainer.style.display = menuContainer.style.display === 'block' ? 'none' : 'block';
//         menuContainer.style.animation = 'slideUp 0.3s ease';
//     });

//     // Search Functionality
//     searchInput.addEventListener('input', (e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         const movieCards = document.querySelectorAll('.movie-card');
        
//         movieCards.forEach(card => {
//             const title = card.querySelector('.movie-title').textContent.toLowerCase();
//             const desc = card.querySelector('.movie-desc').textContent.toLowerCase();
            
//             if (title.includes(searchTerm) || desc.includes(searchTerm)) {
//                 card.style.display = 'block';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
//     });

//     // Watch Buttons
//     document.addEventListener('click', (e) => {
//         if (e.target.closest('.watch-btn')) {
//             const card = e.target.closest('.movie-card');
//             const movieId = card.dataset.id;
//             playMovie(movieId);
//         }
//     });
// }

// // Initialize Scroll Effects
// function initScrollEffects() {
//     // Navbar scroll effect
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 100) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//     });

//     // Lazy loading images
//     const lazyImages = document.querySelectorAll('.movie-poster img');
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.classList.add('loaded');
//                 observer.unobserve(img);
//             }
//         });
//     });

//     lazyImages.forEach(img => {
//         if (img.dataset.src) {
//             imageObserver.observe(img);
//         }
//     });
// }

// // Play Movie Function
// function playMovie(movieId) {
//     const movie = getAllMovies().find(m => m.id == movieId);
//     if (!movie) return;

//     modalTitle.textContent = movie.title;
//     modalDesc.textContent = movie.desc;
    
//     // For demo purposes, use a placeholder video
//     videoPlayer.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    
//     modal.classList.add('show');
//     videoPlayer.play();
// }

// // Get all movies
// function getAllMovies() {
//     return [...movies.newReleases, ...movies.trending, ...movies.popular];
// }

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Add loading animation
// function showLoading() {
//     const loading = document.createElement('div');
//     loading.className = 'loading';
//     loading.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
//     document.body.appendChild(loading);
    
//     setTimeout(() => {
//         loading.remove();
//     }, 1000);
// }

// // Add to List functionality
// function addToList(movieId) {
//     const movie = getAllMovies().find(m => m.id == movieId);
//     if (!movie) return;
    
//     // Get current list from localStorage
//     let myList = JSON.parse(localStorage.getItem('myList')) || [];
    
//     // Check if movie is already in list
//     if (!myList.some(m => m.id === movieId)) {
//         myList.push(movie);
//         localStorage.setItem('myList', JSON.stringify(myList));
        
//         // Show notification
//         showNotification(`Added "${movie.title}" to your list!`);
//     } else {
//         showNotification(`"${movie.title}" is already in your list!`);
//     }
// }

// // Show notification
// function showNotification(message) {
//     const notification = document.createElement('div');
//     notification.className = 'notification';
//     notification.textContent = message;
//     document.body.appendChild(notification);
    
//     // Add styles
//     notification.style.cssText = `
//         position: fixed;
//         top: 20px;
//         right: 20px;
//         background: var(--primary);
//         color: white;
//         padding: 1rem 2rem;
//         border-radius: var(--radius);
//         box-shadow: var(--shadow);
//         z-index: 1000;
//         animation: slideUp 0.3s ease;
//     `;
    
//     setTimeout(() => {
//         notification.style.animation = 'fadeOut 0.3s ease';
//         setTimeout(() => notification.remove(), 300);
//     }, 3000);
// }


// Add these functions to your existing script.js file

// Mobile Menu Elements

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item a');
const mobileSearchBtn = document.querySelector('.mobile-search-btn');
const mobileSearchInput = document.querySelector('.mobile-search-input');

// Initialize mobile menu event listeners
function initMobileMenu() {
    // Toggle mobile menu
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking on menu items
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            closeMobileMenu();
            // Update active state
            updateActiveMenuItem(item);
        });
    });
    
    // Mobile search functionality
    mobileSearchBtn.addEventListener('click', () => {
        const searchTerm = mobileSearchInput.value.trim();
        if (searchTerm) {
            performSearch(searchTerm);
            closeMobileMenu();
            mobileSearchInput.value = '';
        }
    });
    
    mobileSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = mobileSearchInput.value.trim();
            if (searchTerm) {
                performSearch(searchTerm);
                closeMobileMenu();
                mobileSearchInput.value = '';
            }
        }
    });
    
    // Close menu with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Update hamburger icon
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Close Mobile Menu
function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
    
    // Reset hamburger icon
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

// Update active menu item
function updateActiveMenuItem(clickedItem) {
    // Remove active class from all menu items
    mobileMenuItems.forEach(item => {
        item.parentElement.classList.remove('active');
    });
    
    // Add active class to clicked item
    clickedItem.parentElement.classList.add('active');
    
    // Also update desktop menu items
    const desktopMenuItems = document.querySelectorAll('.menu-list-item a');
    desktopMenuItems.forEach(item => {
        item.parentElement.classList.remove('active');
        if (item.textContent.includes(clickedItem.textContent.trim())) {
            item.parentElement.classList.add('active');
        }
    });
}

// Mobile search function
function performSearch(searchTerm) {
    const movieCards = document.querySelectorAll('.movie-card');
    let foundResults = false;
    
    movieCards.forEach(card => {
        const title = card.querySelector('.movie-title').textContent.toLowerCase();
        const desc = card.querySelector('.movie-desc').textContent.toLowerCase();
        
        if (title.includes(searchTerm.toLowerCase()) || desc.includes(searchTerm.toLowerCase())) {
            card.style.display = 'block';
            foundResults = true;
            
            // Scroll to the first result
            if (!foundResults) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show notification if no results found
    if (!foundResults) {
        showNotification(`No results found for "${searchTerm}"`);
    } else {
        showNotification(`Search results for "${searchTerm}"`);
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // ... your existing initialization code ...
    
    // Add this line to initialize mobile menu
    initMobileMenu();
});

// Close mobile menu on window resize (if resizing to desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const searchBtn = document.querySelector('.search-btn');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-input');
    const searchClose = document.querySelector('.search-close');
    const profileToggle = document.querySelector('.profile');
    const profileDropdown = document.querySelector('.profile-dropdown');
    
    // Flag to track if we're clicking inside search box
    let isClickingInsideSearch = false;
    
    // 1. SEARCH FUNCTIONALITY
    // Toggle search box when clicking search button
    searchBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // If search box is already open, just focus on input
        if (searchBox.classList.contains('active')) {
            searchInput.focus();
        } else {
            // Open search box
            searchBox.classList.add('active');
            // Close profile dropdown if open
            profileDropdown.classList.remove('active');
            profileToggle.classList.remove('active');
            // Focus on input after a small delay
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        }
    });
    
    // Close search box when clicking X
    searchClose.addEventListener('click', function(e) {
        e.stopPropagation();
        searchBox.classList.remove('active');
        searchInput.value = '';
        // Show all movies again
        showAllMovies();
    });
    
    // Track clicks inside search box
    searchBox.addEventListener('mousedown', function() {
        isClickingInsideSearch = true;
    });
    
    // 2. PROFILE DROPDOWN FUNCTIONALITY
    // Toggle profile dropdown
    profileToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Toggle dropdown
        profileDropdown.classList.toggle('active');
        profileToggle.classList.toggle('active');
        
        // Close search box if open
        if (searchBox.classList.contains('active')) {
            searchBox.classList.remove('active');
            searchInput.value = '';
            showAllMovies();
        }
    });
    
    // Close profile dropdown when clicking on a link
    profileDropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            profileDropdown.classList.remove('active');
            profileToggle.classList.remove('active');
        });
    });
    
    // 3. CLICK OUTSIDE FUNCTIONALITY
    document.addEventListener('click', function(e) {
        // Reset the flag
        isClickingInsideSearch = false;
        
        // Check if click is inside search elements
        const isClickInSearch = searchBox.contains(e.target) || searchBtn.contains(e.target);
        
        // Check if click is inside profile elements
        const isClickInProfile = profileDropdown.contains(e.target) || profileToggle.contains(e.target);
        
        // Close search box if clicking outside
        if (!isClickInSearch && searchBox.classList.contains('active')) {
            // Small delay to allow clicking on search results
            setTimeout(() => {
                if (!isClickingInsideSearch) {
                    searchBox.classList.remove('active');
                    searchInput.value = '';
                    showAllMovies();
                }
            }, 10);
        }
        
        // Close profile dropdown if clicking outside
        if (!isClickInProfile && profileDropdown.classList.contains('active')) {
            profileDropdown.classList.remove('active');
            profileToggle.classList.remove('active');
        }
    });
    
    // 4. SEARCH FUNCTIONALITY
    let searchTimeout;
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.trim().toLowerCase();
            
            if (searchTerm === '') {
                showAllMovies();
                return;
            }
            
            searchMovies(searchTerm);
        }, 300);
    });
    
    // 5. KEYBOARD SHORTCUTS
    document.addEventListener('keydown', function(e) {
        // Close with Escape key
        if (e.key === 'Escape') {
            if (searchBox.classList.contains('active')) {
                searchBox.classList.remove('active');
                searchInput.value = '';
                showAllMovies();
            }
            if (profileDropdown.classList.contains('active')) {
                profileDropdown.classList.remove('active');
                profileToggle.classList.remove('active');
            }
        }
        
        // Focus search with Ctrl+K or Cmd+K
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchBox.classList.add('active');
            searchInput.focus();
            // Close profile dropdown if open
            profileDropdown.classList.remove('active');
            profileToggle.classList.remove('active');
        }
    });
    
    // Helper function to search movies
    function searchMovies(searchTerm) {
        const movieCards = document.querySelectorAll('.movie-card');
        let foundResults = false;
        
        movieCards.forEach(card => {
            const title = card.querySelector('.movie-title').textContent.toLowerCase();
            const desc = card.querySelector('.movie-desc').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                card.style.display = 'block';
                foundResults = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Optional: Show message if no results
        if (!foundResults) {
            console.log(`No results found for "${searchTerm}"`);
        }
    }
    
    // Helper function to show all movies
    function showAllMovies() {
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(card => {
            card.style.display = 'block';
        });
    }
});