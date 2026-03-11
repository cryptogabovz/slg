export function initAIAssistant() {
    const root = document.getElementById('ai-assistant-root');
    if (!root) return;

    root.innerHTML = `
        <div class="ai-assistant-wrapper">
            <div class="ai-bubble-btn" id="ai-toggle">
                <span style="font-size: 1.5rem;">🤖</span>
                <span>Asistente Logístico IA</span>
            </div>
            <div class="ai-chat-window" id="ai-window">
                <div class="ai-chat-header">
                    <span>Asesor Logístico SLGOME</span>
                    <button class="close-chat" id="ai-close" style="background:none; border:none; color:white; cursor:pointer;">✕</button>
                </div>
                <div class="ai-chat-body" id="ai-chat-body">
                    <div class="ai-msg bot">Hola, soy tu asesor SmartTrack™. ¿En qué puedo ayudarte hoy?</div>
                </div>
                <div class="ai-chat-footer">
                    <input type="text" id="ai-input" placeholder="Escribe tu duda...">
                    <button id="ai-send" class="btn btn-secondary btn-sm">Enviar</button>
                </div>
            </div>
        </div>
    `;

    const toggle = document.getElementById('ai-toggle');
    const window = document.getElementById('ai-window');
    const close = document.getElementById('ai-close');
    const input = document.getElementById('ai-input');
    const send = document.getElementById('ai-send');
    const chatBody = document.getElementById('ai-chat-body');

    window.openAI = () => {
        window.style.display = 'flex';
    };

    toggle.addEventListener('click', () => {
        window.style.display = window.style.display === 'flex' ? 'none' : 'flex';
    });

    close.addEventListener('click', () => {
        window.style.display = 'none';
    });

    const addMessage = (text, sender) => {
        const msg = document.createElement('div');
        msg.className = `ai-msg ${sender}`;
        msg.innerText = text;
        chatBody.appendChild(msg);
        chatBody.scrollTop = chatBody.scrollHeight;
        return msg;
    };

    const handleInput = () => {
        const text = input.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        input.value = '';

        // Typing indicator
        const typingMsg = addMessage('...', 'bot');
        typingMsg.classList.add('typing');

        setTimeout(() => {
            typingMsg.remove();
            const lowText = text.toLowerCase();
            if (lowText.includes('rastreo') || lowText.includes('dónde va') || lowText.includes('estatus') || lowText.includes('guía') || lowText.includes('track')) {
                addMessage('Contamos con SmartTrack™, nuestro sistema de visibilidad en tiempo real. Por favor, ingresa tu número de guía en la sección superior para obtener el estatus exacto y evidencias digitales.', 'bot');
            } else if (lowText.includes('manzanillo') || lowText.includes('puerto')) {
                addMessage('El Puerto de Manzanillo es nuestro hub estratégico. Gestionamos transporte FCL/LCL y despacho aduanal, garantizando que tu mercancía no genere demoras innecesarias gracias a nuestras alianzas locales.', 'bot');
            } else if (lowText.includes('precio') || lowText.includes('cuanto cuesta') || lowText.includes('costo') || lowText.includes('presupuesto')) {
                addMessage('Nuestras tarifas son competitivas porque optimizamos rutas y consolidamos carga (LCL). ¿Deseas que un asesor te envíe una cotización personalizada? Solo necesitamos el origen, destino y tipo de carga.', 'bot');
            } else if (lowText.includes('por qué slgome') || lowText.includes('ventaja') || lowText.includes('beneficio')) {
                addMessage('En SLGOME nos enfocamos en la tranquilidad de las empresas. Ofrecemos SmartTrack™, atención personalizada y una puntualidad del 99.8%. No movemos cajas, movemos la confianza de tu negocio.', 'bot');
            } else if (lowText.includes('transporte') || lowText.includes('fcl') || lowText.includes('lcl') || lowText.includes('consolidado')) {
                addMessage('Manejamos Carga Completa (FCL) y Consolidada (LCL) en todo el territorio nacional. Nuestras unidades cuentan con GPS y cumplen con los más altos estándares de seguridad.', 'bot');
            } else if (lowText.includes('incidencia') || lowText.includes('problema') || lowText.includes('daño') || lowText.includes('queja')) {
                addMessage('Lamentamos cualquier inconveniente. Para darte atención prioritaria, ¿podrías indicarme tu número de guía? También puedes iniciar un reporte formal escribiendo "REPORTE".', 'bot');
            } else if (lowText.includes('reporte')) {
                addMessage('Iniciando protocolo de incidencia. Un coordinador de operaciones se pondrá en contacto contigo en los próximos 15 minutos vía telefónica.', 'bot');
            } else {
                addMessage('Gracias por tu consulta. Para brindarte una asesoría técnica detallada sobre logística internacional o nacional, ¿te gustaría hablar con un experto por WhatsApp?', 'bot');
            }
        }, 1200);
    };

    send.addEventListener('click', handleInput);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleInput();
    });

    // Global helper for SmartTrack
    window.reportIncidence = (id) => {
        window.openAI();
        addMessage(`Reportando incidencia para la guía: ${id}`, 'user');
        setTimeout(() => {
            addMessage('Entendido. ¿Qué tipo de incidencia es? (1. Demora, 2. Daño, 3. Otro)', 'bot');
        }, 500);
    };

    window.openAI = () => {
        const win = document.getElementById('ai-window');
        if (win) win.style.display = 'flex';
    };

    // Attach to global scope for standard buttons
    window.openAI = window.openAI;
}
