const content = {
    exp_coppel_arq: { title: "Arquitecta de Seguridad | Coppel", body: "• Lideré la revisión y dictamen de más de 50 arquitecturas tecnológicas, garantizando el cumplimiento normativo (ISO27001, COBIT, ITIL) y ejecutando más de 30 actualizaciones críticas en bases de datos para mitigar riesgos<br>•Dirigí el análisis de vulnerabilidades para 30 servidores biométricos y de prueba de vida (liveness), obteniendo certificaciones de seguridad clave para la identidad corporativa.<br>•Integré herramientas de IA Generativa para la estructuración y redacción de ducumentos de seguridad, optimizando tiempos de respuesta y carga operativa." },
    exp_coppel_ana: { title: "Analista de Requerimientos | Coppel", body: "• Lideré el levantamiento de requerimientos y arquitectura para 4 proyectos tecnológicos, actuando como puente estratégico entre áreas técnicas y de negocio bajo metodología Scrum.<br>• Impulsé 2 proyectos de identidad interna evaluando mas de 6 dispositivos biométricos (unilaterales/decadactilares). Ejecutépruebas de anti-spoofing y validaciones de liveness detection para garantizar la fiabilidad del hardware frente a intentos de suplantación." },
    exp_larana: { title: "Ingeniería de Sistemas Jr | Casa ley .", body: "• Desarrollé y brindé mantenimiento a aplicaciones internas, implementando mejoras funcionales para la operación corporativa.<br>• Ejecuté el levantamiento de requerimientos y pruebas de calidad (QA), asegurando la estabilidad y continuidad de los sistemas." },
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
