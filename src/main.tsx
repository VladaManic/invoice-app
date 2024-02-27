import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            //cacheTime: Infinity,
            staleTime: Infinity,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
)
