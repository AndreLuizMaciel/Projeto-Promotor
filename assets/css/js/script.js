/**
 * Projeto Promotor - Script Principal
 * Funcionalidades: menu hamburger, contadores animados, scroll smooth
 */

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// ===== SCROLL SUAVE PARA ÂNCORAS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== CONTADORES ANIMADOS =====
class Counter {
    constructor(element, target) {
        this.element = element;
        this.target = parseInt(target);
        this.current = 0;
        this.isAnimating = false;
        this.speed = this.target > 1000 ? 50 : 100;
    }

    animate() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const increment = Math.ceil(this.target / (500 / this.speed));
        const timer = setInterval(() => {
            this.current += increment;

            if (this.current >= this.target) {
                this.current = this.target;
                clearInterval(timer);
                this.isAnimating = false;
            }

            this.element.textContent = this.current.toLocaleString('pt-BR');
        }, this.speed);
    }
}

// Iniciar contadores quando seção de resultados fica visível
const counters = [];
const counterElements = document.querySelectorAll('.counter');

counterElements.forEach(el => {
    const target = el.getAttribute('data-target');
    counters.push(new Counter(el, target));
});

// Intersection Observer para ativar contadores
if ('IntersectionObserver' in window) {
    const resultsSection = document.getElementById('results');
    
    if (resultsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counters.forEach(counter => counter.animate());
                    observer.unobserve(resultsSection);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(resultsSection);
    }
}

// ===== PARALLAX SUAVE =====
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        orb.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// ===== NAVBAR STICKY EFFECTS =====
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Adicionar sombra na navbar quando scrollar
    if (scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
    }

    lastScrollY = scrollY;
});

// ===== ANIMAÇÕES AO SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            animationObserver.unobserve(entry.target);
        }
    });
}, observationOptions);

// Aplicar animação a cards e elementos específicos
document.querySelectorAll('.pillar-card, .award-card, .benefit-card, .result-card').forEach(el => {
    el.style.opacity = '0';
    animationObserver.observe(el);
});

// ===== TRATAMENTO DE ERROS =====
window.addEventListener('error', (e) => {
    console.error('Erro detectado:', e);
});

// ===== LOG DE INICIALIZAÇÃO =====
console.log('%cProjeto Promotor - Site Institucional', 'color: #06b6d4; font-size: 14px; font-weight: bold;');
console.log('%cVersão 1.0 - Carregado com sucesso', 'color: #7c3aed; font-size: 12px;');
