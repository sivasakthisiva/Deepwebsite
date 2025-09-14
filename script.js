        // Movie data
        const movies = [
            {
                id: 1,
                title: "Jailer",
                poster: "jailer.wbmp",
                rating: 8.5,
                downloads: 125000,
                language: "Tamil",
                genre: "Action",
                year: 2023,
                description: "A retired jailer returns to action to save his family from a dangerous gang.",
                trailer: "https://www.youtube.com/embed/Y5BeWdODPqo?si=eOWgj0J-OTi4xEO9",
                magnetLink: "magnet:?xt=urn:btih:25A0F84932E43F8688256CD38195B470653A1457&dn=Vadacurry%20-%20Nenjukulle%20Nee%20%28Video%20Song%29%20%20%20Jai%2c%20Swathi%20Reddy%2c%20RJ%20Balaji%20%20%20Vivek%20-%20Mervin.mkv&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce"
            },
            {
                id: 2,
                title: "Vikram",
                poster: "https://via.placeholder.com/300x450/ff7700/111111?text=Vikram",
                rating: 9.0,
                downloads: 180000,
                language: "Tamil",
                genre: "Action/Thriller",
                year: 2022,
                description: "A special agent investigates a murder case that leads him to a dangerous drug cartel.",
                trailer: "https://www.youtube.com/embed/OKBMCL-frPU",
                magnetLink: "magnet:?xt=urn:btih:VIKRA1234567890abcdef&dn=Vikram+2022"
            },
            {
                id: 3,
                title: "Ponniyin Selvan",
                poster: "https://via.placeholder.com/300x450/ffcc00/111111?text=Ponniyin+Selvan",
                rating: 8.7,
                downloads: 150000,
                language: "Tamil",
                genre: "Historical/Drama",
                year: 2022,
                description: "The story of the early life of Arulmozhivarman, who would become the great Chola emperor Rajaraja I.",
                trailer: "https://www.youtube.com/embed/K4c6W_n+6cE",
                magnetLink: "magnet:?xt=urn:btih:PONNI1234567890abcdef&dn=Ponniyin+Selvan+2022"
            },
            {
                id: 4,
                title: "Master",
                poster: "https://via.placeholder.com/300x450/ff3333/111111?text=Master",
                rating: 8.2,
                downloads: 160000,
                language: "Tamil",
                genre: "Action/Thriller",
                year: 2021,
                description: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
                trailer: "https://www.youtube.com/embed/UTiXQcrLlv4",
                magnetLink: "magnet:?xt=urn:btih:MASTE1234567890abcdef&dn=Master+2021"
            },
            {
                id: 5,
                title: "Kaithi",
                poster: "https://via.placeholder.com/300x450/ff7700/111111?text=Kaithi",
                rating: 8.8,
                downloads: 140000,
                language: "Tamil",
                genre: "Action/Thriller",
                year: 2019,
                description: "A recently released prisoner races against time to meet his daughter for the first time, while a police officer tries to stop a drug cartel.",
                trailer: "https://www.youtube.com/embed/5PVf2hHdWbM",
                magnetLink: "magnet:?xt=urn:btih:KAITH1234567890abcdef&dn=Kaithi+2019"
            },
            {
                id: 6,
                title: "96",
                poster: "https://via.placeholder.com/300x450/ffcc00/111111?text=96",
                rating: 9.1,
                downloads: 110000,
                language: "Tamil",
                genre: "Romance/Drama",
                year: 2018,
                description: "Two high school sweethearts meet at a reunion after 22 years and reminisce about their past.",
                trailer: "https://www.youtube.com/embed/3VvWl_Tt2aI",
                magnetLink: "magnet:?xt=urn:btih:NINES1234567890abcdef&dn=96+2018"
            }
        ];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            initializeHomePage();
            
            // Setup search functionality
            const searchBar = document.getElementById('search-bar');
            const searchButton = document.querySelector('.glow-button');
            
            searchButton.addEventListener('click', handleSearch);
            searchBar.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            });
        });

        function showPage(page) {
            if (page === 'home') {
                document.getElementById('home-page').style.display = 'block';
                document.getElementById('download-page').style.display = 'none';
                document.title = "TamilRush - Latest Tamil Movies";
            } else if (page === 'download') {
                document.getElementById('home-page').style.display = 'none';
                document.getElementById('download-page').style.display = 'block';
            }
        }

        function initializeHomePage() {
            displayMovies('new-releases', movies.slice(0, 3));
            displayMovies('popular-movies', movies.slice(3));
        }

        function showMovieDetails(movieId) {
            // Find the movie in our data
            const movie = movies.find(m => m.id === movieId);
            
            if (movie) {
                // Set page title
                document.title = `${movie.title} (${movie.year}) - Download | TamilRush`;
                
                // Display movie details
                displayMovieDetails(movie);
                
                // Show download page
                showPage('download');
            }
        }

        function displayMovies(containerId, moviesToDisplay) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            
            moviesToDisplay.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" onclick="showMovieDetails(${movie.id})">
                    <div class="movie-info">
                        <h3 class="movie-title">${movie.title}</h3>
                        <div class="movie-meta">
                            <span class="movie-rating">⭐ ${movie.rating}/10</span>
                            <span class="movie-downloads">⬇ ${formatNumber(movie.downloads)}</span>
                        </div>
                        <span class="movie-genre">${movie.genre}</span>
                    </div>
                `;
                container.appendChild(movieCard);
            });
        }

        function displayMovieDetails(movie) {
            const downloadContainer = document.querySelector('.download-container');
            
            downloadContainer.innerHTML = `
                <div class="movie-header">
                    <img src="${movie.poster}" alt="${movie.title}">
                    <div class="movie-details">
                        <h1>${movie.title} (${movie.year})</h1>
                        <p><strong>Rating:</strong> ⭐ ${movie.rating}/10</p>
                        <p><strong>Downloads:</strong> ⬇ ${formatNumber(movie.downloads)}</p>
                        <p><strong>Language:</strong> ${movie.language}</p>
                        <p><strong>Genre:</strong> ${movie.genre}</p>
                        <p>${movie.description}</p>
                    </div>
                </div>
                
                <div class="trailer-container">
                    <h2>Trailer</h2>
                    <div class="video-wrapper">
                        <iframe width="100%" height="450" src="${movie.trailer}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                
                <div class="download-options">
                    <h2>Download Options</h2>
                    <div class="download-buttons">
                        <button class="download-btn magnet-btn" onclick="handleMagnetLink('${movie.title}', '${movie.magnetLink}')">Download via Magnet Link</button>
                    </div>
                    <p style="margin-top: 1rem; color: #aaa;">
                        Click the button above to open the magnet link in your torrent application.
                    </p>
                </div>
            `;
        }

        function handleSearch() {
            const searchTerm = document.getElementById('search-bar').value.toLowerCase();
            
            if (searchTerm.trim() === '') {
                // If search is empty, show all movies
                displayMovies('new-releases', movies.slice(0, 3));
                displayMovies('popular-movies', movies.slice(3));
                return;
            }
            
            const filteredMovies = movies.filter(movie => 
                movie.title.toLowerCase().includes(searchTerm) ||
                movie.genre.toLowerCase().includes(searchTerm) ||
                movie.description.toLowerCase().includes(searchTerm)
            );
            
            // Clear both containers and display search results in the first one
            document.getElementById('new-releases').innerHTML = '';
            document.getElementById('popular-movies').innerHTML = '';
            
            if (filteredMovies.length > 0) {
                displayMovies('new-releases', filteredMovies);
                document.querySelector('.movie-section h2').textContent = 'Search Results';
            } else {
                document.getElementById('new-releases').innerHTML = '<p>No movies found matching your search.</p>';
                document.querySelector('.movie-section h2').textContent = 'Search Results';
            }
        }

        function handleMagnetLink(title, magnetLink) {
            // Try to open the magnet link directly
            window.location.href = magnetLink;
            
            // Show a notification
            showToast(`Opening magnet link for ${title} in your torrent application...`);
            
            // Fallback: If the direct approach doesn't work, offer to copy the link
            setTimeout(() => {
                if (confirm(`If the download didn't start, would you like to copy the magnet link to your clipboard?`)) {
                    copyToClipboard(magnetLink);
                    showToast(`Magnet link for ${title} copied to clipboard!`);
                }
            }, 2000);
        }

        function copyToClipboard(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Helper functions
        function formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
