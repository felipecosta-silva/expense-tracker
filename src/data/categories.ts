import { Category } from '../types/Category';

export const categories: Category = {
    food:
    {
        title: 'Alimentação',
        color: '#cc0000',
        expense: true
    },

    rent:
    {
        title: 'Aluguel',
        color: '#ff3b1f',
        expense: true
    },

    salary:
    {
        title: 'Salário',
        color: 'green',
        expense: false
    },

    ticket:
    {
        title: 'Passagem',
        color: '#FA8072',
        expense: true
    }
}