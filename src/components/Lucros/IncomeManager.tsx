import React, { useState } from 'react';
import './IncomeManager.css';

interface Income {
  id: number;
  name: string;
  value: number;
}

interface IncomeManagerProps {
  onAddIncome: (income: Income) => void;
  onDeleteIncome: (id: number) => void;
}

const IncomeManager: React.FC<IncomeManagerProps> = ({ onAddIncome, onDeleteIncome }) => {
  const [name, setName] = useState<string>('');
  const [value, setValue] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);

  const handleAddIncome = (): void => {
    if (name.trim() === '' || value === '' || value <= 0) {
      setError('Please provide a valid name and value');
      return;
    }

    const newIncome: Income = {
      id: Date.now(),
      name,
      value: Number(value),
    };

    onAddIncome(newIncome);
    setName('');
    setValue('');
    setError(null);
  };

  return (
    <div className="income-manager">
      <h2>Lucros</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Nome Lucro"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor Lucro"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button onClick={handleAddIncome}>Adicionar</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default IncomeManager;
