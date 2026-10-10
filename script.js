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

const I18N = {
    vi: {
        'nav-1': 'Trang Chủ', 'nav-2': 'Danh Mục', 'nav-3': 'Hot Deal', 'nav-4': 'Vừa Xem',
        'hero-t1': 'Tìm Giá Tốt Nhất.', 'hero-t2': 'Chỉ Bằng Một Lần Chạm.',
        'hero-sub': 'Hệ thống tổng hợp deal sốc, mã giảm giá và siêu ưu đãi thời gian thực từ các sàn TMĐT lớn nhất — Shopee, Lazada, Tiki, TikTok Shop.',
        'stat-1': 'SẢN PHẨM', 'stat-2': 'SÀN TMĐT', 'stat-3': 'TIẾT KIỆM', 'stat-4': 'NGƯỜI DÙNG',
        'search-placeholder': 'Nhập tên sản phẩm (VD: iPhone 15, Sony WH-1000XM5, Son MAC...)',
        'search-btn': '<i class="fa-solid fa-bolt"></i> So Sánh Ngay',
        'search-tags-label': 'Gợi ý:',
        'cat-label': 'Danh Mục Phổ Biến',
        'sort-label': 'Sắp xếp',
        'sort-opt-1': 'Độ liên quan', 'sort-opt-2': 'Giá thấp → cao', 'sort-opt-3': 'Giá cao → thấp',
        'price-label': 'Khoảng giá', 'price-min': 'TỪ', 'price-max': 'ĐẾN', 'price-btn': 'Áp dụng',
        'plat-label': 'Sàn thương mại',
        'res-prefix': 'Kết quả: ', 'res-suffix': ' sản phẩm',
        'loading-txt': 'Đang tổng hợp dữ liệu giá từ các sàn...',
        'no-res-h3': 'Không tìm thấy sản phẩm!', 'no-res-p': 'Vui lòng thử lại với từ khóa khác.',
        'trend-h2': 'Sản Phẩm <span>Đang Hot</span> 🔥', 'trend-view': 'Xem tất cả <i class="fa-solid fa-arrow-right"></i>',
        'rec-h2': 'Bạn <span>Vừa Xem</span>', 'rec-clear': '<i class="fa-solid fa-trash-can"></i> Xóa lịch sử',
        'redir-h2': 'Đang chuyển hướng...', 'redir-p1': 'Đang đưa bạn đến ', 'redir-p2': ' với giá tốt nhất',
        'redir-small1': 'Nếu trình duyệt không tự chuyển, ', 'redir-small2': 'bấm vào đây',
        'foot-desc': 'Nền tảng tổng hợp ưu đãi và khuyến mãi mỗi ngày. Giúp bạn săn deal cực hời và mua sắm siêu tiết kiệm từ các sàn TMĐT hàng đầu Việt Nam.',
        'foot-h3-1': 'Về chúng tôi', 'foot-l1-1': 'Giới thiệu nền tảng', 'foot-l1-2': 'Liên hệ hỗ trợ', 'foot-l1-3': 'Chính sách bảo mật', 'foot-l1-4': 'Điều khoản sử dụng',
        'foot-h3-2': 'Đối tác', 'foot-l2-1': 'Trở thành Affiliate', 'foot-l2-2': 'API Săn Deal', 'foot-l2-3': 'Quảng cáo sản phẩm', 'foot-l2-4': 'Blog chia sẻ',
        'foot-copy': '© 2026 TìmGiáTốt — Mọi quyền được bảo lưu.',
        'cat-phone': 'Điện Thoại', 'cat-laptop': 'Laptop', 'cat-audio': 'Tai Nghe', 'cat-beauty': 'Mỹ Phẩm', 'cat-home': 'Gia Dụng', 'cat-gaming': 'Gaming',
        'card-best-price': 'Giá tốt nhất từ:', 'card-buy': 'Tới nơi bán'
    },
    en: {
        'nav-1': 'Home', 'nav-2': 'Categories', 'nav-3': 'Trending', 'nav-4': 'Recent',
        'hero-t1': 'Find Best Prices.', 'hero-t2': 'Just One Tap Away.',
        'hero-sub': 'Real-time price analysis and comparison from top platforms — Shopee, Lazada, Tiki, TikTok Shop.',
        'stat-1': 'PRODUCTS', 'stat-2': 'PLATFORMS', 'stat-3': 'SAVINGS', 'stat-4': 'USERS',
        'search-placeholder': 'Enter product name (e.g. iPhone 15...)',
        'search-btn': '<i class="fa-solid fa-bolt"></i> Compare Now',
        'search-tags-label': 'Suggestions:',
        'cat-label': 'Popular Categories',
        'sort-label': 'Sort By',
        'sort-opt-1': 'Relevance', 'sort-opt-2': 'Price Low → High', 'sort-opt-3': 'Price High → Low',
        'price-label': 'Price Range', 'price-min': 'MIN', 'price-max': 'MAX', 'price-btn': 'Apply',
        'plat-label': 'Platforms',
        'res-prefix': 'Results: ', 'res-suffix': ' products',
        'loading-txt': 'Aggregating price data from platforms...',
        'no-res-h3': 'No products found!', 'no-res-p': 'Please try again with different keywords.',
        'trend-h2': '<span>Trending</span> Products 🔥', 'trend-view': 'View All <i class="fa-solid fa-arrow-right"></i>',
        'rec-h2': '<span>Recently</span> Viewed', 'rec-clear': '<i class="fa-solid fa-trash-can"></i> Clear History',
        'redir-h2': 'Redirecting...', 'redir-p1': 'Taking you to ', 'redir-p2': ' for the best price',
        'redir-small1': 'If not redirected automatically, ', 'redir-small2': 'click here',
        'foot-desc': 'Smart price comparison platform. Search, compare, and shop easily at the best prices from top e-commerce platforms in Vietnam.',
        'foot-h3-1': 'About Us', 'foot-l1-1': 'Platform Intro', 'foot-l1-2': 'Support Contact', 'foot-l1-3': 'Privacy Policy', 'foot-l1-4': 'Terms of Use',
        'foot-h3-2': 'Partners', 'foot-l2-1': 'Become an Affiliate', 'foot-l2-2': 'Price API', 'foot-l2-3': 'Advertising', 'foot-l2-4': 'Blog',
        'foot-copy': '© 2026 TimGiaTot — All rights reserved.',
        'cat-phone': 'Phones', 'cat-laptop': 'Laptops', 'cat-audio': 'Audio', 'cat-beauty': 'Beauty', 'cat-home': 'Home', 'cat-gaming': 'Gaming',
        'card-best-price': 'Best price from:', 'card-buy': 'Go to store'
    }
};

let currentLang = localStorage.getItem('lang') || 'vi';

const CATEGORIES = [
    { id: 'phone', key: 'cat-phone', icon: 'fa-mobile-screen' },
    { id: 'laptop', key: 'cat-laptop', icon: 'fa-laptop' },
    { id: 'audio', key: 'cat-audio', icon: 'fa-headphones' },
    { id: 'beauty', key: 'cat-beauty', icon: 'fa-spray-can' },
    { id: 'home', key: 'cat-home', icon: 'fa-blender' },
    { id: 'gaming', key: 'cat-gaming', icon: 'fa-gamepad' }
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
    updateLanguageUI();
    loadRecent();
    initParticles();
    setupHeaderScroll();
}

function updateLanguageUI() {
    const t = I18N[currentLang];
    const set = (sel, key, isHtml = false) => {
        const el = document.querySelector(sel);
        if (el) isHtml ? el.innerHTML = t[key] : el.textContent = t[key];
    };
    const setPl = (sel, key) => {
        const el = document.querySelector(sel);
        if (el) el.placeholder = t[key];
    };

    

    const ht = document.querySelector('.hero-title');
    if(ht) ht.innerHTML = t['hero-t1'] + '\n<span class="line2">' + t['hero-t2'] + '</span>';
    set('.hero-subtitle', 'hero-sub');
    set('.stat-item:nth-child(1) .stat-label', 'stat-1');
    set('.stat-item:nth-child(3) .stat-label', 'stat-2');
    set('.stat-item:nth-child(5) .stat-label', 'stat-3');
    set('.stat-item:nth-child(7) .stat-label', 'stat-4');
    
    setPl('#searchInput', 'search-placeholder');
    const tags = document.querySelector('.search-tags span:first-child');
    if(tags) tags.textContent = t['search-tags-label'];
    
    set('.section-label', 'cat-label');
    set('#resultsSection .filter-group:nth-child(1) h3', 'sort-label');
    set('#sortSelect option[value="relevance"]', 'sort-opt-1');
    set('#sortSelect option[value="price-asc"]', 'sort-opt-2');
    set('#sortSelect option[value="price-desc"]', 'sort-opt-3');
    set('#resultsSection .filter-group:nth-child(2) h3', 'price-label');
    setPl('#minPrice', 'price-min');
    setPl('#maxPrice', 'price-max');
    set('#btnApplyFilter', 'price-btn');
    set('#resultsSection .filter-group:nth-child(3) h3', 'plat-label');
    
    set('#loadingIndicator p', 'loading-txt');
    set('#noResultsMsg h3', 'no-res-h3');
    set('#noResultsMsg p', 'no-res-p');
    set('.trending-section .section-title h2', 'trend-h2', true);
    set('.trending-section .section-title .view-all', 'trend-view', true);
    set('.recent-section .section-title h2', 'rec-h2', true);
    set('#btnClearRecent', 'rec-clear', true);
    
    set('#redirectModal h2', 'redir-h2');
    const sm = document.querySelector('.small-text');
    if(sm) sm.innerHTML = t['redir-small1'] + '<a href="#" id="manualRedirect">' + t['redir-small2'] + '</a>';
    
    set('.footer-brand p', 'foot-desc');
    set('.footer-links:nth-child(2) h3', 'foot-h3-1');
    set('.footer-links:nth-child(2) a:nth-of-type(1)', 'foot-l1-1');
    set('.footer-links:nth-child(2) a:nth-of-type(2)', 'foot-l1-2');
    set('.footer-links:nth-child(2) a:nth-of-type(3)', 'foot-l1-3');
    set('.footer-links:nth-child(2) a:nth-of-type(4)', 'foot-l1-4');
    
    set('.footer-links:nth-child(3) h3', 'foot-h3-2');
    set('.footer-links:nth-child(3) a:nth-of-type(1)', 'foot-l2-1');
    set('.footer-links:nth-child(3) a:nth-of-type(2)', 'foot-l2-2');
    set('.footer-links:nth-child(3) a:nth-of-type(3)', 'foot-l2-3');
    set('.footer-links:nth-child(3) a:nth-of-type(4)', 'foot-l2-4');
    set('.copyright p', 'foot-copy');

    const currentLangText = document.getElementById('currentLangText');
    if (currentLangText) {
        currentLangText.textContent = currentLang === 'vi' ? 'Tiếng Việt' : 'English';
    }
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });
    renderCategories();
    renderTrending();
    if (document.getElementById('recent').style.display !== 'none') loadRecent();
    
    const query = document.getElementById('searchInput').value;
    if (document.getElementById('resultsSection').style.display !== 'none') {
        const queryEl = document.getElementById('searchQueryText');
        if (queryEl) queryEl.parentElement.innerHTML = t['res-prefix'] + '<span id="searchQueryText" class="highlight-text">' + query + '</span>';
        const cnt = document.getElementById('resultsCount');
        if (cnt) cnt.textContent = parseInt(cnt.textContent) + t['res-suffix']; // Will just trigger a re-render soon or wait
        // Just re-render the grid text to be safe
        const res = window.lastResults || [];
        renderSearchResults(res);
    }
}


// ================= PARTICLE CANVAS =================
function initParticles() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const isDark = !document.body.classList.contains('light-theme');
        const color = isDark ? '167,139,250' : '124,58,237';

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color},${p.alpha})`;
            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });

        // Draw subtle lines between close particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${color},${0.06 * (1 - dist / 110)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
}

// ================= HEADER SCROLL EFFECT =================
function setupHeaderScroll() {
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    });
}

// ================= THEME TOGGLE =================
function setupThemeToggle() {
    const btn = document.getElementById('btnThemeToggle');
    const isLight = localStorage.getItem('theme') === 'light';
    
    // Default is dark mode now in CSS. So only add light-theme if needed.
    if (isLight) {
        document.body.classList.add('light-theme');
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>'; // It's light, so show moon to switch to dark
    } else {
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>'; // It's dark, so show sun to switch to light
    }

    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const currentLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', currentLight ? 'light' : 'dark');
        btn.innerHTML = currentLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    });
}

// ================= RENDER FUNCTIONS =================
function createProductCard(product, index = 0) {
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
            <button class="btn-buy ${p.platform}-bg" onclick="handleAffiliateClick('${p.platform}', '${p.link}', '${product.id}')">${I18N[currentLang]['card-buy']}</button>
        </div>
    `).join('');

    return `
        <div class="product-card fade-up" style="animation-delay: ${index * 0.08}s" data-id="${product.id}">
            <div class="product-image" onclick="saveToRecent('${product.id}')">
                <img src="${product.image}" alt="${product.title}">
                ${badgeHtml}
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="saveToRecent('${product.id}')">${product.title}</h3>
                <div class="price-container">
                    <span class="text-muted" style="font-size:12px">${I18N[currentLang]['card-best-price']}</span><br>
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
    grid.innerHTML = CATEGORIES.map(c => {
        const catName = I18N[currentLang][c.key];
        return `
        <div class="cat-item" onclick="triggerSearch('${catName}')">
            <i class="fa-solid ${c.icon}"></i>
            <span>${catName}</span>
        </div>
    `}).join('');
}

function renderTrending() {
    const grid = document.getElementById('trendingGrid');
    const trendingProducts = MOCK_PRODUCTS.filter(p => p.hot);
    grid.innerHTML = trendingProducts.map((p, idx) => createProductCard(p, idx)).join('');
}

function renderSearchTags() {
    const tags = ['iPhone', 'Sony', 'MacBook', 'Nồi chiên', 'Son môi'];
    const container = document.getElementById('searchTags');
    if (container) {
        container.innerHTML += tags.map(t => `<span class="tag" onclick="triggerSearch('${t}')">${t}</span>`).join('');
    }
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

    // Language Dropdown
    const langDropdown = document.getElementById('langDropdown');
    const btnLangToggle = document.getElementById('btnLangToggle');
    if (langDropdown && btnLangToggle) {
        btnLangToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
        
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                const newLang = e.currentTarget.dataset.lang;
                if (newLang !== currentLang) {
                    currentLang = newLang;
                    localStorage.setItem('lang', currentLang);
                    updateLanguageUI();
                }
                langDropdown.classList.remove('open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove('open');
            }
        });
    }

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

function generateSkeletons(count) {
    return Array(count).fill(0).map(() => `
        <div class="skeleton-card">
            <div class="skeleton skeleton-img"></div>
            <div class="skeleton-content">
                <div class="skeleton skeleton-text-lg"></div>
                <div class="skeleton skeleton-text-lg" style="width: 60%"></div>
                <div class="skeleton skeleton-text-xl mt-4"></div>
                <div class="skeleton skeleton-row mt-4"></div>
                <div class="skeleton skeleton-row mt-2"></div>
                <div class="skeleton skeleton-row mt-2"></div>
            </div>
        </div>
    `).join('');
}

function executeSearch(query) {
    if (!query.trim()) return;

    const section = document.getElementById('resultsSection');
    const grid = document.getElementById('searchResultsGrid');
    const noResults = document.getElementById('noResultsMsg');
    const queryText = document.getElementById('searchQueryText');
    const resultsCount = document.getElementById('resultsCount');

    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Show Skeletons
    noResults.style.display = 'none';
    resultsCount.innerText = 'Đang tìm kiếm...';
    grid.innerHTML = generateSkeletons(6); // Show 6 skeleton cards
    queryText.innerText = query;

    // Simulate API delay
    setTimeout(() => {
        // Simple search mock
        const q = query.toLowerCase();
        currentSearchResults = MOCK_PRODUCTS.filter(p => 
            p.title.toLowerCase().includes(q) || 
            p.category.toLowerCase().includes(q)
        );

        applyFilters(); // Apply default filters to results
        
    }, 1500);
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
        grid.innerHTML = filtered.map((p, idx) => createProductCard(p, idx)).join('');
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
    grid.innerHTML = recentProducts.map((p, idx) => createProductCard(p, idx)).join('');
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
