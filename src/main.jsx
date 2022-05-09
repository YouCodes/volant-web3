import React from 'react'
import ReactDOM from 'react-dom/client'
import { TransactionsProvider } from "./context/TransactionContext";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <TransactionsProvider>
    <App />
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
