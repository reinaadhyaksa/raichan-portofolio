import { ProjectData } from "./data/data.js";
import { CertificateData } from "./data/data.js";

AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

let visibleProjects = 0;
const projectsPerLoad = 5;

function renderProjects(projectsToShow) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';

    ProjectData.slice(0, projectsToShow).forEach((project, index) => {
        if (!project.title) return;

        const buildIcons = {
            'vite': 'https://vitejs.dev/logo.svg',
            'react': 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
            'html': 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
            'tailwind': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
            'webpack': 'https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png',
        };

        const buildBadges = project.build.map(tech => {
            const icon = buildIcons[tech.toLowerCase()] || '';
            return `
                <span class="flex items-center px-2 py-1 bg-gray-800 bg-opacity-50 text-gray-300 text-xs rounded">
                    ${icon ? `<img src="${icon}" alt="${tech}" class="h-3 mr-1">` : ''}
                    ${tech}
                </span>
            `;
        }).join('');

        const projectCard = document.createElement('div');
        projectCard.className = 'project-card rounded-lg overflow-hidden shadow-lg bg-gray-900';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', (index % 3) * 100);

        projectCard.innerHTML = `
            <div class="relative h-full flex flex-col">
                <div class="relative flex-grow">
                    <img src="${project.images || 'https://via.placeholder.com/600x400?text=Project+Image'}" alt="${project.title}"
                        class="w-full h-48 object-cover">
                    <div
                        class="project-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 flex flex-col justify-end p-6 transition-all duration-300 hover:opacity-100">
                        <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${buildBadges}
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-800">
                    <h3 class="text-lg font-semibold text-white mb-2">${project.title}</h3>
                    <a href="${project.link}" target="_blank"
                        class="block w-full px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 transition text-center">
                        View Project
                    </a>
                </div>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (projectsToShow >= ProjectData.length) {
        loadMoreBtn.textContent = 'All Projects Loaded';
        loadMoreBtn.disabled = true;
        loadMoreBtn.classList.remove('hover:bg-purple-500', 'hover:bg-opacity-20');
        loadMoreBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function loadMoreProjects() {
    visibleProjects += projectsPerLoad;
    if (visibleProjects > ProjectData.length) {
        visibleProjects = ProjectData.length;
    }
    renderProjects(visibleProjects);
}

document.addEventListener('DOMContentLoaded', () => {
    visibleProjects = projectsPerLoad;
    renderProjects(visibleProjects);

    const loadMoreBtn = document.getElementById('load-more-btn');
    loadMoreBtn.addEventListener('click', loadMoreProjects);
});

let visibleCertificates = 0;
const certsPerLoad = 3;

function renderCertificates(amountToShow) {
    const container = document.getElementById('certificates-container');

    if (visibleCertificates === 0) container.innerHTML = '';

    CertificateData.slice(visibleCertificates, visibleCertificates + amountToShow).forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = 'certificate-card bg-gray-800 rounded-lg overflow-hidden shadow-lg';
        certCard.setAttribute('data-aos', 'fade-up');
        certCard.setAttribute('data-aos-delay', (index % 3) * 100);

        certCard.innerHTML = `
            <div class="relative">
                <img src="${cert.image}" alt="${cert.title}" class="w-full h-64 object-cover">
                <div class="certificate-overlay absolute inset-0 bg-black bg-opacity-70 opacity-0 flex flex-col justify-center items-center p-6 transition-all duration-300 hover:opacity-100">
                    <h3 class="text-xl font-bold text-white mb-2 text-center">${cert.title}</h3>
                    <p class="text-gray-300 text-sm mb-4 text-center">Issued by ${cert.issuer} - ${cert.date}</p>
                    <a href="${cert.link}" target="_blank" class="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 transition">
                        View Certificate
                    </a>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-lg font-semibold text-white mb-2">${cert.title}</h3>
            </div>
        `;

        container.appendChild(certCard);
    });

    visibleCertificates += amountToShow;
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-certs');
    if (visibleCertificates >= CertificateData.length) {
        loadMoreBtn.textContent = 'All Certificates Loaded';
        loadMoreBtn.disabled = true;
        loadMoreBtn.classList.remove('hover:bg-purple-500', 'hover:bg-opacity-20');
        loadMoreBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function initCertificates() {
    if (CertificateData.length > 0) {
        renderCertificates(Math.min(certsPerLoad, CertificateData.length));

        document.getElementById('load-more-certs').addEventListener('click', () => {
            renderCertificates(certsPerLoad);
        });
    } else {
        document.getElementById('certificates-container').innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-400">No certificates available yet.</p>
            </div>
        `;
        document.getElementById('load-more-certs').classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', initCertificates);