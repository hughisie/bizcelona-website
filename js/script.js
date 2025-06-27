// Bizcelona Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('open');
                }
            }
        });
    });

    // Parallax effect for hero background
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            parallaxBg.style.transform = `translateY(${rate}px)`;
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-on-scroll class
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navbarLinks = document.querySelectorAll('.nav-link');

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navbarLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/95');
                navbar.classList.remove('bg-white/90');
            } else {
                navbar.classList.add('bg-white/90');
                navbar.classList.remove('bg-white/95');
            }
        });
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic form validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                    field.classList.remove('border-gray-300');
                } else {
                    field.classList.remove('border-red-500');
                    field.classList.add('border-gray-300');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return;
            }

            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Note: In a real implementation, you would handle the form submission
            // and show success/error messages accordingly
        });
    }

    // Image lazy loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('data-loaded', 'false');
        img.addEventListener('load', function() {
            this.setAttribute('data-loaded', 'true');
        });
    });

    // Smooth scroll to top functionality (if needed)
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add scroll to top button if page is long enough
    if (document.body.scrollHeight > window.innerHeight * 2) {
        const scrollTopButton = document.createElement('button');
        scrollTopButton.innerHTML = '↑';
        scrollTopButton.className = 'fixed bottom-8 right-8 bg-saffron text-navy w-12 h-12 rounded-full shadow-lg hover:bg-orange-400 transition-all duration-300 z-50 opacity-0 pointer-events-none';
        scrollTopButton.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollTopButton);

        scrollTopButton.addEventListener('click', scrollToTop);

        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopButton.classList.remove('opacity-0', 'pointer-events-none');
                scrollTopButton.classList.add('opacity-100');
            } else {
                scrollTopButton.classList.add('opacity-0', 'pointer-events-none');
                scrollTopButton.classList.remove('opacity-100');
            }
        });
    }

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll-heavy functions
    const debouncedParallax = debounce(function() {
        if (parallaxBg) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            parallaxBg.style.transform = `translateY(${rate}px)`;
        }
    }, 10);

    window.addEventListener('scroll', debouncedParallax);

    // Accessibility improvements
    document.addEventListener('keydown', function(e) {
        // Skip to main content with Tab key
        if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
            const mainContent = document.querySelector('#hero');
            if (mainContent) {
                mainContent.focus();
                e.preventDefault();
            }
        }
    });

    // Initialize everything
    updateActiveNavLink();
    
    console.log('Bizcelona website loaded successfully!');
});

