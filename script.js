// Dữ liệu mô phỏng cho Affiliate
const MOCK_PRODUCTS = [
    {
        id: "p1",
        title: "Apple iPhone 15 Pro Max 256GB - VN/A Titan Tự Nhiên",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop",
        category: "phone",
        hot: true,
        prices: [
            { platform: "shopee", price: 29590000, link: "https://shopee.vn/affiliate-mock-link" },
            { platform: "tiki", price: 29490000, link: "https://tiki.vn/affiliate-mock-link" },
            { platform: "lazada", price: 29800000, link: "https://lazada.vn/affiliate-mock-link" }
        ]
    },
    {
        id: "p2",
        title: "Tai nghe Bluetooth Sony WH-1000XM5 Chống Ồn Cao Cấp",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop",
        category: "audio",
        hot: true,
        prices: [
            { platform: "lazada", price: 7290000, link: "https://lazada.vn/affiliate" },
            { platform: "tiktok", price: 7450000, link: "https://tiktok.com/affiliate" },
            { platform: "shopee", price: 7350000, link: "https://shopee.vn/affiliate" }
        ]
    },
    {
        id: "p3",
        title: "Máy Chơi Game PlayStation 5 (PS5) Standard Edition Slim",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop",
        category: "gaming",
        hot: true,
        discount: "Giảm 2tr",
        prices: [
            { platform: "shopee", price: 12990000, link: "#" },
            { platform: "lazada", price: 13150000, link: "#" }
        ]
    },
    {
        id: "p4",
        title: "Laptop Apple MacBook Air M3 2024 8GB/256GB",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
        category: "laptop",
        hot: false,
        prices: [
            { platform: "tiki", price: 26990000, link: "#" },
            { platform: "shopee", price: 27200000, link: "#" },
            { platform: "tiktok", price: 27500000, link: "#" }
        ]
    },
    {
        id: "p5",
        title: "Son kem lì MAC Powder Kiss Liquid Lipcolour",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop",
        category: "beauty",
        hot: true,
        prices: [
            { platform: "lazada", price: 650000, link: "#" },
            { platform: "tiktok", price: 590000, link: "#" },
            { platform: "shopee", price: 680000, link: "#" }
        ]
    },
    {
        id: "p6",
        title: "Nồi Chiên Không Dầu Philips HD9252/90 4.1L",
        image: "https://images.unsplash.com/photo-1621255866170-c752ba119c3f?q=80&w=600&auto=format&fit=crop",
        category: "home",
        hot: false,
        discount: "Freeship",
        prices: [
            { platform: "tiki", price: 1490000, link: "#" },
            { platform: "shopee", price: 1550000, link: "#" }
        ]
    }
];

const CATEGORIES = [
    { id: 'phone', name: 'Điện Thoại', icon: 'fa-mobile-screen' },
    { id: 'laptop', name: 'Laptop', icon: 'fa-laptop' },
    { id: 'audio', name: 'Tai Nghe', icon: 'fa-headphones' },
    { id: 'beauty', name: 'Mỹ Phẩm', icon: 'fa-spray-can' },
    { id: 'home', name: 'Gia Dụng', icon: 'fa-blender' },
    { id: 'gaming', name: 'Gaming', icon: 'fa-gamepad' }
];

const PLATFORM_ICONS = {
    shopee: '<i class="fa-solid fa-bag-shopping"></i>',
    lazada: '<i class="fa-solid fa-heart"></i>',
    tiki: '<i class="fa-solid fa-face-smile"></i>',
    tiktok: '<i class="fa-brands fa-tiktok"></i>'
};

const PLATFORM_NAMES = {
    shopee: 'Shopee', lazada: 'Lazada', tiki: 'Tiki', tiktok: 'TikTok'
};

// Utilities
const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
const getBestPrice = (prices) => Math.min(...prices.map(p => p.price));
const sortPrices = (prices) => [...prices].sort((a, b) => a.price - b.price);

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderCategories();
    renderTrending();
    renderSearchTags();
    setupEventListeners();
    loadRecent();
    setupThemeToggle();
}

// ================= THEME TOGGLE =================
function setupThemeToggle() {
    const btn = document.getElementById('btnThemeToggle');
    const isLight = localStorage.getItem('theme') === 'light';
    if (isLight) {
        document.body.classList.add('light-theme');
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const currentLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', currentLight ? 'light' : 'dark');
        btn.innerHTML = currentLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

// ================= RENDER FUNCTIONS =================
function createProductCard(product) {
    const bestPrice = getBestPrice(product.prices);
    const sortedPrices = sortPrices(product.prices);
    
    let badgeHtml = '';
    if (product.discount) badgeHtml = `<div class="badge discount">${product.discount}</div>`;
    else if (product.hot) badgeHtml = `<div class="badge trending">Hot</div>`;

    let pricesHtml = sortedPrices.map(p => `
        <div class="platform-price-item">
            <span class="platform-name ${p.platform}-text">
                ${PLATFORM_ICONS[p.platform]} ${PLATFORM_NAMES[p.platform]}
            </span>
            <span class="p-price">${formatPrice(p.price)}</span>
            <button class="btn-buy ${p.platform}-bg" onclick="handleAffiliateClick('${p.platform}', '${p.link}', '${product.id}')">Tới nơi bán</button>
        </div>
    `).join('');

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image" onclick="saveToRecent('${product.id}')">
                <img src="${product.image}" alt="${product.title}">
                ${badgeHtml}
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="saveToRecent('${product.id}')">${product.title}</h3>
                <div class="price-container">
                    <span class="text-muted" style="font-size:12px">Giá tốt nhất từ:</span><br>
                    <span class="best-price">${formatPrice(bestPrice)}</span>
                </div>
                <div class="platform-prices">
                    ${pricesHtml}
                </div>
            </div>
        </div>
    `;
}

function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = CATEGORIES.map(c => `
        <div class="cat-item" onclick="triggerSearch('${c.name}')">
            <i class="fa-solid ${c.icon}"></i>
            <span>${c.name}</span>
        </div>
    `).join('');
}

function renderTrending() {
    const grid = document.getElementById('trendingGrid');
    const trendingProducts = MOCK_PRODUCTS.filter(p => p.hot);
    grid.innerHTML = trendingProducts.map(p => createProductCard(p)).join('');
}

function renderSearchTags() {
    const tags = ['iPhone', 'Sony', 'MacBook', 'Nồi chiên', 'Son môi'];
    const container = document.getElementById('searchTags');
    container.innerHTML += tags.map(t => `<span class="tag" onclick="triggerSearch('${t}')">${t}</span>`).join('');
}

// ================= SEARCH & FILTER LOGIC =================
let currentSearchResults = [];

function triggerSearch(query) {
    document.getElementById('searchInput').value = query;
    document.getElementById('btnSearch').click();
}

function setupEventListeners() {
    // Search button
    const btnSearch = document.getElementById('btnSearch');
    const input = document.getElementById('searchInput');
    
    btnSearch.addEventListener('click', () => executeSearch(input.value));
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') executeSearch(input.value);
    });

    // Filters
    document.getElementById('btnApplyFilter').addEventListener('click', applyFilters);
    document.getElementById('sortSelect').addEventListener('change', applyFilters);

    // Mobile Menu
    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('open');
    });
    document.querySelector('.close-menu').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.remove('open');
    });
    
    // Clear recent
    document.getElementById('btnClearRecent').addEventListener('click', () => {
        localStorage.removeItem('recentProducts');
        loadRecent();
    });
}

function executeSearch(query) {
    if (!query.trim()) return;

    const section = document.getElementById('resultsSection');
    const grid = document.getElementById('searchResultsGrid');
    const loading = document.getElementById('loadingIndicator');
    const noResults = document.getElementById('noResultsMsg');
    const queryText = document.getElementById('searchQueryText');

    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
    
    grid.innerHTML = '';
    noResults.style.display = 'none';
    loading.style.display = 'block';
    queryText.innerText = query;

    // Simulate API delay
    setTimeout(() => {
        loading.style.display = 'none';
        
        // Simple search mock
        const q = query.toLowerCase();
        currentSearchResults = MOCK_PRODUCTS.filter(p => 
            p.title.toLowerCase().includes(q) || 
            p.category.toLowerCase().includes(q)
        );

        applyFilters(); // Apply default filters to results
        
    }, 1200);
}

function applyFilters() {
    if(currentSearchResults.length === 0) {
        document.getElementById('noResultsMsg').style.display = 'block';
        document.getElementById('resultsCount').innerText = `0 sản phẩm`;
        return;
    }

    let filtered = [...currentSearchResults];
    
    // Price filter
    const min = Number(document.getElementById('minPrice').value) || 0;
    const max = Number(document.getElementById('maxPrice').value) || Infinity;
    
    filtered = filtered.filter(p => {
        const best = getBestPrice(p.prices);
        return best >= min && best <= max;
    });

    // Platform filter
    const checkedPlatforms = Array.from(document.querySelectorAll('.checkbox-group input:checked')).map(cb => cb.value);
    
    filtered = filtered.filter(p => {
        // Keep product if it has at least one price in the checked platforms
        return p.prices.some(priceObj => checkedPlatforms.includes(priceObj.platform));
    });

    // Sort
    const sortVal = document.getElementById('sortSelect').value;
    if (sortVal === 'price-asc') {
        filtered.sort((a, b) => getBestPrice(a.prices) - getBestPrice(b.prices));
    } else if (sortVal === 'price-desc') {
        filtered.sort((a, b) => getBestPrice(b.prices) - getBestPrice(a.prices));
    }

    const grid = document.getElementById('searchResultsGrid');
    const noResults = document.getElementById('noResultsMsg');
    
    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
    }
    
    document.getElementById('resultsCount').innerText = `${filtered.length} sản phẩm`;
}

// ================= RECENTLY VIEWED =================
window.saveToRecent = function(productId) {
    let recent = JSON.parse(localStorage.getItem('recentProducts') || '[]');
    recent = recent.filter(id => id !== productId); // Remove if exists
    recent.unshift(productId); // Add to beginning
    if (recent.length > 4) recent.pop(); // Keep max 4
    
    localStorage.setItem('recentProducts', JSON.stringify(recent));
    loadRecent();
};

function loadRecent() {
    const recentIds = JSON.parse(localStorage.getItem('recentProducts') || '[]');
    const section = document.getElementById('recent');
    const grid = document.getElementById('recentGrid');
    
    if (recentIds.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';
    const recentProducts = recentIds.map(id => MOCK_PRODUCTS.find(p => p.id === id)).filter(Boolean);
    grid.innerHTML = recentProducts.map(p => createProductCard(p)).join('');
}

// ================= AFFILIATE REDIRECT MODAL =================
window.handleAffiliateClick = function(platform, link, productId) {
    saveToRecent(productId);
    
    const modal = document.getElementById('redirectModal');
    const platformText = document.getElementById('redirectPlatform');
    const manualBtn = document.getElementById('manualRedirect');
    
    platformText.innerText = PLATFORM_NAMES[platform];
    manualBtn.href = link;
    modal.classList.add('active');

    // Simulate affiliate redirect wait time
    setTimeout(() => {
        modal.classList.remove('active');
        window.open(link, '_blank');
    }, 2000);
}
