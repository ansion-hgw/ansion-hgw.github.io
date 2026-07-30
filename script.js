// ==================== 导航栏汉堡菜单 ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 点击导航链接后关闭菜单
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// ==================== 导航栏滚动高亮 ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ==================== 滚动淡入动画 ====================
function initFadeIn() {
    const elements = document.querySelectorAll(
        '.research-card, .contact-card, .publication-item, .about-content, .section-title, ' +
        '.timeline-item, .project-card, .conference-card, .pub-stat-item'
    );

    elements.forEach(el => {
        el.classList.add('fade-in');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initFadeIn);

// ==================== 平滑滚动到顶部（点击Logo） ====================
const navLogo = document.querySelector('.nav-logo');
if (navLogo) {
    navLogo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== 导航栏滚动阴影效果 ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 8px rgba(0,0,0,0.05)';
        }
    }
});
