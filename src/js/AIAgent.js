/**
 * SLGOME AI Logistics Advisor
 * Specialized in transportation, warehousing, and insurance.
 */

export function initAIAgent() {
    const chatHTML = `
        <div class="ai-widget-container">
            <div class="ai-widget-label">Agente Virtual GOME</div>
            <div id="ai-chat-trigger" class="ai-widget-bubble">
                <i class="fas fa-robot"></i>
            </div>
            
            <div id="ai-chat-window" class="ai-chat-container">
                <div style="background: var(--primary-blue); color: white; padding: 1.25rem; font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <i class="fas fa-robot"></i>
                        <span>Asesor Virtual GOME</span>
                    </div>
                    <button id="ai-chat-close" style="background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem;">&times;</button>
                </div>
                <div id="ai-chat-messages" style="flex: 1; overflow-y: auto; padding: 1rem; background: var(--bg-light); display: flex; flex-direction: column; gap: 0.75rem;">
                    <div style="background: white; padding: 0.75rem; border-radius: 8px; font-size: 0.9rem; border-left: 3px solid var(--accent-green); max-width: 85%;">
                        Hola, soy tu Asesor Logístico de SLGOME. ¿En qué puedo apoyarte hoy con tu operación de transporte, almacenamiento o seguros?
                    </div>
                </div>
                <div style="padding: 1rem; border-top: 1px solid var(--border-color); display: flex; gap: 0.5rem; background: white;">
                    <input type="text" id="ai-chat-input" placeholder="Escribe tu consulta..." style="flex: 1; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 6px; font-size: 0.9rem;">
                    <button id="ai-chat-send" style="background: var(--primary-blue); color: white; border: none; padding: 0.75rem; border-radius: 6px; cursor: pointer;"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatHTML);

    const trigger = document.getElementById('ai-chat-trigger');
    const chatWindow = document.getElementById('ai-chat-window');
    const close = document.getElementById('ai-chat-close');
    const input = document.getElementById('ai-chat-input');
    const send = document.getElementById('ai-chat-send');
    const container = document.getElementById('ai-chat-messages');

    trigger.onclick = () => {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            input.focus();
        }
    };

    close.onclick = () => chatWindow.classList.remove('active');

    function addMessage(text, isUser = false) {
        const msg = document.createElement('div');
        msg.style.padding = '0.75rem';
        msg.style.borderRadius = '8px';
        msg.style.fontSize = '0.9rem';
        msg.style.maxWidth = '85%';
        msg.style.alignSelf = isUser ? 'flex-end' : 'flex-start';
        msg.style.background = isUser ? 'var(--primary-blue)' : 'white';
        msg.style.color = isUser ? 'white' : 'var(--text-dark)';
        if (!isUser) msg.style.borderLeft = '3px solid var(--accent-green)';
        msg.innerText = text;
        container.appendChild(msg);
        container.scrollTop = container.scrollHeight;
    }

    async function processQuery(query) {
        addMessage(query, true);
        input.value = '';

        // Simulating thinking
        setTimeout(() => {
            let response = "Entiendo su inquietud. Desde una perspectiva profesional, en SLGOME Logistics recomendamos siempre un enfoque integral...";
            const q = query.toLowerCase();

            if (q.includes('seguro') || q.includes('carga') || q.includes('contenedor')) {
                response = "La mitigación de riesgos es fundamental en el B2B. En SLGOME, asesoramos en seguros de carga y contenedor para garantizar la continuidad de su negocio ante cualquier eventualidad.";
            } else if (q.includes('almacen') || q.includes('resguardo')) {
                response = "El resguardo estratégico es uno de nuestros pilares operativos. Contamos con infraestructura propia que garantiza un control de inventarios riguroso y seguro.";
            } else if (q.includes('transporte') || q.includes('fcl') || q.includes('lcl')) {
                response = "Nuestra flota propia de tractocamiones nos permite ofrecerle una capacidad de respuesta inmediata y un control operativo real sobre sus envíos terrestres.";
            } else {
                response = "SLGOME Logistics se especializa en brindar soluciones a medida para empresas que busquen un aliado estratégico en el traslado seguro de sus mercancías. ¿Desea que un asesor humano analice su ruta o necesidad específica de resguardo?";
            }

            addMessage(response);
        }, 800);
    }

    send.onclick = () => { if (input.value) processQuery(input.value); };
    input.onkeypress = (e) => { if (e.key === 'Enter' && input.value) processQuery(input.value); };
}
