// Sample positive news data
const positiveNews = [
    {
        id: 1,
        category: 'science',
        title: 'Scientists Develop Revolutionary Cancer Treatment with 95% Success Rate',
        summary: 'A groundbreaking new cancer treatment using personalized immune therapy has shown remarkable success in clinical trials, offering hope to millions of patients worldwide.',
        time: '2 hours ago',
        emoji: '🧬',
        categoryName: 'Science & Discovery'
    },
    {
        id: 2,
        category: 'environment',
        title: 'Great Barrier Reef Shows Signs of Remarkable Recovery',
        summary: 'Marine biologists report unprecedented coral growth and biodiversity recovery in sections of the Great Barrier Reef, thanks to conservation efforts and climate action.',
        time: '4 hours ago',
        emoji: '🐠',
        categoryName: 'Environment'
    },
    {
        id: 3,
        category: 'community',
        title: 'Local Community Raises $2 Million to Build Free Medical Clinic',
        summary: 'Neighbors come together in record-breaking fundraising effort to provide free healthcare services to underserved families in their community.',
        time: '6 hours ago',
        emoji: '🤝',
        categoryName: 'Community'
    },
    {
        id: 4,
        category: 'technology',
        title: 'AI System Helps Doctors Detect Diseases 10 Times Faster',
        summary: 'New artificial intelligence technology is revolutionizing medical diagnosis, helping doctors identify diseases earlier and save more lives.',
        time: '8 hours ago',
        emoji: '💡',
        categoryName: 'Technology'
    },
    {
        id: 5,
        category: 'education',
        title: 'Free Online University Graduates 10,000 Students from Developing Countries',
        summary: 'Innovative education platform provides completely free degree programs, empowering students from 50+ countries to achieve their dreams.',
        time: '10 hours ago',
        emoji: '📚',
        categoryName: 'Education'
    },
    {
        id: 6,
        category: 'health',
        title: 'Paralyzed Man Walks Again Thanks to Groundbreaking Spinal Implant',
        summary: 'Advanced neurotechnology enables patient with spinal cord injury to regain mobility, marking a major breakthrough in paralysis treatment.',
        time: '12 hours ago',
        emoji: '🏥',
        categoryName: 'Health & Medicine'
    },
    {
        id: 7,
        category: 'science',
        title: 'Clean Energy Breakthrough: Solar Panels Now 40% More Efficient',
        summary: 'Revolutionary new solar panel technology dramatically increases energy conversion rates, making renewable energy more accessible than ever.',
        time: '14 hours ago',
        emoji: '⚡',
        categoryName: 'Science & Discovery'
    },
    {
        id: 8,
        category: 'community',
        title: 'Teenager Invents Device to Clean Ocean Plastic, Saves Marine Life',
        summary: 'Young inventor creates innovative system that removes plastic waste from oceans, already cleaning 100,000 tons of debris.',
        time: '16 hours ago',
        emoji: '🌊',
        categoryName: 'Community'
    },
    {
        id: 9,
        category: 'technology',
        title: 'New App Helps Connect Elderly with Young Volunteers for Daily Support',
        summary: 'Heartwarming technology platform brings generations together, providing companionship and assistance to seniors while teaching valuable life lessons.',
        time: '18 hours ago',
        emoji: '👥',
        categoryName: 'Technology'
    },
    {
        id: 10,
        category: 'environment',
        title: 'Forest Restoration Project Plants 1 Billion Trees, Creates Jobs',
        summary: 'Massive reforestation initiative not only combats climate change but also provides sustainable employment for thousands of local communities.',
        time: '20 hours ago',
        emoji: '🌳',
        categoryName: 'Environment'
    },
    {
        id: 11,
        category: 'health',
        title: 'Mental Health App Reduces Depression by 60% in Clinical Study',
        summary: 'Free mental health application shows remarkable results in helping users overcome depression and anxiety through personalized support.',
        time: '22 hours ago',
        emoji: '🧠',
        categoryName: 'Health & Medicine'
    },
    {
        id: 12,
        category: 'education',
        title: 'Rural Schools Get High-Speed Internet, Transforming Learning',
        summary: 'Connectivity initiative brings world-class educational resources to remote areas, opening new opportunities for thousands of students.',
        time: '1 day ago',
        emoji: '🚀',
        categoryName: 'Education'
    }
];

// Global variables
let currentFilter = 'all';
let newsDisplayed = 6;
let filteredNews = [...positiveNews];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadNews();
    updateLastUpdated();
    addSmoothScrolling();
});

// Load and display news articles
function loadNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;

    // Filter news based on current filter
    if (currentFilter === 'all') {
        filteredNews = [...positiveNews];
    } else {
        filteredNews = positiveNews.filter(news => news.category === currentFilter);
    }

    // Clear existing news
    newsGrid.innerHTML = '';

    // Display news up to the current limit
    const newsToShow = filteredNews.slice(0, newsDisplayed);
    
    newsToShow.forEach(news => {
        const newsCard = createNewsCard(news);
        newsGrid.appendChild(newsCard);
    });

    // Update load more button visibility
    updateLoadMoreButton();
}

// Create a news card element
function createNewsCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
        <div class="news-image">${news.emoji}</div>
        <div class="news-content">
            <span class="news-category">${news.categoryName}</span>
            <h3 class="news-title">${news.title}</h3>
            <p class="news-summary">${news.summary}</p>
            <div class="news-meta">
                <span class="news-time">${news.time}</span>
                <span class="news-reading">📖 2 min read</span>
            </div>
        </div>
    `;

    // Add click animation
    card.addEventListener('click', function() {
        showNewsDetail(news);
    });

    return card;
}

// Show news detail (simulate opening article)
function showNewsDetail(news) {
    const messages = [
        "Thanks for your interest in positive news! 🌟",
        "This story brought a smile to 10,000+ people today! 😊",
        "You're helping spread positivity by reading good news! ✨",
        "This article has been shared 500+ times today! 💫"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(`${news.title}\n\n${randomMessage}`);
}

// Filter news by category
function filterNews(category) {
    currentFilter = category;
    newsDisplayed = 6; // Reset to show first 6 articles
    loadNews();

    // Update active category visual feedback
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.borderColor = 'transparent';
    });
    
    // Highlight selected category
    event.target.closest('.category-card').style.borderColor = '#f093fb';
    
    // Smooth scroll to news section
    document.getElementById('top-news').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Load more news articles
function loadMoreNews() {
    newsDisplayed += 6;
    loadNews();
    
    // Add a little excitement
    const btn = document.querySelector('.load-more-btn');
    const originalText = btn.textContent;
    btn.textContent = '✨ Loading more good news...';
    
    setTimeout(() => {
        btn.textContent = originalText;
    }, 1000);
}

// Update load more button visibility
function updateLoadMoreButton() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        if (newsDisplayed >= filteredNews.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// Track user mood
function trackMood(mood) {
    const moodResult = document.getElementById('moodResult');
    const moodMessages = {
        amazing: "That's wonderful! 🤩 You're radiating positivity!",
        happy: "So glad to hear that! 😊 Keep spreading those good vibes!",
        hopeful: "Hope is a beautiful thing! 🌟 Thanks for staying optimistic!",
        inspired: "You're inspiring us too! ✨ Go out and make a difference!"
    };

    // Store mood in localStorage (simple analytics)
    const today = new Date().toDateString();
    const moodData = JSON.parse(localStorage.getItem('happyPulseMood') || '{}');
    if (!moodData[today]) moodData[today] = {};
    moodData[today][mood] = (moodData[today][mood] || 0) + 1;
    localStorage.setItem('happyPulseMood', JSON.stringify(moodData));

    // Show mood result
    moodResult.innerHTML = `
        <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 15px; margin-top: 20px;">
            ${moodMessages[mood]}
            <br><small>You've helped us track ${Object.values(moodData[today]).reduce((a, b) => a + b, 0)} positive reactions today!</small>
        </div>
    `;

    // Add celebration effect
    createConfetti();
}

// Create confetti effect
function createConfetti() {
    const colors = ['#f093fb', '#f5576c', '#667eea', '#764ba2'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Add CSS animation for confetti
if (!document.getElementById('confetti-styles')) {
    const style = document.createElement('style');
    style.id = 'confetti-styles';
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Update last updated time
function updateLastUpdated() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
    
    // This could be displayed somewhere on the page
    console.log(`Last updated: ${timeString}`);
}

// Add smooth scrolling to navigation links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add typing effect to hero title
function addTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        typeWriter();
    }
}

// Random positive quote generator
const positiveQuotes = [
    "Believe in yourself and all that you are! ✨",
    "Every day is a new beginning! 🌅",
    "You are capable of amazing things! 💪",
    "Spread kindness wherever you go! 💝",
    "Your positive energy is contagious! ⚡",
    "Today is full of possibilities! 🌟"
];

function showRandomQuote() {
    const quote = positiveQuotes[Math.floor(Math.random() * positiveQuotes.length)];
    alert(quote);
}

// Add Easter egg - click logo 5 times for surprise
let logoClicks = 0;
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo h1');
    if (logo) {
        logo.addEventListener('click', function() {
            logoClicks++;
            if (logoClicks === 5) {
                showRandomQuote();
                createConfetti();
                logoClicks = 0;
            }
        });
    }
});

// Search functionality (simple implementation)
function searchNews(query) {
    if (!query) {
        currentFilter = 'all';
        loadNews();
        return;
    }
    
    filteredNews = positiveNews.filter(news => 
        news.title.toLowerCase().includes(query.toLowerCase()) ||
        news.summary.toLowerCase().includes(query.toLowerCase())
    );
    
    newsDisplayed = 6;
    loadNews();
}

// Auto-refresh news every 30 minutes (in a real app, this would fetch from an API)
setInterval(function() {
    updateLastUpdated();
    // In a real application, you would fetch new news here
    console.log('Checking for new positive news...');
}, 1800000); // 30 minutes

// Share functionality
function shareNews(news) {
    if (navigator.share) {
        navigator.share({
            title: news.title,
            text: news.summary,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareText = `Check out this positive news: ${news.title}\n\n${news.summary}\n\nRead more at: ${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('News copied to clipboard! Share the positivity! 📋✨');
        });
    }
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadNews();
    updateLastUpdated();
    addSmoothScrolling();
    
    // Add some personality to the page
    console.log('🌟 Welcome to HappyPulse! Thanks for choosing positivity! 🌟');
});