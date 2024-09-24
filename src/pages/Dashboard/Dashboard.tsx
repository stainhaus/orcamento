import ExpenseManager from "../../components/despesa/ExpenseManager";
import IncomeManager from '../../components/Lucros/IncomeManager';
import "./style.css";
import ExpenseIncomeChart from '../../components/graphics/ExpenseIncomeChart';
import { useState } from "react";

interface Expense {
  id: number;
  name: string;
  value: number;
}

interface Income {
  id: number;
  name: string;
  value: number;
}

export const Dashboard = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [incomes, setIncomes] = useState<Income[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const addIncome = (income: Income) => {
    setIncomes([...incomes, income]);
  };

  const deleteIncome = (id: number) => {
    setIncomes(incomes.filter(income => income.id !== id));
  };

  return (
    <div className="dashboard">
      <div className="cruds">
        <ExpenseManager onAddExpense={addExpense} onDeleteExpense={deleteExpense} />
        <IncomeManager onAddIncome={addIncome} onDeleteIncome={deleteIncome} />
      </div>

      <div className="grafic">
        {/* Passando deleteExpense e deleteIncome para o gráfico */}
        <ExpenseIncomeChart 
          expenses={expenses} 
          incomes={incomes} 
          onDeleteExpense={deleteExpense} 
          onDeleteIncome={deleteIncome} 
        />
      </div>
    </div>
  );
};
