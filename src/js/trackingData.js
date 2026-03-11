export const trackingData = {
    "SLG-100200": {
        id: "SLG-100200",
        status: "En tránsito",
        lastUpdate: "18 Mayo 2026, 10:30 AM",
        eta: {
            time: "Hoy 6:30–8:00 pm",
            confidence: "Alta"
        },
        timeline: [
            { label: "Recolección confirmada", date: "17 Mayo, 09:00 AM", completed: true },
            { label: "Salida de origen", date: "17 Mayo, 02:00 PM", completed: true },
            { label: "En tránsito", date: "18 Mayo, 08:00 AM", completed: true, active: true },
            { label: "Llegada estimada", date: "18 Mayo, 06:30 PM", completed: false },
            { label: "Entrega / Evidencia", date: "--", completed: false }
        ],
        documents: [
            { name: "Carta Porte", url: "#", type: "pdf" },
            { name: "POD (Proof of Delivery)", url: "#", type: "img" }
        ],
        evidence: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400"
        ]
    },
    "SLG-300400": {
        id: "SLG-300400",
        status: "Entregado",
        lastUpdate: "17 Mayo 2026, 04:15 PM",
        eta: {
            time: "Entregado",
            confidence: "Finalizado"
        },
        timeline: [
            { label: "Recolección confirmada", date: "16 Mayo, 10:00 AM", completed: true },
            { label: "Salida de origen", date: "16 Mayo, 03:00 PM", completed: true },
            { label: "En tránsito", date: "17 Mayo, 07:00 AM", completed: true },
            { label: "Llegada estimada", date: "17 Mayo, 04:00 PM", completed: true },
            { label: "Entrega / Evidencia", date: "17 Mayo, 04:15 PM", completed: true, active: true }
        ],
        documents: [
            { name: "POD Firmado", url: "#", type: "pdf" }
        ],
        evidence: [
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=400"
        ]
    }
};
