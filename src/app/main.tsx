import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "@pages/dashboard/Dashboard";
import "./styles/main.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "@store/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Dashboard />
            </QueryClientProvider>
        </Provider>
    </StrictMode>
);