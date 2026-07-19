const content = {
    exp_coppel_arq: { title: "Arquitecta de Seguridad | Coppel", body: "• Revisión de más de 50 arquitecturas tecnológicas<br>• Cumplimiento ISO 27001, COBIT e ITIL<br>• 30+ actualizaciones críticas para mitigar riesgos<br>• IA Generativa para optimizar dictámenes" },
    exp_coppel_ana: { title: "Analista de Requerimientos | Coppel", body: "• Liderazgo de 4 proyectos bajo metodología Scrum<br>• Evaluación de 6+ dispositivos biométricos<br>• Pruebas de liveness detection y anti-spoofing<br>• Aseguramiento de integridad de identidad corporativa" },
    exp_larana: { title: "Líder de Desarrollo | Larana, Inc.", body: "• Ciclo de vida completo de soluciones web end-to-end<br>• Mentoreo de equipos<br>• Estandarización de revisiones diarias de código<br>• Creación de contenido técnico para la comunidad" },
    edu_academic: { title: "Formación Académica", body: "• Licenciatura en Informática | Universidad Autónoma de Sinaloa (2014-2019)<br>• Técnico Superior Universitario en Desarrollo Web (2012-2014)" },
    edu_complement: { title: "Formación Complementaria", body: "• Diplomado en Desarrollo de Aplicaciones Web (2019)<br>• Diplomado en Administración de Redes (2026)<br>• Google Launchpad for Women: Gen AI Leader (2025)<br>• Google Cloud Digital Leader & Azure Fundamentals" },
    skill_seg: { title: "Seguridad y Gobierno", body: "• ISO 27001, COBIT e ITIL<br>• Gestión integral de riesgos tecnológicos<br>• Análisis avanzado de vulnerabilidades<br>• Aseguramiento de infraestructuras críticas" },
    skill_bio: { title: "Biometría", body: "• Sistemas de autenticación 1:1 y 1:N<br>• Protocolos de Liveness Detection<br>• Mitigación de ataques Anti-spoofing<br>• Dispositivos decadactilares y unilaterales" },
    skill_tech: { title: "Cloud, Datos e IA", body: "• Arquitecturas en Google Cloud y Azure<br>• Power BI, Looker Studio<br>• Bases de datos SQL/NoSQL<br>• IA Generativa para optimización operativa" },
    skill_dev: { title: "Desarrollo y Lenguajes", body: "• Java, Python, JavaScript, PHP y C#<br>• Ciclo de vida de desarrollo web (HTML5, CSS3, WordPress)<br>• Metodologías ágiles de trabajo" }
};

function openModal(id) {
    const data = content[id];
    document.getElementById('modal-content').innerHTML = `<h3 class="text-2xl font-bold text-indigo-900 mb-4">${data.title}</h3><p class="text-gray-600 leading-relaxed">${data.body}</p>`;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() { document.getElementById('modal').style.display = 'none'; }
