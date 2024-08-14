window.addEventListener('DOMContentLoaded', (event) => {
    const newsSection = document.getElementById('news-section');
    const searchBox = document.querySelector('.search-box input');

    // Get news from localStorage
    const news = JSON.parse(localStorage.getItem('news')) || [];

    // Function to render news items
    function renderNews(filteredNews) {
        // Clear the existing content
        newsSection.innerHTML = '';

        // Render each news item
        filteredNews.forEach(newsItem => {
            const newsContent = document.createElement('div');
            newsContent.classList.add('news-content');

            newsContent.innerHTML = `
                <div class="news-picture">
                    <img src="${newsItem.image}" alt="News Image">
                </div>
                <div class="news-details">
                    <div class="anime-title">${newsItem.animeTitle}</div>
                    <div class="news-textbox">
                        <p>${newsItem.newsText}</p>
                    </div>
                </div>
            `;

            newsSection.appendChild(newsContent);
        });
    }

    // Initial render of all news items
    renderNews(news);

    // Filter news based on search input
    searchBox.addEventListener('input', function() {
        const searchQuery = searchBox.value.toLowerCase();
        const filteredNews = news.filter(newsItem => 
            newsItem.animeTitle.toLowerCase().includes(searchQuery)
        );

        // Render the filtered news
        renderNews(filteredNews);
    });
});
