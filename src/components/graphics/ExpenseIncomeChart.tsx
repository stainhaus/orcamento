import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface ExpenseIncomeChartProps {
    expenses: { id: number; name: string; value: number }[];
    incomes: { id: number; name: string; value: number }[];
    onDeleteExpense: (id: number) => void;
    onDeleteIncome: (id: number) => void;
}

const ExpenseIncomeChart: React.FC<ExpenseIncomeChartProps> = ({ expenses, incomes, onDeleteExpense, onDeleteIncome }) => {
    const labels = [...new Set([...expenses.map(e => e.name), ...incomes.map(i => i.name)])];

    const expenseData = labels.map(label =>
        expenses.filter(e => e.name === label).reduce((acc, curr) => acc + curr.value, 0)
    );

    const incomeData = labels.map(label =>
        incomes.filter(i => i.name === label).reduce((acc, curr) => acc + curr.value, 0)
    );

    const data = {
        labels,
        datasets: [
            {
                label: 'Despesas',
                data: expenseData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Ganhos',
                data: incomeData,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2>Despesas X Ganhos</h2>
            <Bar data={data} />

            <h3>Detalhes</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {expenses.map(expense => (
                    <li key={expense.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                        {expense.name} - R${expense.value}
                        <button className="delete-button" onClick={() => onDeleteExpense(expense.id)}>
                            Excluir
                        </button>
                    </li>
                ))}
                {incomes.map(income => (
                    <li key={income.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                        {income.name} - R${income.value}
                        <button className="delete-button" onClick={() => onDeleteIncome(income.id)}>
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseIncomeChart;
