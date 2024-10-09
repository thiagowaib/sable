// src/app/AnalyticsProvider.tsx
"use client"; // Necessário para habilitar o useEffect

import { useEffect } from "react";
import { analytics } from "../../../firebaseConfig";
import { logEvent } from "firebase/analytics";

export default function AnalyticsProvider() {
  useEffect(() => {
    if (analytics) {
      // Evento de visualização de página
      logEvent(analytics, "page_view", {
        label: "Entrou na Página"
      });
    }
  }, []);

  return null; // Este componente não precisa renderizar nada
}
