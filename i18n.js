// Cambio de idioma ES/EN para todas las páginas
// Uso: agregar <script src="i18n.js"></script> antes de </body>.
// El script crea solo el botón ES | EN y traduce los textos usando el diccionario de abajo.
// Para traducir un texto nuevo: agrega una línea  'Texto en español': 'English text',
// (el texto en español debe ser igual al del HTML; los espacios y saltos de línea no importan).
// Alternativa: en el HTML, data-en="English text" en un elemento reemplaza todo su contenido.

const TRANSLATIONS = {
    // ── Títulos de pestaña ──
    'Convocatorias · Debug Colectiva': 'Open Calls · Debug Colectiva',
    'Portafolios · Debug Colectiva': 'Portfolios · Debug Colectiva',
    'Proyecto IA · En construcción · Debug Colectiva': 'AI Project · Under construction · Debug Colectiva',

    // ── Navegación y comunes ──
    'Menú': 'Menu',
    'Nosotras': 'About us',
    'Proyectos': 'Projects',
    'Equipo': 'Team',
    'Contacto': 'Contact',
    'Portafolios': 'Portfolios',
    'Convocatorias': 'Open Calls',
    'Inicio': 'Home',
    '← Inicio': '← Home',
    '← Volver al inicio': '← Back to home',
    'Mentoras': 'Mentors',
    'Próximamente': 'Coming soon',
    'Ver proyecto →': 'View project →',

    // ── index.html: hero ──
    '🐞 Comunidad · Visibilidad · Ciencias Sociales': '🐞 Community · Visibility · Social Sciences',
    'Debug - ando': 'Debug - ging',
    'juntas': 'together',
    'Somos una comunidad de mujeres de Ciencias Sociales que documenta, visibiliza y comparte su trabajo en espacios digitales abiertos. Porque mostrar lo que hacemos también es una forma de ocupar espacio, producir conocimiento y ampliar referentes para otras.':
        'We are a community of women in the Social Sciences who document, showcase and share their work in open digital spaces. Because showing what we do is also a way of taking up space, producing knowledge and broadening role models for others.',
    'Conoce la comunidad': 'Meet the community',
    'Convocatorias →': 'Open Calls →',
    'Ver en GitHub →': 'See on GitHub →',
    'Programa Universitario Regional': 'Regional University Program',
    'Postula aquí.': 'Apply here.',
    'Cierre de convocatoria: 29 de junio.': 'Applications close: June 29.',
    'Cupos disponibles': 'Available spots',
    'Semanas intensivas': 'Intensive weeks',
    'Espacios Colaborativos': 'Collaborative spaces',
    'Construcción de comunidad': 'Community building',

    // ── index.html: nosotras ──
    '¿Quiénes somos?': 'Who are we?',
    'Una red de cuidado y visibilidad colectiva': 'A network of care and collective visibility',
    'Debug Colectiva es una comunidad que visibiliza, documenta y fortalece el trabajo de mujeres de ciencias sociales que trabajan con datos, programación e investigación aplicada.':
        'Debug Colectiva is a community that showcases, documents and strengthens the work of women in the social sciences who work with data, programming and applied research.',
    'Usamos espacios como GitHub y LinkedIn para mostrar proyectos reales: análisis de datos, trabajo de campo, diseño metodológico e investigación cualitativa.':
        'We use spaces like GitHub and LinkedIn to showcase real projects: data analysis, fieldwork, methodological design and qualitative research.',
    'Sabemos que mostrarse no siempre es fácil, pero no solo por razones individuales. También influyen desigualdades que han hecho que el trabajo de muchas mujeres tenga menos visibilidad, menos reconocimiento y menos espacio en entornos técnicos y digitales.':
        'We know that putting yourself out there is not always easy, and not only for individual reasons. Inequalities have also meant that the work of many women gets less visibility, less recognition and less space in technical and digital environments.',
    'Debug Colectiva no es solo un espacio técnico': 'Debug Colectiva is not just a technical space',
    ', sino una comunidad donde se aprende, se comparte y se construye visibilidad en conjunto.':
        ', but a community where we learn, share and build visibility together.',
    'Nuestros valores': 'Our values',
    'Cuidado mutuo': 'Mutual care',
    'Acompañamos sin juzgar y escuchamos sin imponer.': 'We support without judging and listen without imposing.',
    'El error como parte del camino': 'Mistakes as part of the journey',
    'El error no se esconde: se comparte y se aprende.': 'Mistakes are not hidden: they are shared and learned from.',
    'Equidad': 'Equity',
    'Reconocemos que no todas partimos de las mismas condiciones para aprender y hacernos visibles.':
        'We recognize that not all of us start from the same conditions to learn and become visible.',
    'Autonomía acompañada': 'Supported autonomy',
    'Cada una avanza a su ritmo, pero no sola.': 'Each of us moves at our own pace, but not alone.',
    'Valor de lo cotidiano': 'The value of everyday work',
    'No hace falta que todo esté perfecto para compartirlo. Lo que haces ya tiene valor.':
        'It doesn’t have to be perfect to be shared. What you do already has value.',

    // ── index.html: proyectos ──
    'Repositorios': 'Repositories',
    'Nuestros proyectos': 'Our projects',
    'Ver todos →': 'See all →',
    'Guía Introductoria GitHub': 'Introductory GitHub Guide',
    'Guía paso a paso para que mujeres de Ciencias Sociales suban sus proyectos a GitHub por primera vez. Sin intimidaciones, con mucha claridad.':
        'A step-by-step guide for women in the Social Sciences to upload their projects to GitHub for the first time. No intimidation, lots of clarity.',
    'Memoria 2025': '2025 Report',
    'La memoria de nuestro primer año: logros, aprendizajes y las historias de quienes participaron en la primera edición del programa.':
        'The report on our first year: achievements, lessons learned and the stories of those who took part in the first edition of the program.',
    'El repositorio principal de la organización. Aquí encontrarás quiénes somos, qué hacemos y cómo puedes sumarte a la comunidad.':
        'The organization’s main repository. Here you’ll find who we are, what we do and how you can join the community.',
    'Ver repositorio →': 'View repository →',

    // ── index.html: equipo ──
    'El equipo': 'The team',
    'Impulsada por mujeres': 'Driven by women',
    'Con experiencia en datos, políticas públicas, investigación, tecnología, gestión cultural y género, Debug Colectiva es impulsada de manera colectiva por mujeres con trayectorias diversas.':
        'With experience in data, public policy, research, technology, cultural management and gender, Debug Colectiva is collectively driven by women with diverse backgrounds.',
    'Directora de Comunidad': 'Community Director',
    'Directora de Formación Técnica y Metodología': 'Director of Technical Training and Methodology',
    'Directora de Investigación': 'Research Director',
    'Directora de Alianzas Estratégicas': 'Director of Strategic Partnerships',
    'Directora de Género': 'Gender Director',

    // ── index.html: contacto y footer ──
    '¿Quieres sumarte?': 'Want to join?',
    'Únete a Debug Colectiva': 'Join Debug Colectiva',
    'Este es un espacio abierto, cuidado y sin competencia. No necesitas saber programar “bien”; necesitas disposición para aprender, compartir y sostener tu proceso en comunidad.':
        'This is an open, caring, non-competitive space. You don’t need to know how to code “well”; you need the willingness to learn, share and sustain your process in community.',
    'Hecho con 💜 por': 'Made with 💜 by',

    // ── convocatorias.html ──
    '🐞 Únete · Participa · Comparte': '🐞 Join · Take part · Share',
    'abiertas': 'join us',
    'Aquí encontrarás todas las formas de sumarte a Debug Colectiva: como voluntaria, compartiendo tu experiencia o siendo parte de nuestro programa universitario regional.':
        'Here you’ll find every way to join Debug Colectiva: as a volunteer, by sharing your experience or by being part of our regional university program.',
    'Voluntarias': 'Volunteers',
    'Voluntariado': 'Volunteering',
    'Convocatoria Voluntarias': 'Call for Volunteers',
    '¿Quieres ser parte del equipo que hace posible Debug Colectiva? Buscamos mujeres con ganas de acompañar, investigar y construir comunidad. Tu tiempo y experiencia pueden marcar la diferencia.':
        'Do you want to be part of the team that makes Debug Colectiva possible? We are looking for women eager to support others, do research and build community. Your time and experience can make a difference.',
    '100 Mujeres': '100 Women',
    'Encuesta': 'Survey',
    'Encuesta 100 Mujeres': '100 Women Survey',
    'Queremos conocer las experiencias de mujeres profesionales en Ciencias Sociales en espacios digitales y tecnológicos. Tu voz nos ayuda a construir una comunidad que responda a necesidades reales.':
        'We want to learn about the experiences of women professionals in the Social Sciences in digital and tech spaces. Your voice helps us build a community that responds to real needs.',

    // ── portafolios.html ──
    '🐞 Fundadoras · Mentoras · Proyectos': '🐞 Founders · Mentors · Projects',
    'Nuestro trabajo,': 'Our work,',
    'Aquí documentamos y compartimos los proyectos de las fundadoras y mentoras de Debug Colectiva.':
        'Here we document and share the projects of Debug Colectiva’s founders and mentors.',
    'Todos': 'All',
    'Datos': 'Data',
    'Género': 'Gender',
    'Investigación': 'Research',
    'Políticas públicas': 'Public policy',
    'Tecnología': 'Technology',
    'Metodología': 'Methodology',
    'Comunidad': 'Community',
    'Directora de Comunidad · Cofundadora': 'Community Director · Co-founder',
    'Directora de Formación Técnica y Metodología · Cofundadora': 'Director of Technical Training and Methodology · Co-founder',
    'Directora de Investigación · Cofundadora': 'Research Director · Co-founder',
    'Directora de Alianzas Estratégicas · Cofundadora': 'Director of Strategic Partnerships · Co-founder',
    'Directora de Género · Cofundadora': 'Gender Director · Co-founder',
    'Portafolio profesional': 'Professional portfolio',
    'El portafolio profesional de Carolina está enfocado en sus trabajos de código e investigación. El diseño de su portafolio está inspirado en la casa de Sojo en la ciudad de Sullana en Piura.':
        'Carolina’s professional portfolio focuses on her coding and research work. Its design is inspired by the Sojo house in the city of Sullana, Piura.',
    'Blog personal': 'Personal blog',
    'En este espacio Carolina prepara artículos técnicos en base a situaciones laborales.':
        'In this space Carolina writes technical articles based on workplace situations.',
    'Lee sus artículos →': 'Read her articles →',
    'Nombre del proyecto': 'Project name',
    'Descripción breve del proyecto. Qué se hizo, con qué enfoque y cuál fue el resultado o aporte principal.':
        'Short project description. What was done, with what approach, and what the main result or contribution was.',
    'Agregar proyecto': 'Add project',
    'Red de apoyo': 'Support network',
    'Mujeres con trayectoria que acompañan y fortalecen el trabajo de la comunidad. Cada mentora aporta desde su área de expertise.':
        'Experienced women who support and strengthen the community’s work. Each mentor contributes from her area of expertise.',
    'Nombre Mentora': 'Mentor name',
    'Área de expertise': 'Area of expertise',
    'Breve descripción de la mentora: su trayectoria, lo que aporta a la comunidad y su enfoque de trabajo.':
        'Short description of the mentor: her background, what she brings to the community and her approach.',
    'Agregar mentora': 'Add mentor',

    // ── proyecto-ia_alt.html ──
    'Proyectos DEBUG 🐞': 'DEBUG Projects 🐞',
    'En': 'Under',
    'construcción': 'construction',
    'Estamos armando este proyecto con mucho cariño. Muy pronto encontrarás aquí todo el trabajo del equipo. Mientras tanto, nuestro tractor se encarga de dejar el terreno listo. 🚜':
        'We are building this project with lots of love. Very soon you’ll find all of the team’s work here. In the meantime, our tractor is getting the ground ready. 🚜',
    '🚧 Vuelve pronto 🚧': '🚧 Come back soon 🚧',
};

const LANG_KEY = 'site-lang';
const TRANSLATABLE_ATTRS = ['alt', 'aria-label', 'title', 'placeholder'];

// Normaliza espacios y saltos de línea para comparar con el diccionario
const normalize = (text) => text.replace(/\s+/g, ' ').trim();

// Guarda el texto original en español de cada nodo/atributo
const originalText = new WeakMap();
const originalAttrs = new WeakMap();
const originalHTML = new WeakMap();
let originalTitle = null;

function translate(text, lang) {
    if (lang === 'es') return text;
    const key = normalize(text);
    const translated = TRANSLATIONS[key];
    if (translated === undefined) return text;
    // Conserva los espacios de inicio/fin del texto original
    const lead = text.match(/^\s*/)[0];
    const trail = text.match(/\s*$/)[0];
    return lead + translated + trail;
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;

    if (originalTitle === null) originalTitle = document.title;
    document.title = translate(originalTitle, lang);

    // Elementos con data-en: se reemplaza su contenido completo
    document.querySelectorAll('[data-en]').forEach((el) => {
        if (!originalHTML.has(el)) originalHTML.set(el, el.innerHTML);
        if (lang === 'en') el.textContent = el.dataset.en;
        else el.innerHTML = originalHTML.get(el);
    });

    // Nodos de texto
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            if (!parent || parent.closest('script, style, svg, [data-en], #langSwitch')) {
                return NodeFilter.FILTER_REJECT;
            }
            return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        },
    });
    let node;
    while ((node = walker.nextNode())) {
        if (!originalText.has(node)) originalText.set(node, node.nodeValue);
        const value = translate(originalText.get(node), lang);
        if (node.nodeValue !== value) node.nodeValue = value;
    }

    // Atributos (alt, aria-label, title, placeholder)
    const selector = TRANSLATABLE_ATTRS.map((a) => `[${a}]`).join(',');
    document.body.querySelectorAll(selector).forEach((el) => {
        if (!originalAttrs.has(el)) {
            const saved = {};
            TRANSLATABLE_ATTRS.forEach((a) => {
                if (el.hasAttribute(a)) saved[a] = el.getAttribute(a);
            });
            originalAttrs.set(el, saved);
        }
        const saved = originalAttrs.get(el);
        Object.keys(saved).forEach((a) => el.setAttribute(a, translate(saved[a], lang)));
    });

    document.querySelectorAll('#langSwitch [data-lang]').forEach((btn) => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active);
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* sin almacenamiento */ }
}

function getSavedLanguage() {
    try { return localStorage.getItem(LANG_KEY) || 'es'; } catch (e) { return 'es'; }
}

// Botón flotante ES | EN (se agrega solo, igual en todas las páginas)
function createLanguageSwitch() {
    const style = document.createElement('style');
    style.textContent = `
        #langSwitch {
            position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 1000;
            display: flex; padding: 4px; gap: 2px;
            background: #fff; border: 2px solid #4A148C; border-radius: 999px;
            box-shadow: 0 6px 20px rgba(74, 20, 140, .18);
            font-family: 'DM Sans', sans-serif;
        }
        #langSwitch button {
            border: 0; background: transparent; cursor: pointer;
            padding: .4rem .8rem; border-radius: 999px;
            font: 700 .85rem 'DM Sans', sans-serif; letter-spacing: .05em;
            color: #4A148C; transition: background .2s, color .2s;
        }
        #langSwitch button:hover { background: #F8F4FF; }
        #langSwitch button.active { background: #D81B60; color: #fff; }
        #langSwitch button:focus-visible { outline: 2px solid #F9C228; outline-offset: 2px; }
        @media (max-width: 600px) {
            #langSwitch { right: 1rem; bottom: 1rem; }
        }
    `;
    document.head.appendChild(style);

    const wrap = document.createElement('div');
    wrap.id = 'langSwitch';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Idioma / Language');
    wrap.innerHTML =
        '<button type="button" data-lang="es" lang="es">ES</button>' +
        '<button type="button" data-lang="en" lang="en">EN</button>';
    wrap.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-lang]');
        if (btn) applyLanguage(btn.dataset.lang);
    });
    document.body.appendChild(wrap);
}

document.addEventListener('DOMContentLoaded', () => {
    createLanguageSwitch();
    applyLanguage(getSavedLanguage());
});

        // Repensar la IA - Galería de fotos
            // Carrusel de galería (3 imágenes visibles)
        const carousel = document.getElementById('galeriaCarousel');
        if (carousel) {
            const track = carousel.querySelector('.carousel-track');
            const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
            const dotsContainer = carousel.querySelector('.carousel-dots');

            function getSlidesToShow() {
                if (window.innerWidth <= 600) return 1;
                if (window.innerWidth <= 900) return 2;
                return 3;
            }

            let slidesToShow = getSlidesToShow();
            let currentIndex = 0;
            const maxIndex = () => Math.max(0, slides.length - slidesToShow);

            function renderDots() {
                dotsContainer.innerHTML = '';
                for (let i = 0; i <= maxIndex(); i++) {
                    const dot = document.createElement('button');
                    dot.type = 'button';
                    dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
                    dot.addEventListener('click', () => goToSlide(i));
                    dotsContainer.appendChild(dot);
                }
            }

            function goToSlide(index) {
                currentIndex = Math.max(0, Math.min(index, maxIndex()));
                const slideWidth = slides[0].getBoundingClientRect().width + 16; // 16px = gap 1rem
                track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                Array.from(dotsContainer.children).forEach((d, i) => d.classList.toggle('active', i === currentIndex));
            }

            carousel.querySelector('.carousel-prev').addEventListener('click', () => goToSlide(currentIndex - 1));
            carousel.querySelector('.carousel-next').addEventListener('click', () => goToSlide(currentIndex + 1));

            window.addEventListener('resize', () => {
                slidesToShow = getSlidesToShow();
                renderDots();
                goToSlide(Math.min(currentIndex, maxIndex()));
            });

            renderDots();

            // Autoplay, pausa al pasar el mouse
            let autoplay = setInterval(() => {
                goToSlide(currentIndex >= maxIndex() ? 0 : currentIndex + 1);
            }, 4000);
            carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
            carousel.addEventListener('mouseleave', () => {
                autoplay = setInterval(() => goToSlide(currentIndex >= maxIndex() ? 0 : currentIndex + 1), 4000);
            });
        }
