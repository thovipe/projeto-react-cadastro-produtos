import { createContext, useContext, useState, useEffect } from 'react';

const ProdutosContext = createContext();

export function ProdutosProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('produtos');
    if (saved) {
      setProdutos(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever produtos changes
  useEffect(() => {
    if (produtos.length > 0) {
      localStorage.setItem('produtos', JSON.stringify(produtos));
    }
  }, [produtos]);

  return (
    <ProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutosContext.Provider>
  );
}

export function useProdutos() {
  const context = useContext(ProdutosContext);
  if (!context) {
    throw new Error('useProdutos must be used within ProdutosProvider');
  }
  return context;
}