import { trackingData } from '../js/trackingData.js';

export function initSmartTrack() {
    const searchBtn = document.getElementById('smart-track-btn');
    const searchInput = document.getElementById('smart-track-input');
    const resultsSection = document.getElementById('tracking-results');
    const contentArea = document.getElementById('tracking-content');

    if (!searchBtn || !searchInput) return;

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim().toUpperCase();
        if (!query) return;

        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        // Show Skeleton Loader
        renderSkeleton(contentArea);

        // Simulate network delay for "Premium" feel
        setTimeout(() => {
            const data = trackingData[query];
            if (data) {
                renderResults(data, contentArea);
            } else {
                renderNotFound(query, contentArea);
            }
        }, 1500);
    });

    // Also search on Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });
}

function renderResults(data, container) {
    container.innerHTML = `
        <div class="result-card-premium reveal active">
            <div class="card-header">
                <div>
                    <span class="subtitle">Guía: ${data.id}</span>
                    <h3>${data.status}</h3>
                    <p class="microcopy">Última actualización: ${data.lastUpdate}</p>
                </div>
                <span class="status-badge ${data.status.toLowerCase().replace(' ', '-')}">${data.status}</span>
            </div>

            <div class="grid-2">
                <div class="timeline-col">
                    <div class="timeline-vertical">
                        ${data.timeline.map(item => `
                            <div class="timeline-item ${item.completed ? 'completed' : ''} ${item.active ? 'active' : ''}">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <h4>${item.label}</h4>
                                    <span>${item.date}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="info-col">
                    <div class="eta-block">
                        <div class="eta-info">
                            <p class="subtitle">ETA Inteligente</p>
                            <h3>${data.eta.time}</h3>
                        </div>
                        <div class="confidence-badge">Confianza: ${data.eta.confidence}</div>
                    </div>

                    <div class="evidence-block">
                        <h4>Documentos y evidencia</h4>
                        <div class="evidence-grid">
                            ${data.evidence.map(img => `
                                <img src="${img}" class="evidence-img" alt="Evidencia">
                            `).join('')}
                        </div>
                        <div class="microcopy" style="margin-top: 1rem;">
                            ${data.documents.map(doc => `
                                <a href="${doc.url}" style="display:block; margin-bottom:0.5rem;">📄 ${doc.name}</a>
                            `).join('')}
                        </div>
                    </div>

                    <div class="cta-col" style="margin-top: 2rem; display: flex; flex-direction: column; gap: 0.5rem;">
                        <button class="btn btn-secondary w-full" onclick="window.reportIncidence('${data.id}')">Reportar incidencia</button>
                        <button class="btn btn-outline-white w-full" style="color: var(--primary); border-color: var(--border);">Solicitar actualización</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderNotFound(id, container) {
    container.innerHTML = `
        <div class="result-card-premium reveal active" style="text-align: center;">
            <div class="icon-box" style="font-size: 4rem;">🔍</div>
            <h2>No encontramos el folio "${id}"</h2>
            <p>Verifica que el número sea correcto o contacta a nuestro equipo.</p>
            <div class="hero-btns" style="margin-top: 2rem; justify-content: center;">
                <button class="btn btn-primary" onclick="window.openAI()">Hablar con Asistente IA</button>
                <a href="#contacto" class="btn btn-secondary">Reportar Incidencia</a>
            </div>
        </div>
    `;
}

function renderSkeleton(container) {
    container.innerHTML = `
        <div class="result-card-premium reveal active">
            <div class="card-header">
                <div style="width: 100%;">
                    <div class="skeleton skeleton-text" style="width: 30%;"></div>
                    <div class="skeleton skeleton-title"></div>
                    <div class="skeleton skeleton-text" style="width: 40%;"></div>
                </div>
            </div>

            <div class="grid-2">
                <div class="timeline-col">
                    <div class="timeline-vertical">
                        <div class="timeline-item"><div class="skeleton skeleton-circle" style="left: -2.5rem; position: absolute;"></div><div class="skeleton skeleton-text"></div></div>
                        <div class="timeline-item"><div class="skeleton skeleton-circle" style="left: -2.5rem; position: absolute;"></div><div class="skeleton skeleton-text"></div></div>
                        <div class="timeline-item"><div class="skeleton skeleton-circle" style="left: -2.5rem; position: absolute;"></div><div class="skeleton skeleton-text"></div></div>
                    </div>
                </div>
                
                <div class="info-col">
                    <div class="skeleton" style="height: 100px; border-radius: 12px; margin-bottom: 2rem;"></div>
                    <div class="skeleton" style="height: 150px; border-radius: 12px;"></div>
                </div>
            </div>
        </div>
    `;
}

