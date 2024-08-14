document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const image = document.getElementById('image').value;
    const animeTitle = document.getElementById('anime-title').value;
    const newsText = document.getElementById('news-text').value;

    // Create a news object
    const newsItem = {
        image: image,
        animeTitle: animeTitle,
        newsText: newsText
    };

    // Get existing news from localStorage
    let news = JSON.parse(localStorage.getItem('news')) || [];

    // Add new news item
    news.push(newsItem);

    // Save back to localStorage
    localStorage.setItem('news', JSON.stringify(news));

    // Clear form
    document.getElementById('newsForm').reset();

    alert('News added successfully!');
});
