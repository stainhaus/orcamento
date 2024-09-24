import React, { useState } from 'react';
import './ExpenseManager.css';

interface Expense {
  id: number;
  name: string;
  value: number;
}

interface ExpenseManagerProps {
  onAddExpense: (expense: Expense) => void;
  onDeleteExpense: (id: number) => void;
}

const ExpenseManager: React.FC<ExpenseManagerProps> = ({ onAddExpense, onDeleteExpense }) => {
  const [name, setName] = useState<string>('');
  const [value, setValue] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);

  const handleAddExpense = (): void => {
    if (name.trim() === '' || value === '' || value <= 0) {
      setError('Please provide a valid name and value');
      return;
    }

    const newExpense: Expense = {
      id: Date.now(),
      name,
      value: Number(value),
    };

    onAddExpense(newExpense);
    setName('');
    setValue('');
    setError(null);
  };

  return (
    <div className="expense-manager">
      <h2>Despesas</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Nome Despesa"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor Despesa"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button onClick={handleAddExpense}>Adicionar</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ExpenseManager;
