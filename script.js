// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: "Modern Loft Living",
        category: "residential",
        image: "placeholder-1"
    },
    {
        id: 2,
        title: "Corporate Office Space",
        category: "commercial",
        image: "placeholder-2"
    },
    {
        id: 3,
        title: "Boutique Hotel Lobby",
        category: "hospitality",
        image: "placeholder-3"
    },
    {
        id: 4,
        title: "Luxury Penthouse",
        category: "residential",
        image: "placeholder-4"
    },
    {
        id: 5,
        title: "Restaurant Interior",
        category: "hospitality",
        image: "placeholder-5"
    },
    {
        id: 6,
        title: "Retail Store Design",
        category: "commercial",
        image: "placeholder-6"
    },
    {
        id: 7,
        title: "Contemporary Villa",
        category: "residential",
        image: "placeholder-7"
    },
    {
        id: 8,
        title: "Coworking Space",
        category: "commercial",
        image: "placeholder-8"
    },
    {
        id: 9,
        title: "Spa & Wellness Center",
        category: "hospitality",
        image: "placeholder-9"
    }
];

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // Smooth scroll and active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                
                // Smooth scroll to section
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Load portfolio items
    loadPortfolio('all');

    // Portfolio filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            loadPortfolio(filter);
        });
    });

    // Load contact information from config
    loadContactInfo();

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// Load portfolio items
function loadPortfolio(filter) {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;

    const filteredData = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);

    portfolioGrid.innerHTML = filteredData.map(item => `
        <div class="portfolio-item" data-category="${item.category}">
            <div class="portfolio-image">
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="300" fill="#e0e0e0"/>
                    <text x="50%" y="45%" text-anchor="middle" fill="#999" font-size="16" font-family="Arial">Project Image</text>
                    <text x="50%" y="55%" text-anchor="middle" fill="#999" font-size="12" font-family="Arial">${item.title}</text>
                </svg>
            </div>
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
            </div>
        </div>
    `).join('');
}

// Load contact information from YAML config
async function loadContactInfo() {
    const contactInfoDiv = document.getElementById('contactInfo');
    if (!contactInfoDiv) return;

    try {
        const response = await fetch('config.yml');
        const yamlText = await response.text();
        const config = parseSimpleYAML(yamlText);

        if (config.contact) {
            contactInfoDiv.innerHTML = `
                ${config.contact.office ? `
                    <div class="contact-item">
                        <h4>Office Address</h4>
                        <p>${config.contact.office}</p>
                    </div>
                ` : ''}
                ${config.contact.phone ? `
                    <div class="contact-item">
                        <h4>Phone</h4>
                        <p><a href="tel:${config.contact.phone.replace(/\s/g, '')}">${config.contact.phone}</a></p>
                    </div>
                ` : ''}
                ${config.contact.email ? `
                    <div class="contact-item">
                        <h4>Email</h4>
                        <p><a href="mailto:${config.contact.email}">${config.contact.email}</a></p>
                    </div>
                ` : ''}
                ${config.contact.hours ? `
                    <div class="contact-item">
                        <h4>Business Hours</h4>
                        <p>${config.contact.hours}</p>
                    </div>
                ` : ''}
            `;
        }
    } catch (error) {
        console.error('Error loading contact info:', error);
        contactInfoDiv.innerHTML = `
            <div class="contact-item">
                <h4>Get In Touch</h4>
                <p>Contact information will be loaded from config.yml</p>
            </div>
        `;
    }
}

// Simple YAML parser for basic key-value pairs
function parseSimpleYAML(yamlText) {
    const lines = yamlText.split('\n');
    const result = { contact: {} };
    let currentSection = null;

    lines.forEach(line => {
        line = line.trim();
        if (!line || line.startsWith('#')) return;

        if (line.endsWith(':') && !line.includes('  ')) {
            currentSection = line.slice(0, -1);
        } else if (currentSection === 'contact') {
            const match = line.match(/^(\w+):\s*(.+)$/);
            if (match) {
                const [, key, value] = match;
                result.contact[key] = value.replace(/['"]/g, '');
            }
        }
    });

    return result;
}

// Handle contact form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // For demonstration - in production, you'd send this to a backend
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}

// Parallax effect for hero section (optional enhancement)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
