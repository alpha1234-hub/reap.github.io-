/**
 * REAP i18n Engine
 * Lightweight client-side translation system: English / Español / বাংলা.
 * Elements opt in via data-i18n (textContent), data-i18n-html (innerHTML),
 * or data-i18n-placeholder (input/textarea placeholder).
 */

const I18N = {
  en: {
    'nav.home': 'Home', 'nav.about': 'About', 'nav.services': 'Services',
    'nav.techstack': 'Tech Stack', 'nav.projects': 'Projects',
    'nav.team': 'Team', 'nav.careers': 'Careers', 'nav.faq': 'FAQ', 'nav.contact': 'Contact', 'nav.letstalk': "Let's Talk",
    'nav.search': 'Search',

    'hero.badge': 'Translating Intelligence',
    'hero.h1': 'Intelligence, <span class="text-gradient">Engineered</span> for Reality.',
    'hero.p': 'We are a high-performance software and AI laboratory building the future of autonomous systems, computer vision, and medical diagnostics.',
    'hero.btn.projects': 'Our Projects',
    'hero.btn.learnmore': 'Learn More',

    'marquee.dl': 'Deep Learning', 'marquee.cv': 'Computer Vision', 'marquee.med': 'Medical AI',
    'marquee.agents': 'Autonomous Agents', 'marquee.pub': 'Research Publications', 'marquee.prod': 'Production Systems',

    'about.badge': 'Methodology', 'about.h2': 'How We Work',
    'about.p': 'Our name describes our cycle of innovation, carrying projects from theoretical discovery through to reliable deployment.',
    'about.floating.h4': 'Full-Cycle Pipeline',
    'about.floating.p': 'From literature review to production deployment, in one continuous, self-improving loop.',
    'method.r.title': 'Research',
    'method.r.p': 'We discover foundational principles, explore advanced deep learning architectures, and solve mathematical boundary constraints for vision and medical tasks.',
    'method.e.title': 'Evaluation',
    'method.e.p': 'Every breakthrough is subjected to rigorous, uncertainty-aware testing, benchmarking, and statistical checks to guarantee real-world safety.',
    'method.a.title': 'Agents',
    'method.a.p': 'We create dynamic, autonomous agent architectures capable of understanding complex user intents and acting inside automated environments.',
    'method.p.title': 'Production',
    'method.p.p': 'We deploy optimized, low-latency codebases tailored for edge systems, from clinical MRI scanners to real-time train locomotive safety controllers.',

    'services.badge': 'Capabilities', 'services.h2': 'Our Expertise',
    'services.p': 'Combining rigorous research expertise with robust production-ready software development.',
    'service.ai.title': 'AI Development',
    'service.ai.p': 'End-to-end design of deep learning models, uncertainty-aware medical vision solutions, active learning classifiers, and generative LLM agents.',
    'service.ai.f1': 'Uncertainty Quantification', 'service.ai.f2': 'Active Learning Integration', 'service.ai.f3': 'Neural Network Optimization',
    'service.web.title': 'Website Development',
    'service.web.p': 'High-end, dynamic websites built with premium styling and glassmorphic designs. Responsive layouts tailored for high performance and strict SEO.',
    'service.web.f1': 'Premium Interactions', 'service.web.f2': 'Responsive Frameworks', 'service.web.f3': 'SEO Optimization',
    'service.research.title': 'Research Help',
    'service.research.p': 'Accelerating academic and commercial pipelines. Providing robust algorithmic proofings, data pipelines, paper formatting, and experimental evaluations.',
    'service.research.f1': 'Experimental Validations', 'service.research.f2': 'LaTeX Paper Formatting', 'service.research.f3': 'Data Pipeline Design',

    'tech.badge': 'Toolbox', 'tech.h2': 'Our Tech Stack',
    'tech.p': 'The frameworks, languages, and infrastructure our directors and engineers use to move from research notebook to production system.',
    'tech.filter.all': 'All Tools', 'tech.filter.ai': 'AI & ML', 'tech.filter.web': 'Web & Cloud', 'tech.filter.research': 'Research & Data',

    'projects.badge': 'Portfolio', 'projects.h2': 'Recent Projects',
    'projects.p': 'Explore some of our published research contributions in medical diagnostics, railway safety, and image processing.',
    'tag.mri': 'Medical MRI', 'tag.kidney': 'Kidney Disease', 'tag.railway': 'Machine Vision',
    'tag.deblur': 'Image Restorations', 'tag.spleen': 'Medical Imaging', 'tag.agents': 'Autonomous Agents',
    'projects.cite': 'Cite', 'projects.cite.copied': 'Copied!',

    'careers.badge': "We're Hiring", 'careers.h2': 'Join the Team',
    'careers.p': 'Open roles at REAP. Review the listing below and apply directly — no account or portal required.',
    'careers.apply.cta': 'Apply Now',
    'careers.general.title': "Don't see the right role?",
    'careers.general.p': "We're always open to hearing from strong engineers and researchers. Send a general application and we'll reach out if there's a fit.",
    'careers.general.btn': 'Send General Application',
    'careers.general.roleLabel': 'General Application',
    'careers.apply.title': 'Apply for a Role',
    'careers.apply.name': 'Full Name *', 'careers.apply.email': 'Email Address *',
    'careers.apply.cv': 'CV / Resume', 'careers.apply.message': 'Cover Message (optional)',
    'careers.apply.message.ph': "A few lines about why you'd be a good fit...",
    'careers.apply.submit': 'Continue via Email',
    'careers.apply.note': "This opens your email app with your details filled in. Please attach your CV/resume before sending — files can't be uploaded directly from this page.",

    'team.badge': 'Team', 'team.h2': 'Our Directors',
    'team.p': 'Meet the leadership driving the research, talent development, and technical output of REAP.',
    'team.sowad.role': 'Technical Director',
    'team.sowad.bio': "Academic researcher specializing in deep learning, medical image segmentation (spleen/kidney), and automated vision. Directs REAP's engineering standards and design architectures.",
    'team.raju.role': 'Managing Director',
    'team.raju.bio': 'AI and Data Engineer specializing in Generative AI, machine learning, and scalable cloud data systems. Builds cloud-native AI platforms and production-grade Generative AI applications.',
    'team.ekramul.role': 'HR Director',
    'team.ekramul.bio': 'Leads recruitment strategies and shapes the engineering culture at REAP. Focuses on hiring elite developers, researcher onboarding, and team training tracks.',
    'team.imran.role': 'Executive Director',
    'team.imran.bio': 'Operations executive linking deep-learning projects with commercial partnerships. Manages project lifecycles, contract specifications, and product distributions.',

    'bio.toggle.more': 'Read Full Profile', 'bio.toggle.less': 'Show Less',
    'bio.sowad.experience.title': 'Professional Experience',
    'bio.sowad.experience.1': 'Senior Executive, IT — East Coast Group, Dhaka, Bangladesh',
    'bio.sowad.experience.2': 'Research Assistant — MSIP Lab, Woosong University, South Korea',
    'bio.sowad.experience.3': 'Research Member — Mahdy Research Academy, North South University, Dhaka, Bangladesh',
    'bio.sowad.funding.title': 'Scholarships & Funding Offers',
    'bio.sowad.funding.1': 'Iowa State University — Full-funded scholarship (MS)',
    'bio.sowad.funding.2': 'Texas State University — Full-funded scholarship (MS)',
    'bio.sowad.funding.3': 'University of Calgary — Partial funding (MS)',
    'bio.sowad.funding.4': 'Washington State University — GA/RA-ship (MS)',
    'bio.sowad.funding.5': 'Woosong University — Full-funded scholarship (MS)',
    'bio.sowad.funding.6': 'Erasmus Mundus IPCVAI — Selected for 2nd round',
    'bio.sowad.reviewer.title': 'Reviewer & Academic Service',
    'bio.sowad.reviewer.1': 'Reviewer for 2 reputed international journals',
    'bio.sowad.reviewer.2': 'Reviewer for 3 IEEE-sponsored conferences',
    'bio.sowad.hobby.title': 'Beyond the Lab',
    'bio.sowad.hobby.text': 'A chess enthusiast outside of work — a favorite line on the game: "There are two types of sacrifices: correct ones and mine."',
    'bio.sowad.photo2.text': 'Defending his graduate thesis alongside collaborators — the closing milestone of a research track spanning generative modeling and sequential deep learning architectures.',
    'bio.sowad.photo3.text': 'Presenting deep learning methods for river bank erosion analysis — applying his computer vision work beyond medical imaging into environmental monitoring.',

    'bio.raju.experience.title': 'Professional Experience',
    'bio.raju.experience.1': 'AI and Data Engineer — building cloud-native AI platforms and production-grade Generative AI applications',
    'bio.raju.experience.2': 'Managing Director & AI/Data Engineering Lead — REAP Systems',
    'bio.raju.education.title': 'Core Skills',
    'bio.raju.education.1': 'Data Engineering & ETL Pipeline Architecture (AWS, Google Cloud Platform)',
    'bio.raju.education.2': 'LLMOps — Large Language Model Operations',
    'bio.raju.education.3': 'Retrieval-Augmented Generation (RAG) & Agentic AI Workflows',
    'bio.raju.achievements.title': 'Education & Research',
    'bio.raju.achievements.1': 'Department of Computer Science — University of South Dakota',
    'bio.raju.achievements.2': 'Published research in text mining, deep learning, and AI impact studies',
    'bio.raju.hobby.title': 'Beyond the Lab',
    'bio.raju.hobby.text': 'An avid weekend badminton player — the go-to line after a lost match: "The scoreboard is just a suggestion. Ask for a rematch."',

    'bio.ekramul.experience.title': 'Professional Experience',
    'bio.ekramul.experience.1': 'Talent Acquisition Manager — BrightPath Technologies, Dhaka, Bangladesh',
    'bio.ekramul.experience.2': 'HR Business Partner — Vantage Software Group, Dhaka, Bangladesh',
    'bio.ekramul.experience.3': 'People Operations Lead — REAP Systems, Dhaka, Bangladesh',
    'bio.ekramul.education.title': 'Education & Certifications',
    'bio.ekramul.education.1': "Master's in Business Management — University of Toronto, Ontario, Canada",
    'bio.ekramul.achievements.title': 'Achievements & Service',
    'bio.ekramul.achievements.1': "Scaled REAP's engineering team from 3 to 25+ hires in under two years",
    'bio.ekramul.achievements.2': 'Guest speaker on tech-talent retention at regional HR summits',
    'bio.ekramul.hobby.title': 'Beyond the Lab',
    'bio.ekramul.hobby.text': 'Spends weekends mentoring first-time job seekers on interview skills — a favorite reminder to candidates: "Nervous is fine. Unprepared is not."',

    'bio.imran.experience.title': 'Professional Experience',
    'bio.imran.experience.1': 'Business Development Manager — Meridian Ventures, Dhaka, Bangladesh',
    'bio.imran.experience.2': 'Operations Lead — Skyline Commerce Group, Dhaka, Bangladesh',
    'bio.imran.experience.3': 'Partnerships Director — REAP Systems, Dhaka, Bangladesh',
    'bio.imran.education.title': 'Education & Certifications',
    'bio.imran.education.1': 'MBA in Strategic Management — Institute of Business Administration (IBA), University of Dhaka',
    'bio.imran.education.2': 'PMP — Project Management Professional',
    'bio.imran.achievements.title': 'Achievements & Service',
    'bio.imran.achievements.1': 'Negotiated and closed 20+ commercial partnerships for AI deployment contracts',
    'bio.imran.achievements.2': 'Advisory board member for a regional startup incubator',
    'bio.imran.hobby.title': 'Beyond the Lab',
    'bio.imran.hobby.text': 'A weekend cricket enthusiast who still insists on opening the batting order — a favorite line: "Form is temporary. Confidence is permanent."',

    'testimonials.badge': 'Client Feedback', 'testimonials.h2': 'What Clients Say',
    'testimonials.p': "A few words from the teams and researchers we've partnered with.",
    'testimonials.1.text': "REAP took our diagnostic imaging pipeline from research prototype to a production system our clinicians actually trust. Communication was excellent throughout.",
    'testimonials.1.name': 'Amina Chowdhury', 'testimonials.1.role': 'Chief Radiologist, Northfield Diagnostic Center',
    'testimonials.2.text': "They didn't just build what we asked for — they questioned our assumptions and delivered something more robust. Rare in this industry.",
    'testimonials.2.name': 'Marcus Lindqvist', 'testimonials.2.role': 'CTO, Veyra Logistics',
    'testimonials.3.text': "Our research paper wouldn't have made the submission deadline without REAP's data pipeline support. Fast, precise, and genuinely collaborative.",
    'testimonials.3.name': 'Elena Vasquez', 'testimonials.3.role': 'Applied ML Lab, Coastal Tech University',
    'testimonials.4.text': 'The website they built converts better than anything our internal team shipped in two years.',
    'testimonials.4.name': 'Priya Nair', 'testimonials.4.role': 'Head of Marketing, Solace Wellness',

    'faq.badge': 'FAQ', 'faq.h2': 'Common Questions',
    'faq.p': 'Answers to what prospective clients and collaborators ask us most.',
    'faq.q1': 'What industries do you typically work with?',
    'faq.a1': 'Most of our work is in medical diagnostics, railway and industrial safety, and applied research — but our core stack (deep learning, computer vision, and autonomous agents) transfers to most data-rich industries.',
    'faq.q2': 'How long does a typical project take?',
    'faq.a2': 'A focused website build usually takes 2-3 weeks. AI/ML engagements range from a few weeks for a prototype to a few months for a production-grade, uncertainty-aware system, depending on data readiness and scope.',
    'faq.q3': 'Do you offer support after deployment?',
    'faq.a3': 'Yes. Every engagement includes a post-launch support window, and we offer ongoing maintenance and monitoring retainers for teams that want a long-term partner rather than a one-off vendor.',
    'faq.q4': 'How do you handle data privacy and confidentiality?',
    'faq.a4': 'All client data is handled under NDA by default. Medical and other regulated data is processed under strict access controls, and we scope each engagement to your compliance requirements before any data changes hands.',
    'faq.q5': 'Can you work with our existing tech stack?',
    'faq.a5': 'In most cases, yes. We build on standard, widely-supported frameworks (see our Tech Stack section above) specifically so our work integrates cleanly into whatever infrastructure you already run.',
    'faq.q6': 'Do you take on academic research collaborations?',
    'faq.a6': 'Regularly. Several of our published projects started as collaborations with university labs — from data pipeline design to co-authored experimental evaluations.',

    'contact.badge': 'Get in Touch', 'contact.h2': 'Connect With Us',
    'contact.p': 'Have questions about our research or need custom AI/website solutions? Contact us directly.',
    'contact.hq.title': 'Headquarters', 'contact.phone.title': 'Phone Number', 'contact.email.title': 'Email Address',
    'contact.form.title': 'Send Message', 'contact.form.subtitle': 'Fill out the form below and we will respond within 24 hours.',
    'contact.form.name': 'Full Name *', 'contact.form.email': 'Email Address *', 'contact.form.subject': 'Subject', 'contact.form.message': 'Message *',
    'contact.form.name.ph': 'John Doe', 'contact.form.subject.ph': 'Project Inquiry / Research Assistance', 'contact.form.message.ph': 'Tell us about your requirements...',
    'contact.form.submit': 'Send Message', 'contact.form.sending': 'Sending Message...',
    'form.error.required': 'Please fill out all required fields.',
    'form.error.email': 'Please enter a valid email address.',
    'form.success': 'Thank you, {name}! Your message has been received. Our directors will contact you shortly.',

    'footer.tagline': 'Building high-integrity AI systems, advanced machine vision tools, and reliable web applications.',
    'footer.nav.title': 'Navigation', 'footer.nav.home': 'Home', 'footer.nav.about': 'About Methodology',
    'footer.nav.services': 'Our Capabilities', 'footer.nav.tech': 'Tech Stack', 'footer.nav.projects': 'Recent Projects',
    'footer.nav.team': 'Leadership Team', 'footer.nav.careers': 'Careers', 'footer.nav.faq': 'FAQ',
    'footer.cap.title': 'Capabilities', 'footer.cap1': 'AI & Deep Learning', 'footer.cap2': 'Active Learning CT',
    'footer.cap3': 'Web Architectures', 'footer.cap4': 'Research Consulting',
    'footer.inspiration.title': 'Inspiration',
    'footer.copyright': '© 2026 REAP Inc. All rights reserved. Registered address in Pierre, SD, USA.',
    'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms of Service'
  },

  es: {
    'nav.home': 'Inicio', 'nav.about': 'Acerca de', 'nav.services': 'Servicios',
    'nav.techstack': 'Tecnologías', 'nav.projects': 'Proyectos',
    'nav.team': 'Equipo', 'nav.careers': 'Empleo', 'nav.faq': 'Preguntas', 'nav.contact': 'Contacto', 'nav.letstalk': 'Hablemos',
    'nav.search': 'Buscar',

    'hero.badge': 'Traduciendo la Inteligencia',
    'hero.h1': 'Inteligencia, <span class="text-gradient">Diseñada</span> para la Realidad.',
    'hero.p': 'Somos un laboratorio de software e IA de alto rendimiento que construye el futuro de los sistemas autónomos, la visión por computadora y el diagnóstico médico.',
    'hero.btn.projects': 'Nuestros Proyectos',
    'hero.btn.learnmore': 'Saber Más',

    'marquee.dl': 'Aprendizaje Profundo', 'marquee.cv': 'Visión por Computadora', 'marquee.med': 'IA Médica',
    'marquee.agents': 'Agentes Autónomos', 'marquee.pub': 'Publicaciones de Investigación', 'marquee.prod': 'Sistemas en Producción',

    'about.badge': 'Metodología', 'about.h2': 'Cómo Trabajamos',
    'about.p': 'Nuestro nombre describe nuestro ciclo de innovación, que lleva los proyectos desde el descubrimiento teórico hasta una implementación confiable.',
    'about.floating.h4': 'Proceso de Ciclo Completo',
    'about.floating.p': 'Desde la revisión de literatura hasta la implementación en producción, en un ciclo continuo y autoperfeccionable.',
    'method.r.title': 'Investigación',
    'method.r.p': 'Descubrimos principios fundamentales, exploramos arquitecturas avanzadas de aprendizaje profundo y resolvemos restricciones matemáticas de frontera para tareas de visión y medicina.',
    'method.e.title': 'Evaluación',
    'method.e.p': 'Cada avance se somete a pruebas rigurosas y conscientes de la incertidumbre, comparativas y verificaciones estadísticas para garantizar la seguridad en el mundo real.',
    'method.a.title': 'Agentes',
    'method.a.p': 'Creamos arquitecturas de agentes dinámicos y autónomos capaces de comprender intenciones complejas del usuario y actuar dentro de entornos automatizados.',
    'method.p.title': 'Producción',
    'method.p.p': 'Implementamos bases de código optimizadas y de baja latencia, diseñadas para sistemas de borde, desde escáneres clínicos de resonancia magnética hasta controladores de seguridad de locomotoras en tiempo real.',

    'services.badge': 'Capacidades', 'services.h2': 'Nuestra Experiencia',
    'services.p': 'Combinando una sólida experiencia investigativa con un desarrollo de software robusto y listo para producción.',
    'service.ai.title': 'Desarrollo de IA',
    'service.ai.p': 'Diseño integral de modelos de aprendizaje profundo, soluciones de visión médica conscientes de la incertidumbre, clasificadores de aprendizaje activo y agentes LLM generativos.',
    'service.ai.f1': 'Cuantificación de Incertidumbre', 'service.ai.f2': 'Integración de Aprendizaje Activo', 'service.ai.f3': 'Optimización de Redes Neuronales',
    'service.web.title': 'Desarrollo Web',
    'service.web.p': 'Sitios web dinámicos de alta gama, construidos con estilos premium y diseños glassmórficos. Diseños responsivos orientados al alto rendimiento y un SEO riguroso.',
    'service.web.f1': 'Interacciones Premium', 'service.web.f2': 'Frameworks Responsivos', 'service.web.f3': 'Optimización SEO',
    'service.research.title': 'Ayuda en Investigación',
    'service.research.p': 'Aceleramos los procesos académicos y comerciales. Ofrecemos pruebas algorítmicas sólidas, pipelines de datos, formato de artículos y evaluaciones experimentales.',
    'service.research.f1': 'Validaciones Experimentales', 'service.research.f2': 'Formato de Artículos en LaTeX', 'service.research.f3': 'Diseño de Pipelines de Datos',

    'tech.badge': 'Herramientas', 'tech.h2': 'Nuestro Stack Tecnológico',
    'tech.p': 'Los frameworks, lenguajes e infraestructura que nuestros directores e ingenieros usan para pasar del cuaderno de investigación al sistema en producción.',
    'tech.filter.all': 'Todas', 'tech.filter.ai': 'IA y ML', 'tech.filter.web': 'Web y Nube', 'tech.filter.research': 'Investigación y Datos',

    'projects.badge': 'Portafolio', 'projects.h2': 'Proyectos Recientes',
    'projects.p': 'Explora algunas de nuestras contribuciones de investigación publicadas en diagnóstico médico, seguridad ferroviaria y procesamiento de imágenes.',
    'tag.mri': 'RM Médica', 'tag.kidney': 'Enfermedad Renal', 'tag.railway': 'Visión Artificial',
    'tag.deblur': 'Restauración de Imágenes', 'tag.spleen': 'Imágenes Médicas', 'tag.agents': 'Agentes Autónomos',
    'projects.cite': 'Citar', 'projects.cite.copied': '¡Copiado!',

    'careers.badge': 'Estamos Contratando', 'careers.h2': 'Únete al Equipo',
    'careers.p': 'Vacantes abiertas en REAP. Revisa el listado a continuación y postúlate directamente — no se necesita cuenta ni portal.',
    'careers.apply.cta': 'Postularme',
    'careers.general.title': '¿No encuentras el puesto adecuado?',
    'careers.general.p': 'Siempre estamos abiertos a conocer a ingenieros e investigadores talentosos. Envía una postulación general y te contactaremos si hay una buena opción.',
    'careers.general.btn': 'Enviar Postulación General',
    'careers.general.roleLabel': 'Postulación General',
    'careers.apply.title': 'Postularme a un Puesto',
    'careers.apply.name': 'Nombre Completo *', 'careers.apply.email': 'Correo Electrónico *',
    'careers.apply.cv': 'CV / Currículum', 'careers.apply.message': 'Mensaje de Presentación (opcional)',
    'careers.apply.message.ph': 'Algunas líneas sobre por qué serías una buena opción...',
    'careers.apply.submit': 'Continuar por Correo Electrónico',
    'careers.apply.note': 'Esto abrirá tu aplicación de correo con tus datos completados. Adjunta tu CV/currículum antes de enviarlo — los archivos no se pueden subir directamente desde esta página.',

    'team.badge': 'Equipo', 'team.h2': 'Nuestros Directores',
    'team.p': 'Conoce al liderazgo que impulsa la investigación, el desarrollo del talento y la producción técnica de REAP.',
    'team.sowad.role': 'Director Técnico',
    'team.sowad.bio': 'Investigador académico especializado en aprendizaje profundo, segmentación de imágenes médicas (bazo/riñón) y visión automatizada. Dirige los estándares de ingeniería y las arquitecturas de diseño de REAP.',
    'team.raju.role': 'Director General',
    'team.raju.bio': 'Ingeniero de IA y Datos especializado en IA Generativa, aprendizaje automático y sistemas de datos en la nube escalables. Construye plataformas de IA nativas de la nube y aplicaciones de IA Generativa de nivel de producción.',
    'team.ekramul.role': 'Directora de RR. HH.',
    'team.ekramul.bio': 'Lidera las estrategias de reclutamiento y da forma a la cultura de ingeniería en REAP. Se enfoca en contratar desarrolladores de élite, incorporar investigadores y capacitar equipos.',
    'team.imran.role': 'Director Ejecutivo',
    'team.imran.bio': 'Ejecutivo de operaciones que conecta proyectos de aprendizaje profundo con alianzas comerciales. Gestiona los ciclos de vida de los proyectos, las especificaciones contractuales y la distribución de productos.',

    'bio.toggle.more': 'Ver Perfil Completo', 'bio.toggle.less': 'Mostrar Menos',
    'bio.sowad.experience.title': 'Experiencia Profesional',
    'bio.sowad.experience.1': 'Ejecutivo Senior de TI — East Coast Group, Dhaka, Bangladesh',
    'bio.sowad.experience.2': 'Asistente de Investigación — MSIP Lab, Universidad Woosong, Corea del Sur',
    'bio.sowad.experience.3': 'Miembro de Investigación — Mahdy Research Academy, Universidad North South, Dhaka, Bangladesh',
    'bio.sowad.funding.title': 'Becas y Financiamiento',
    'bio.sowad.funding.1': 'Universidad Estatal de Iowa — Beca con financiamiento completo (Maestría)',
    'bio.sowad.funding.2': 'Universidad Estatal de Texas — Beca con financiamiento completo (Maestría)',
    'bio.sowad.funding.3': 'Universidad de Calgary — Financiamiento parcial (Maestría)',
    'bio.sowad.funding.4': 'Universidad Estatal de Washington — Beca GA/RA (Maestría)',
    'bio.sowad.funding.5': 'Universidad Woosong — Beca con financiamiento completo (Maestría)',
    'bio.sowad.funding.6': 'Erasmus Mundus IPCVAI — Seleccionado para la 2.ª ronda',
    'bio.sowad.reviewer.title': 'Revisión y Servicio Académico',
    'bio.sowad.reviewer.1': 'Revisor de 2 revistas académicas de prestigio',
    'bio.sowad.reviewer.2': 'Revisor de 3 conferencias patrocinadas por el IEEE',
    'bio.sowad.hobby.title': 'Más Allá del Laboratorio',
    'bio.sowad.hobby.text': 'Entusiasta del ajedrez fuera del trabajo — una frase favorita sobre el juego: "Hay dos tipos de sacrificios: los correctos y los míos."',
    'bio.sowad.photo2.text': 'Defendiendo su tesis de posgrado junto a sus colaboradores — el hito final de una trayectoria de investigación que abarca modelado generativo y arquitecturas de aprendizaje profundo secuencial.',
    'bio.sowad.photo3.text': 'Presentando métodos de aprendizaje profundo para el análisis de erosión de riberas fluviales — aplicando su trabajo en visión por computadora más allá de la imagenología médica, hacia el monitoreo ambiental.',

    'bio.raju.experience.title': 'Experiencia Profesional',
    'bio.raju.experience.1': 'Ingeniero de IA y Datos — construye plataformas de IA nativas de la nube y aplicaciones de IA Generativa de nivel de producción',
    'bio.raju.experience.2': 'Director General e Ingeniería de IA/Datos — REAP Systems',
    'bio.raju.education.title': 'Habilidades Clave',
    'bio.raju.education.1': 'Ingeniería de Datos y Arquitectura de Pipelines ETL (AWS, Google Cloud Platform)',
    'bio.raju.education.2': 'LLMOps — Operaciones de Modelos de Lenguaje Grandes',
    'bio.raju.education.3': 'Generación Aumentada por Recuperación (RAG) y Flujos de Trabajo de IA Agéntica',
    'bio.raju.achievements.title': 'Educación e Investigación',
    'bio.raju.achievements.1': 'Departamento de Ciencias de la Computación — Universidad de Dakota del Sur',
    'bio.raju.achievements.2': 'Investigación publicada en minería de texto, aprendizaje profundo y estudios de impacto de la IA',
    'bio.raju.hobby.title': 'Más Allá del Laboratorio',
    'bio.raju.hobby.text': 'Jugador entusiasta de bádminton los fines de semana — la frase de cabecera tras perder un partido: "El marcador es solo una sugerencia. Pide la revancha."',

    'bio.ekramul.experience.title': 'Experiencia Profesional',
    'bio.ekramul.experience.1': 'Gerente de Adquisición de Talento — BrightPath Technologies, Dhaka, Bangladesh',
    'bio.ekramul.experience.2': 'Socio/a de Negocios de RR. HH. — Vantage Software Group, Dhaka, Bangladesh',
    'bio.ekramul.experience.3': 'Líder de Operaciones de Personal — REAP Systems, Dhaka, Bangladesh',
    'bio.ekramul.education.title': 'Educación y Certificaciones',
    'bio.ekramul.education.1': 'Maestría en Administración de Empresas — Universidad de Toronto, Ontario, Canadá',
    'bio.ekramul.achievements.title': 'Logros y Servicio',
    'bio.ekramul.achievements.1': 'Amplió el equipo de ingeniería de REAP de 3 a más de 25 contrataciones en menos de dos años',
    'bio.ekramul.achievements.2': 'Oradora/Orador invitado sobre retención de talento tecnológico en cumbres regionales de RR. HH.',
    'bio.ekramul.hobby.title': 'Más Allá del Laboratorio',
    'bio.ekramul.hobby.text': 'Dedica los fines de semana a orientar a quienes buscan su primer empleo en técnicas de entrevista — un recordatorio favorito para los candidatos: "Estar nervioso está bien. No estar preparado, no."',

    'bio.imran.experience.title': 'Experiencia Profesional',
    'bio.imran.experience.1': 'Gerente de Desarrollo de Negocios — Meridian Ventures, Dhaka, Bangladesh',
    'bio.imran.experience.2': 'Líder de Operaciones — Skyline Commerce Group, Dhaka, Bangladesh',
    'bio.imran.experience.3': 'Director de Alianzas — REAP Systems, Dhaka, Bangladesh',
    'bio.imran.education.title': 'Educación y Certificaciones',
    'bio.imran.education.1': 'MBA en Gestión Estratégica — Instituto de Administración de Empresas (IBA), Universidad de Dhaka',
    'bio.imran.education.2': 'PMP — Project Management Professional',
    'bio.imran.achievements.title': 'Logros y Servicio',
    'bio.imran.achievements.1': 'Negoció y cerró más de 20 alianzas comerciales para contratos de implementación de IA',
    'bio.imran.achievements.2': 'Miembro del consejo asesor de una incubadora regional de startups',
    'bio.imran.hobby.title': 'Más Allá del Laboratorio',
    'bio.imran.hobby.text': 'Entusiasta del cricket los fines de semana que aún insiste en abrir el turno de bateo — una frase favorita: "La forma es temporal. La confianza es permanente."',

    'testimonials.badge': 'Opiniones de Clientes', 'testimonials.h2': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.p': 'Algunas palabras de los equipos e investigadores con los que hemos colaborado.',
    'testimonials.1.text': 'REAP llevó nuestro pipeline de imágenes diagnósticas de prototipo de investigación a un sistema en producción en el que nuestros médicos realmente confían. La comunicación fue excelente en todo momento.',
    'testimonials.1.name': 'Amina Chowdhury', 'testimonials.1.role': 'Jefa de Radiología, Northfield Diagnostic Center',
    'testimonials.2.text': 'No solo construyeron lo que pedimos — cuestionaron nuestras suposiciones y entregaron algo más robusto. Algo poco común en esta industria.',
    'testimonials.2.name': 'Marcus Lindqvist', 'testimonials.2.role': 'CTO, Veyra Logistics',
    'testimonials.3.text': 'Nuestro artículo de investigación no habría llegado a la fecha límite de envío sin el apoyo de REAP en el pipeline de datos. Rápidos, precisos y genuinamente colaborativos.',
    'testimonials.3.name': 'Elena Vasquez', 'testimonials.3.role': 'Laboratorio de ML Aplicado, Coastal Tech University',
    'testimonials.4.text': 'El sitio web que construyeron convierte mejor que cualquier cosa que nuestro equipo interno lanzó en dos años.',
    'testimonials.4.name': 'Priya Nair', 'testimonials.4.role': 'Directora de Marketing, Solace Wellness',

    'faq.badge': 'Preguntas Frecuentes', 'faq.h2': 'Preguntas Comunes',
    'faq.p': 'Respuestas a lo que más nos preguntan clientes y colaboradores potenciales.',
    'faq.q1': '¿Con qué industrias trabajan normalmente?',
    'faq.a1': 'La mayor parte de nuestro trabajo está en diagnóstico médico, seguridad ferroviaria e industrial, e investigación aplicada — pero nuestra base tecnológica (aprendizaje profundo, visión por computadora y agentes autónomos) se adapta a la mayoría de industrias ricas en datos.',
    'faq.q2': '¿Cuánto dura un proyecto típico?',
    'faq.a2': 'Un sitio web enfocado suele tardar de 2 a 3 semanas. Los proyectos de IA/ML van desde unas pocas semanas para un prototipo hasta varios meses para un sistema de nivel de producción consciente de la incertidumbre, según la preparación de los datos y el alcance.',
    'faq.q3': '¿Ofrecen soporte después del despliegue?',
    'faq.a3': 'Sí. Cada proyecto incluye una ventana de soporte posterior al lanzamiento, y ofrecemos contratos continuos de mantenimiento y monitoreo para equipos que buscan un socio a largo plazo en lugar de un proveedor puntual.',
    'faq.q4': '¿Cómo manejan la privacidad y confidencialidad de los datos?',
    'faq.a4': 'Todos los datos de los clientes se manejan bajo NDA de forma predeterminada. Los datos médicos y otros datos regulados se procesan bajo controles de acceso estrictos, y definimos cada proyecto según sus requisitos de cumplimiento antes de que se comparta cualquier dato.',
    'faq.q5': '¿Pueden trabajar con nuestra infraestructura tecnológica existente?',
    'faq.a5': 'En la mayoría de los casos, sí. Construimos sobre frameworks estándar y ampliamente compatibles (ver nuestra sección de Stack Tecnológico) precisamente para que nuestro trabajo se integre limpiamente en la infraestructura que ya usan.',
    'faq.q6': '¿Aceptan colaboraciones de investigación académica?',
    'faq.a6': 'Regularmente. Varios de nuestros proyectos publicados comenzaron como colaboraciones con laboratorios universitarios — desde el diseño de pipelines de datos hasta evaluaciones experimentales coautoras.',

    'contact.badge': 'Contáctanos', 'contact.h2': 'Conecta con Nosotros',
    'contact.p': '¿Tienes preguntas sobre nuestra investigación o necesitas soluciones personalizadas de IA/sitios web? Contáctanos directamente.',
    'contact.hq.title': 'Sede Central', 'contact.phone.title': 'Número de Teléfono', 'contact.email.title': 'Correo Electrónico',
    'contact.form.title': 'Enviar Mensaje', 'contact.form.subtitle': 'Completa el siguiente formulario y responderemos dentro de las 24 horas.',
    'contact.form.name': 'Nombre Completo *', 'contact.form.email': 'Correo Electrónico *', 'contact.form.subject': 'Asunto', 'contact.form.message': 'Mensaje *',
    'contact.form.name.ph': 'Juan Pérez', 'contact.form.subject.ph': 'Consulta de Proyecto / Asistencia en Investigación', 'contact.form.message.ph': 'Cuéntanos tus requerimientos...',
    'contact.form.submit': 'Enviar Mensaje', 'contact.form.sending': 'Enviando Mensaje...',
    'form.error.required': 'Por favor completa todos los campos obligatorios.',
    'form.error.email': 'Por favor ingresa un correo electrónico válido.',
    'form.success': '¡Gracias, {name}! Hemos recibido tu mensaje. Nuestros directores se pondrán en contacto contigo pronto.',

    'footer.tagline': 'Construyendo sistemas de IA de alta integridad, herramientas avanzadas de visión artificial y aplicaciones web confiables.',
    'footer.nav.title': 'Navegación', 'footer.nav.home': 'Inicio', 'footer.nav.about': 'Metodología',
    'footer.nav.services': 'Nuestras Capacidades', 'footer.nav.tech': 'Stack Tecnológico', 'footer.nav.projects': 'Proyectos Recientes',
    'footer.nav.team': 'Equipo Directivo', 'footer.nav.careers': 'Empleo', 'footer.nav.faq': 'Preguntas Frecuentes',
    'footer.cap.title': 'Capacidades', 'footer.cap1': 'IA y Aprendizaje Profundo', 'footer.cap2': 'TC de Aprendizaje Activo',
    'footer.cap3': 'Arquitecturas Web', 'footer.cap4': 'Consultoría en Investigación',
    'footer.inspiration.title': 'Inspiración',
    'footer.copyright': '© 2026 REAP Inc. Todos los derechos reservados. Dirección registrada en Pierre, SD, EE. UU.',
    'footer.privacy': 'Política de Privacidad', 'footer.terms': 'Términos de Servicio'
  },

  bn: {
    'nav.home': 'হোম', 'nav.about': 'সম্পর্কে', 'nav.services': 'সেবাসমূহ',
    'nav.techstack': 'প্রযুক্তি', 'nav.projects': 'প্রকল্প',
    'nav.team': 'দল', 'nav.careers': 'ক্যারিয়ার', 'nav.faq': 'প্রশ্নোত্তর', 'nav.contact': 'যোগাযোগ', 'nav.letstalk': 'চলুন কথা বলি',
    'nav.search': 'অনুসন্ধান',

    'hero.badge': 'বুদ্ধিমত্তার অনুবাদ',
    'hero.h1': 'বাস্তবতার জন্য <span class="text-gradient">প্রকৌশলকৃত</span> বুদ্ধিমত্তা।',
    'hero.p': 'আমরা একটি উচ্চ-কার্যক্ষমতাসম্পন্ন সফটওয়্যার ও এআই গবেষণাগার, যা স্বয়ংক্রিয় সিস্টেম, কম্পিউটার ভিশন এবং চিকিৎসা নির্ণয়ের ভবিষ্যৎ গড়ে তুলছে।',
    'hero.btn.projects': 'আমাদের প্রকল্প',
    'hero.btn.learnmore': 'আরও জানুন',

    'marquee.dl': 'ডিপ লার্নিং', 'marquee.cv': 'কম্পিউটার ভিশন', 'marquee.med': 'মেডিকেল এআই',
    'marquee.agents': 'স্বয়ংক্রিয় এজেন্ট', 'marquee.pub': 'গবেষণা প্রকাশনা', 'marquee.prod': 'প্রোডাকশন সিস্টেম',

    'about.badge': 'পদ্ধতি', 'about.h2': 'আমরা যেভাবে কাজ করি',
    'about.p': 'আমাদের নাম আমাদের উদ্ভাবনের চক্রকে তুলে ধরে, যা প্রকল্পগুলোকে তাত্ত্বিক আবিষ্কার থেকে নির্ভরযোগ্য বাস্তবায়ন পর্যন্ত নিয়ে যায়।',
    'about.floating.h4': 'সম্পূর্ণ-চক্র পাইপলাইন',
    'about.floating.p': 'সাহিত্য পর্যালোচনা থেকে শুরু করে প্রোডাকশন স্থাপন পর্যন্ত, একটি ধারাবাহিক ও স্ব-উন্নতিশীল চক্রে।',
    'method.r.title': 'গবেষণা',
    'method.r.p': 'আমরা মৌলিক নীতিমালা আবিষ্কার করি, উন্নত ডিপ লার্নিং আর্কিটেকচার অন্বেষণ করি, এবং ভিশন ও চিকিৎসাবিষয়ক কাজের জন্য গাণিতিক সীমাবদ্ধতা সমাধান করি।',
    'method.e.title': 'মূল্যায়ন',
    'method.e.p': 'প্রতিটি অগ্রগতি কঠোর, অনিশ্চয়তা-সচেতন পরীক্ষা, বেঞ্চমার্কিং এবং পরিসংখ্যানগত যাচাইয়ের মধ্য দিয়ে যায়, যাতে বাস্তব জগতে নিরাপত্তা নিশ্চিত করা যায়।',
    'method.a.title': 'এজেন্ট',
    'method.a.p': 'আমরা এমন গতিশীল, স্বয়ংক্রিয় এজেন্ট আর্কিটেকচার তৈরি করি যা জটিল ব্যবহারকারীর উদ্দেশ্য বুঝতে এবং স্বয়ংক্রিয় পরিবেশে কাজ করতে সক্ষম।',
    'method.p.title': 'প্রোডাকশন',
    'method.p.p': 'আমরা অপ্টিমাইজড, কম-লেটেন্সি কোডবেস স্থাপন করি যা এজ সিস্টেমের জন্য তৈরি — ক্লিনিক্যাল এমআরআই স্ক্যানার থেকে শুরু করে রিয়েল-টাইম ট্রেন নিরাপত্তা নিয়ন্ত্রক পর্যন্ত।',

    'services.badge': 'সক্ষমতা', 'services.h2': 'আমাদের দক্ষতা',
    'services.p': 'কঠোর গবেষণা দক্ষতাকে শক্তিশালী, প্রোডাকশন-রেডি সফটওয়্যার ডেভেলপমেন্টের সাথে সমন্বিত করে।',
    'service.ai.title': 'এআই ডেভেলপমেন্ট',
    'service.ai.p': 'ডিপ লার্নিং মডেল, অনিশ্চয়তা-সচেতন মেডিকেল ভিশন সমাধান, অ্যাক্টিভ লার্নিং ক্লাসিফায়ার এবং জেনারেটিভ এলএলএম এজেন্টের সম্পূর্ণ ডিজাইন।',
    'service.ai.f1': 'অনিশ্চয়তা পরিমাপ', 'service.ai.f2': 'অ্যাক্টিভ লার্নিং ইন্টিগ্রেশন', 'service.ai.f3': 'নিউরাল নেটওয়ার্ক অপ্টিমাইজেশন',
    'service.web.title': 'ওয়েবসাইট ডেভেলপমেন্ট',
    'service.web.p': 'প্রিমিয়াম স্টাইলিং ও গ্লাসমরফিক ডিজাইনে তৈরি উচ্চমানের, ডায়নামিক ওয়েবসাইট। উচ্চ কার্যক্ষমতা ও কঠোর এসইও-এর জন্য উপযোগী রেসপন্সিভ লেআউট।',
    'service.web.f1': 'প্রিমিয়াম ইন্টারঅ্যাকশন', 'service.web.f2': 'রেসপন্সিভ ফ্রেমওয়ার্ক', 'service.web.f3': 'এসইও অপ্টিমাইজেশন',
    'service.research.title': 'গবেষণা সহায়তা',
    'service.research.p': 'একাডেমিক ও বাণিজ্যিক পাইপলাইন ত্বরান্বিত করা। শক্তিশালী অ্যালগরিদমিক প্রমাণ, ডেটা পাইপলাইন, পেপার ফরম্যাটিং এবং পরীক্ষামূলক মূল্যায়ন প্রদান।',
    'service.research.f1': 'পরীক্ষামূলক যাচাই', 'service.research.f2': 'ল্যাটেক পেপার ফরম্যাটিং', 'service.research.f3': 'ডেটা পাইপলাইন ডিজাইন',

    'tech.badge': 'টুলবক্স', 'tech.h2': 'আমাদের টেক স্ট্যাক',
    'tech.p': 'যেসব ফ্রেমওয়ার্ক, ভাষা এবং অবকাঠামো ব্যবহার করে আমাদের পরিচালক ও প্রকৌশলীরা গবেষণা নোটবুক থেকে প্রোডাকশন সিস্টেমে পৌঁছান।',
    'tech.filter.all': 'সব', 'tech.filter.ai': 'এআই ও এমএল', 'tech.filter.web': 'ওয়েব ও ক্লাউড', 'tech.filter.research': 'গবেষণা ও ডেটা',

    'projects.badge': 'পোর্টফোলিও', 'projects.h2': 'সাম্প্রতিক প্রকল্প',
    'projects.p': 'চিকিৎসা নির্ণয়, রেলপথ নিরাপত্তা এবং ইমেজ প্রসেসিং-এ আমাদের প্রকাশিত গবেষণা অবদানগুলো দেখুন।',
    'tag.mri': 'মেডিকেল এমআরআই', 'tag.kidney': 'কিডনি রোগ', 'tag.railway': 'মেশিন ভিশন',
    'tag.deblur': 'ইমেজ পুনরুদ্ধার', 'tag.spleen': 'মেডিকেল ইমেজিং', 'tag.agents': 'স্বয়ংক্রিয় এজেন্ট',
    'projects.cite': 'সাইটেশন', 'projects.cite.copied': 'কপি হয়েছে!',

    'careers.badge': 'নিয়োগ চলছে', 'careers.h2': 'দলে যোগ দিন',
    'careers.p': 'REAP-এ খোলা পদসমূহ। নিচের তালিকা দেখুন এবং সরাসরি আবেদন করুন — কোনো অ্যাকাউন্ট বা পোর্টাল প্রয়োজন নেই।',
    'careers.apply.cta': 'আবেদন করুন',
    'careers.general.title': 'সঠিক পদটি খুঁজে পাননি?',
    'careers.general.p': 'আমরা সবসময় দক্ষ প্রকৌশলী ও গবেষকদের কাছ থেকে শুনতে আগ্রহী। একটি সাধারণ আবেদন পাঠান, উপযুক্ত হলে আমরা যোগাযোগ করব।',
    'careers.general.btn': 'সাধারণ আবেদন পাঠান',
    'careers.general.roleLabel': 'সাধারণ আবেদন',
    'careers.apply.title': 'পদের জন্য আবেদন করুন',
    'careers.apply.name': 'পুরো নাম *', 'careers.apply.email': 'ইমেইল ঠিকানা *',
    'careers.apply.cv': 'সিভি / রিজিউম', 'careers.apply.message': 'কভার বার্তা (ঐচ্ছিক)',
    'careers.apply.message.ph': 'আপনি কেন উপযুক্ত হবেন, তা নিয়ে কয়েকটি লাইন...',
    'careers.apply.submit': 'ইমেইলের মাধ্যমে এগিয়ে যান',
    'careers.apply.note': 'এটি আপনার ইমেইল অ্যাপ খুলবে, যেখানে আপনার তথ্য আগে থেকেই পূরণ করা থাকবে। পাঠানোর আগে অনুগ্রহ করে আপনার সিভি/রিজিউম সংযুক্ত করুন — এই পৃষ্ঠা থেকে সরাসরি ফাইল আপলোড করা যায় না।',

    'team.badge': 'দল', 'team.h2': 'আমাদের পরিচালকগণ',
    'team.p': 'REAP-এর গবেষণা, প্রতিভা উন্নয়ন এবং প্রযুক্তিগত অর্জনের পেছনে থাকা নেতৃত্বের সাথে পরিচিত হোন।',
    'team.sowad.role': 'টেকনিক্যাল ডিরেক্টর',
    'team.sowad.bio': 'ডিপ লার্নিং, মেডিকেল ইমেজ সেগমেন্টেশন (প্লীহা/কিডনি) এবং স্বয়ংক্রিয় ভিশনে বিশেষজ্ঞ একাডেমিক গবেষক। REAP-এর ইঞ্জিনিয়ারিং মানদণ্ড ও ডিজাইন আর্কিটেকচার পরিচালনা করেন।',
    'team.raju.role': 'ম্যানেজিং ডিরেক্টর',
    'team.raju.bio': 'জেনারেটিভ এআই, মেশিন লার্নিং এবং স্কেলযোগ্য ক্লাউড ডেটা সিস্টেমে বিশেষজ্ঞ এআই ও ডেটা ইঞ্জিনিয়ার। ক্লাউড-নেটিভ এআই প্ল্যাটফর্ম এবং প্রোডাকশন-গ্রেড জেনারেটিভ এআই অ্যাপ্লিকেশন তৈরি করেন।',
    'team.ekramul.role': 'এইচআর ডিরেক্টর',
    'team.ekramul.bio': 'নিয়োগ কৌশল পরিচালনা করেন এবং REAP-এর ইঞ্জিনিয়ারিং সংস্কৃতি গড়ে তোলেন। সেরা ডেভেলপার নিয়োগ, গবেষক অনবোর্ডিং এবং দলগত প্রশিক্ষণে মনোযোগী।',
    'team.imran.role': 'এক্সিকিউটিভ ডিরেক্টর',
    'team.imran.bio': 'ডিপ-লার্নিং প্রকল্পকে বাণিজ্যিক অংশীদারিত্বের সাথে যুক্তকারী অপারেশন্স নির্বাহী। প্রকল্পের জীবনচক্র, চুক্তির শর্তাবলী এবং পণ্য বিতরণ পরিচালনা করেন।',

    'bio.toggle.more': 'সম্পূর্ণ প্রোফাইল দেখুন', 'bio.toggle.less': 'কম দেখুন',
    'bio.sowad.experience.title': 'পেশাগত অভিজ্ঞতা',
    'bio.sowad.experience.1': 'সিনিয়র এক্সিকিউটিভ, আইটি — ইস্ট কোস্ট গ্রুপ, ঢাকা, বাংলাদেশ',
    'bio.sowad.experience.2': 'গবেষণা সহকারী — এমএসআইপি ল্যাব, উসং বিশ্ববিদ্যালয়, দক্ষিণ কোরিয়া',
    'bio.sowad.experience.3': 'গবেষণা সদস্য — মাহদী রিসার্চ একাডেমি, নর্থ সাউথ বিশ্ববিদ্যালয়, ঢাকা, বাংলাদেশ',
    'bio.sowad.funding.title': 'বৃত্তি ও অর্থায়ন',
    'bio.sowad.funding.1': 'আইওয়া স্টেট ইউনিভার্সিটি — সম্পূর্ণ অর্থায়িত বৃত্তি (এমএস)',
    'bio.sowad.funding.2': 'টেক্সাস স্টেট ইউনিভার্সিটি — সম্পূর্ণ অর্থায়িত বৃত্তি (এমএস)',
    'bio.sowad.funding.3': 'ক্যালগ্যারি বিশ্ববিদ্যালয় — আংশিক অর্থায়ন (এমএস)',
    'bio.sowad.funding.4': 'ওয়াশিংটন স্টেট ইউনিভার্সিটি — জিএ/আরএ-শিপ (এমএস)',
    'bio.sowad.funding.5': 'উসং বিশ্ববিদ্যালয় — সম্পূর্ণ অর্থায়িত বৃত্তি (এমএস)',
    'bio.sowad.funding.6': 'এরাসমুস মুন্ডুস আইপিসিভিএআই — দ্বিতীয় রাউন্ডের জন্য নির্বাচিত',
    'bio.sowad.reviewer.title': 'পর্যালোচক ও একাডেমিক সেবা',
    'bio.sowad.reviewer.1': '২টি স্বনামধন্য জার্নালের পর্যালোচক',
    'bio.sowad.reviewer.2': 'আইইইই-স্পনসরড ৩টি কনফারেন্সের পর্যালোচক',
    'bio.sowad.hobby.title': 'ল্যাবের বাইরে',
    'bio.sowad.hobby.text': 'কাজের বাইরে দাবার প্রতি বিশেষ আগ্রহ — খেলাটি নিয়ে একটি প্রিয় উক্তি: "দুই ধরনের বলিদান আছে: সঠিক বলিদান, আর আমারটা।"',
    'bio.sowad.photo2.text': 'সহকর্মীদের সাথে তার স্নাতকোত্তর থিসিস উপস্থাপন করছেন — জেনারেটিভ মডেলিং ও সিকোয়েন্সিয়াল ডিপ লার্নিং আর্কিটেকচার নিয়ে একটি গবেষণা যাত্রার সমাপ্তি।',
    'bio.sowad.photo3.text': 'নদীর তীর ভাঙন বিশ্লেষণের জন্য ডিপ লার্নিং পদ্ধতি উপস্থাপন করছেন — মেডিকেল ইমেজিং ছাড়িয়ে পরিবেশ পর্যবেক্ষণে তার কম্পিউটার ভিশন কাজের প্রয়োগ।',

    'bio.raju.experience.title': 'পেশাগত অভিজ্ঞতা',
    'bio.raju.experience.1': 'এআই ও ডেটা ইঞ্জিনিয়ার — ক্লাউড-নেটিভ এআই প্ল্যাটফর্ম ও প্রোডাকশন-গ্রেড জেনারেটিভ এআই অ্যাপ্লিকেশন তৈরি করেন',
    'bio.raju.experience.2': 'ম্যানেজিং ডিরেক্টর ও এআই/ডেটা ইঞ্জিনিয়ারিং লিড — REAP Systems',
    'bio.raju.education.title': 'মূল দক্ষতা',
    'bio.raju.education.1': 'ডেটা ইঞ্জিনিয়ারিং ও ইটিএল পাইপলাইন আর্কিটেকচার (AWS, Google Cloud Platform)',
    'bio.raju.education.2': 'LLMOps — লার্জ ল্যাঙ্গুয়েজ মডেল অপারেশনস',
    'bio.raju.education.3': 'রিট্রিভাল-অগমেন্টেড জেনারেশন (RAG) ও এজেন্টিক এআই ওয়ার্কফ্লো',
    'bio.raju.achievements.title': 'শিক্ষা ও গবেষণা',
    'bio.raju.achievements.1': 'কম্পিউটার সায়েন্স বিভাগ — ইউনিভার্সিটি অব সাউথ ডাকোটা',
    'bio.raju.achievements.2': 'টেক্সট মাইনিং, ডিপ লার্নিং এবং এআই প্রভাব সংক্রান্ত গবেষণায় প্রকাশিত কাজ',
    'bio.raju.hobby.title': 'ল্যাবের বাইরে',
    'bio.raju.hobby.text': 'সপ্তাহান্তে ব্যাডমিন্টন খেলতে ভালোবাসেন — ম্যাচ হারার পর তার প্রিয় উক্তি: "স্কোরবোর্ড তো একটা পরামর্শ মাত্র। আরেকবার খেলার সুযোগ চাই।"',

    'bio.ekramul.experience.title': 'পেশাগত অভিজ্ঞতা',
    'bio.ekramul.experience.1': 'ট্যালেন্ট অ্যাকুইজিশন ম্যানেজার — ব্রাইটপাথ টেকনোলজিস, ঢাকা, বাংলাদেশ',
    'bio.ekramul.experience.2': 'এইচআর বিজনেস পার্টনার — ভ্যানটেজ সফটওয়্যার গ্রুপ, ঢাকা, বাংলাদেশ',
    'bio.ekramul.experience.3': 'পিপল অপারেশনস লিড — REAP Systems, ঢাকা, বাংলাদেশ',
    'bio.ekramul.education.title': 'শিক্ষা ও সার্টিফিকেশন',
    'bio.ekramul.education.1': 'মাস্টার্স ইন বিজনেস ম্যানেজমেন্ট — ইউনিভার্সিটি অব টরন্টো, অন্টারিও, কানাডা',
    'bio.ekramul.achievements.title': 'অর্জন ও সেবা',
    'bio.ekramul.achievements.1': 'দুই বছরের মধ্যে REAP-এর ইঞ্জিনিয়ারিং দল ৩ থেকে ২৫+ সদস্যে সম্প্রসারণ',
    'bio.ekramul.achievements.2': 'আঞ্চলিক এইচআর সম্মেলনে টেক-ট্যালেন্ট ধরে রাখা বিষয়ে আমন্ত্রিত বক্তা',
    'bio.ekramul.hobby.title': 'ল্যাবের বাইরে',
    'bio.ekramul.hobby.text': 'সপ্তাহান্তে নতুন চাকরিপ্রার্থীদের ইন্টারভিউ দক্ষতায় পরামর্শ দিতে ভালোবাসেন — প্রার্থীদের প্রতি একটি প্রিয় পরামর্শ: "নার্ভাস থাকা ঠিক আছে। অপ্রস্তুত থাকা নয়।"',

    'bio.imran.experience.title': 'পেশাগত অভিজ্ঞতা',
    'bio.imran.experience.1': 'বিজনেস ডেভেলপমেন্ট ম্যানেজার — মেরিডিয়ান ভেঞ্চারস, ঢাকা, বাংলাদেশ',
    'bio.imran.experience.2': 'অপারেশনস লিড — স্কাইলাইন কমার্স গ্রুপ, ঢাকা, বাংলাদেশ',
    'bio.imran.experience.3': 'পার্টনারশিপস ডিরেক্টর — REAP Systems, ঢাকা, বাংলাদেশ',
    'bio.imran.education.title': 'শিক্ষা ও সার্টিফিকেশন',
    'bio.imran.education.1': 'এমবিএ ইন স্ট্র্যাটেজিক ম্যানেজমেন্ট — ইনস্টিটিউট অব বিজনেস অ্যাডমিনিস্ট্রেশন (আইবিএ), ঢাকা বিশ্ববিদ্যালয়',
    'bio.imran.education.2': 'PMP — Project Management Professional',
    'bio.imran.achievements.title': 'অর্জন ও সেবা',
    'bio.imran.achievements.1': 'এআই স্থাপন চুক্তির জন্য ২০+ বাণিজ্যিক অংশীদারিত্ব আলোচনা ও চূড়ান্তকরণ',
    'bio.imran.achievements.2': 'একটি আঞ্চলিক স্টার্টআপ ইনকিউবেটরের উপদেষ্টা বোর্ড সদস্য',
    'bio.imran.hobby.title': 'ল্যাবের বাইরে',
    'bio.imran.hobby.text': 'সপ্তাহান্তে ক্রিকেট খেলতে ভালোবাসেন, এখনো মনে করেন ওপেনিং ব্যাটিং করা উচিত — একটি প্রিয় উক্তি: "ফর্ম সাময়িক। আত্মবিশ্বাস চিরস্থায়ী।"',

    'testimonials.badge': 'ক্লায়েন্ট মতামত', 'testimonials.h2': 'ক্লায়েন্টরা যা বলেন',
    'testimonials.p': 'যেসব দল ও গবেষকদের সাথে আমরা কাজ করেছি, তাদের কিছু মন্তব্য।',
    'testimonials.1.text': 'REAP আমাদের ডায়াগনস্টিক ইমেজিং পাইপলাইনকে গবেষণা প্রোটোটাইপ থেকে এমন একটি প্রোডাকশন সিস্টেমে রূপান্তরিত করেছে, যার উপর আমাদের চিকিৎসকরা সত্যিকার অর্থেই আস্থা রাখেন। পুরো সময় যোগাযোগ ছিল চমৎকার।',
    'testimonials.1.name': 'আমিনা চৌধুরী', 'testimonials.1.role': 'চিফ রেডিওলজিস্ট, নর্থফিল্ড ডায়াগনস্টিক সেন্টার',
    'testimonials.2.text': 'তারা শুধু যা চেয়েছিলাম তাই বানায়নি — আমাদের ধারণাগুলো নিয়ে প্রশ্ন তুলে আরও মজবুত কিছু তৈরি করেছে। এই খাতে বিরল।',
    'testimonials.2.name': 'মার্কাস লিন্ডকভিস্ট', 'testimonials.2.role': 'সিটিও, ভেইরা লজিস্টিকস',
    'testimonials.3.text': 'REAP-এর ডেটা পাইপলাইন সহায়তা ছাড়া আমাদের গবেষণাপত্র জমা দেওয়ার সময়সীমা পূরণ হতো না। দ্রুত, নিখুঁত, এবং সত্যিকার অর্থে সহযোগিতামূলক।',
    'testimonials.3.name': 'এলেনা ভাস্কেজ', 'testimonials.3.role': 'অ্যাপ্লায়েড এমএল ল্যাব, কোস্টাল টেক ইউনিভার্সিটি',
    'testimonials.4.text': 'তারা যে ওয়েবসাইট তৈরি করেছে, তা আমাদের ইন-হাউস দল দুই বছরে যা বানিয়েছিল তার চেয়ে ভালো কনভার্ট করে।',
    'testimonials.4.name': 'প্রিয়া নায়ার', 'testimonials.4.role': 'হেড অব মার্কেটিং, সোলেস ওয়েলনেস',

    'faq.badge': 'প্রশ্নোত্তর', 'faq.h2': 'সাধারণ প্রশ্নাবলী',
    'faq.p': 'সম্ভাব্য ক্লায়েন্ট ও সহযোগীরা আমাদের সবচেয়ে বেশি যা জিজ্ঞাসা করেন, তার উত্তর।',
    'faq.q1': 'আপনারা সাধারণত কোন কোন শিল্প খাতে কাজ করেন?',
    'faq.a1': 'আমাদের বেশিরভাগ কাজ মেডিকেল ডায়াগনস্টিক্স, রেলপথ ও শিল্প নিরাপত্তা, এবং প্রায়োগিক গবেষণায় — তবে আমাদের মূল প্রযুক্তি (ডিপ লার্নিং, কম্পিউটার ভিশন, স্বয়ংক্রিয় এজেন্ট) বেশিরভাগ ডেটা-সমৃদ্ধ শিল্পে প্রযোজ্য।',
    'faq.q2': 'একটি সাধারণ প্রকল্প সম্পন্ন হতে কত সময় লাগে?',
    'faq.a2': 'একটি কেন্দ্রীভূত ওয়েবসাইট তৈরিতে সাধারণত ২-৩ সপ্তাহ লাগে। এআই/এমএল প্রকল্প প্রোটোটাইপের জন্য কয়েক সপ্তাহ থেকে শুরু করে প্রোডাকশন-গ্রেড, অনিশ্চয়তা-সচেতন সিস্টেমের জন্য কয়েক মাস পর্যন্ত সময় নিতে পারে, ডেটার প্রস্তুতি ও পরিধির উপর নির্ভর করে।',
    'faq.q3': 'স্থাপনের পরেও কি আপনারা সহায়তা দেন?',
    'faq.a3': 'হ্যাঁ। প্রতিটি প্রকল্পে লঞ্চ-পরবর্তী সহায়তার একটি সময়সীমা অন্তর্ভুক্ত থাকে, এবং যেসব দল দীর্ঘমেয়াদী সহযোগী চান, তাদের জন্য আমরা চলমান রক্ষণাবেক্ষণ ও মনিটরিং প্যাকেজও দিয়ে থাকি।',
    'faq.q4': 'আপনারা কীভাবে ডেটা প্রাইভেসি ও গোপনীয়তা নিশ্চিত করেন?',
    'faq.a4': 'ডিফল্টভাবে সব ক্লায়েন্ট ডেটা এনডিএ-এর অধীনে পরিচালিত হয়। মেডিকেল ও অন্যান্য নিয়ন্ত্রিত ডেটা কঠোর অ্যাক্সেস নিয়ন্ত্রণের অধীনে প্রক্রিয়া করা হয়, এবং কোনো ডেটা হস্তান্তরের আগেই আমরা আপনার কমপ্লায়েন্স প্রয়োজনীয়তা অনুযায়ী প্রকল্পের পরিধি নির্ধারণ করি।',
    'faq.q5': 'আপনারা কি আমাদের বিদ্যমান টেক স্ট্যাকের সাথে কাজ করতে পারবেন?',
    'faq.a5': 'বেশিরভাগ ক্ষেত্রেই, হ্যাঁ। আমরা প্রমিত ও ব্যাপকভাবে সমর্থিত ফ্রেমওয়ার্কের উপর ভিত্তি করে কাজ করি (উপরে আমাদের টেক স্ট্যাক অংশ দেখুন), যাতে আমাদের কাজ আপনার বিদ্যমান অবকাঠামোর সাথে নির্বিঘ্নে একীভূত হয়।',
    'faq.q6': 'আপনারা কি একাডেমিক গবেষণা সহযোগিতা গ্রহণ করেন?',
    'faq.a6': 'নিয়মিতভাবে। আমাদের প্রকাশিত বেশ কয়েকটি প্রকল্প বিশ্ববিদ্যালয় ল্যাবের সাথে সহযোগিতা হিসেবে শুরু হয়েছিল — ডেটা পাইপলাইন ডিজাইন থেকে শুরু করে সহ-রচিত পরীক্ষামূলক মূল্যায়ন পর্যন্ত।',

    'contact.badge': 'যোগাযোগ করুন', 'contact.h2': 'আমাদের সাথে যুক্ত হন',
    'contact.p': 'আমাদের গবেষণা নিয়ে প্রশ্ন আছে অথবা কাস্টম এআই/ওয়েবসাইট সমাধান দরকার? সরাসরি আমাদের সাথে যোগাযোগ করুন।',
    'contact.hq.title': 'প্রধান কার্যালয়', 'contact.phone.title': 'ফোন নম্বর', 'contact.email.title': 'ইমেইল ঠিকানা',
    'contact.form.title': 'বার্তা পাঠান', 'contact.form.subtitle': 'নিচের ফর্মটি পূরণ করুন, আমরা ২৪ ঘণ্টার মধ্যে সাড়া দেব।',
    'contact.form.name': 'পুরো নাম *', 'contact.form.email': 'ইমেইল ঠিকানা *', 'contact.form.subject': 'বিষয়', 'contact.form.message': 'বার্তা *',
    'contact.form.name.ph': 'জন ডো', 'contact.form.subject.ph': 'প্রকল্প অনুসন্ধান / গবেষণা সহায়তা', 'contact.form.message.ph': 'আপনার প্রয়োজনীয়তা জানান...',
    'contact.form.submit': 'বার্তা পাঠান', 'contact.form.sending': 'বার্তা পাঠানো হচ্ছে...',
    'form.error.required': 'অনুগ্রহ করে সব আবশ্যক ঘর পূরণ করুন।',
    'form.error.email': 'অনুগ্রহ করে একটি বৈধ ইমেইল ঠিকানা দিন।',
    'form.success': 'ধন্যবাদ, {name}! আপনার বার্তা গ্রহণ করা হয়েছে। আমাদের পরিচালকগণ শীঘ্রই আপনার সাথে যোগাযোগ করবেন।',

    'footer.tagline': 'উচ্চ-মানসম্পন্ন এআই সিস্টেম, উন্নত মেশিন ভিশন টুল এবং নির্ভরযোগ্য ওয়েব অ্যাপ্লিকেশন তৈরি করা।',
    'footer.nav.title': 'নেভিগেশন', 'footer.nav.home': 'হোম', 'footer.nav.about': 'পদ্ধতি সম্পর্কে',
    'footer.nav.services': 'আমাদের সক্ষমতা', 'footer.nav.tech': 'টেক স্ট্যাক', 'footer.nav.projects': 'সাম্প্রতিক প্রকল্প',
    'footer.nav.team': 'নেতৃত্ব দল', 'footer.nav.careers': 'ক্যারিয়ার', 'footer.nav.faq': 'প্রশ্নোত্তর',
    'footer.cap.title': 'সক্ষমতা', 'footer.cap1': 'এআই ও ডিপ লার্নিং', 'footer.cap2': 'অ্যাক্টিভ লার্নিং সিটি',
    'footer.cap3': 'ওয়েব আর্কিটেকচার', 'footer.cap4': 'গবেষণা পরামর্শ',
    'footer.inspiration.title': 'অনুপ্রেরণা',
    'footer.copyright': '© ২০২৬ REAP Inc. সর্বস্বত্ব সংরক্ষিত। নিবন্ধিত ঠিকানা: Pierre, SD, USA।',
    'footer.privacy': 'গোপনীয়তা নীতি', 'footer.terms': 'সেবার শর্তাবলী'
  }
};

const LANG_STORAGE_KEY = 'reap-lang';
let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || 'en';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function applyTranslations() {
  document.documentElement.setAttribute('lang', currentLang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
}

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyTranslations();

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });
  const currentLabel = document.getElementById('lang-current');
  if (currentLabel) currentLabel.textContent = lang.toUpperCase();
}

function initLanguageSwitcher() {
  const wrapper = document.getElementById('lang-switcher');
  const toggle = document.getElementById('lang-toggle');
  if (!wrapper || !toggle) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    wrapper.classList.toggle('open');
  });

  document.addEventListener('click', () => wrapper.classList.remove('open'));

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      setLanguage(opt.getAttribute('data-lang'));
      wrapper.classList.remove('open');
    });
  });

  applyTranslations();
  setLanguage(currentLang);
}

document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
