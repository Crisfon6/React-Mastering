import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppSwitcher } from "./AppSwitcher";
import '@fortawesome/fontawesome-free/css/all.min.css';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppSwitcher />
    </QueryClientProvider>
  </StrictMode>
);
