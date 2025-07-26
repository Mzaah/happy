// Sample positive news data
const positiveNews = [
    {
        id: 1,
        category: 'science',
        title: 'Scientists develop revolutionary cancer treatment with 95% success rate',
        summary: 'Groundbreaking personalized immune therapy shows remarkable success in clinical trials, offering hope to millions worldwide.',
        time: '2h',
        impact: 'high',
        link: 'https://www.nature.com/articles/s41591-023-02328-5'
    },
    {
        id: 2,
        category: 'environment',
        title: 'Great Barrier Reef shows signs of remarkable recovery',
        summary: 'Marine biologists report unprecedented coral growth and biodiversity recovery thanks to conservation efforts.',
        time: '4h',
        impact: 'medium',
        link: 'https://www.bbc.com/news/science-environment-65875234'
    },
    {
        id: 3,
        category: 'community',
        title: 'Local community raises $2M to build free medical clinic',
        summary: 'Neighbors unite in record-breaking fundraising effort to provide free healthcare to underserved families.',
        time: '6h',
        impact: 'medium',
        link: 'https://www.npr.org/sections/health-shots/2023/12/15/1219382756/community-fundraising-medical-clinic'
    },
    {
        id: 4,
        category: 'technology',
        title: 'AI system helps doctors detect diseases 10x faster',
        summary: 'New artificial intelligence revolutionizes medical diagnosis, helping identify diseases earlier and save lives.',
        time: '8h',
        impact: 'high',
        link: 'https://www.scientificamerican.com/article/ai-diagnosis-breakthrough-2024/'
    },
    {
        id: 5,
        category: 'education',
        title: 'Free online university graduates 10,000 students globally',
        summary: 'Platform provides completely free degrees, empowering students from 50+ developing countries.',
        time: '10h',
        impact: 'high',
        link: 'https://www.theguardian.com/education/2024/jan/20/free-online-university-graduates-developing-countries'
    },
    {
        id: 6,
        category: 'health',
        title: 'Paralyzed man walks again with groundbreaking spinal implant',
        summary: 'Advanced neurotechnology enables spinal cord injury patient to regain mobility in major breakthrough.',
        time: '12h',
        impact: 'high',
        link: 'https://www.cnn.com/2024/01/25/health/spinal-implant-paralysis-breakthrough/index.html'
    },
    {
        id: 7,
        category: 'science',
        title: 'Solar panels achieve 40% efficiency breakthrough',
        summary: 'Revolutionary technology dramatically increases energy conversion, making renewable energy more accessible.',
        time: '14h',
        impact: 'medium',
        link: 'https://www.reuters.com/business/energy/solar-panel-efficiency-breakthrough-2024-01-30/'
    },
    {
        id: 8,
        category: 'community',
        title: 'Teenager invents device to clean ocean plastic',
        summary: 'Young inventor creates system removing plastic waste from oceans, already cleaning 100,000 tons.',
        time: '16h',
        impact: 'medium',
        link: 'https://www.nationalgeographic.com/environment/article/teen-ocean-plastic-cleanup-device'
    },
    {
        id: 9,
        category: 'technology',
        title: 'App connects elderly with young volunteers for support',
        summary: 'Platform brings generations together, providing companionship to seniors while teaching life lessons.',
        time: '18h',
        impact: 'low',
        link: 'https://www.washingtonpost.com/technology/2024/02/01/elderly-youth-volunteer-app/'
    },
    {
        id: 10,
        category: 'environment',
        title: 'Restoration project plants 1 billion trees, creates jobs',
        summary: 'Massive reforestation combats climate change while providing sustainable employment to communities.',
        time: '20h',
        impact: 'high',
        link: 'https://www.reuters.com/business/environment/billion-tree-project-creates-jobs-2024-02-05/'
    },
    {
        id: 11,
        category: 'health',
        title: 'Mental health app reduces depression by 60%',
        summary: 'Free application shows remarkable results helping users overcome depression and anxiety.',
        time: '22h',
        impact: 'medium',
        link: 'https://www.healthline.com/health-news/mental-health-app-study-results-2024'
    },
    {
        id: 12,
        category: 'education',
        title: 'Rural schools receive high-speed internet access',
        summary: 'Connectivity initiative brings world-class educational resources to remote areas, opening opportunities.',
        time: '1d',
        impact: 'medium',
        link: 'https://www.edweek.org/technology/rural-schools-internet-access-initiative-2024/2024/02'
    },
    {
        id: 13,
        category: 'science',
        title: 'Gene therapy restores sight to blind patients',
        summary: 'Clinical trial successfully restores vision to patients with inherited blindness using gene editing.',
        time: '1d',
        impact: 'high',
        link: 'https://www.sciencemag.org/news/2024/02/gene-therapy-restores-sight-blind-patients'
    },
    {
        id: 14,
        category: 'community',
        title: 'Homeless shelter built entirely by volunteers in 2 weeks',
        summary: 'Community comes together to construct 50-bed facility providing safe housing and support services.',
        time: '1d',
        impact: 'medium',
        link: 'https://www.good.is/articles/volunteers-build-homeless-shelter-two-weeks'
    },
    {
        id: 15,
        category: 'environment',
        title: 'City becomes first to run entirely on renewable energy',
        summary: 'Major metropolitan area achieves 100% clean energy goal two years ahead of schedule.',
        time: '2d',
        impact: 'high',
        link: 'https://www.renewableenergyworld.com/solar/city-achieves-100-percent-renewable-energy/'
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadNews();
    updateLastUpdated();
});

// Load and display news articles
function loadNews() {
    const newsFeed = document.getElementById('newsFeed');
    if (!newsFeed) return;

    // Clear existing news
    newsFeed.innerHTML = '';

    // Display all news items
    positiveNews.forEach(news => {
        const newsItem = createNewsItem(news);
        newsFeed.appendChild(newsItem);
    });
}

// Create a news item element
function createNewsItem(news) {
    const item = document.createElement('div');
    item.className = 'news-item';
    item.innerHTML = `
        <div class="news-header">
            <span class="news-category ${news.category}">${news.category}</span>
            <span class="news-time">${news.time}</span>
            <span class="news-impact ${news.impact}">Impact: ${news.impact}</span>
        </div>
        <h3 class="news-title">${news.title}</h3>
        <p class="news-summary">${news.summary}</p>
    `;

    // Add click event to open external article
    item.addEventListener('click', function() {
        openExternalArticle(news);
    });

    return item;
}

// Open external news article
function openExternalArticle(news) {
    // Open the external article link in a new tab
    window.open(news.link, '_blank', 'noopener,noreferrer');
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