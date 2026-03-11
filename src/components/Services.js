export const renderServices = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const services = [
        {
            title: 'Transporte Terrestre (FCL / LCL)',
            description: 'Movemos tu carga de forma segura, eficiente y puntual. Soluciones para cargas completas y consolidadas.',
            icon: 'truck',
            cta: 'Solicitar Transporte'
        },
        {
            title: 'Almacenamiento y Distribución',
            description: 'Resguardo, control y entrega estratégica de tu mercancía. Administración eficiente de inventarios.',
            icon: 'warehouse',
            cta: 'Solicitar Almacenaje'
        }
    ];

    container.innerHTML = services.map(service => `
    <div class="service-card">
      <div class="service-icon">
        <!-- Lucide icons will be injected here via JS or used as SVGs -->
        <div class="icon-placeholder ${service.icon}"></div>
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <a href="#contacto" class="btn btn-outline btn-sm">${service.cta}</a>
    </div>
  `).join('');
};
