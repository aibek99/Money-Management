import type { Transaction } from "../types";
import {toDate} from "./date";

export const transactions: Transaction[] = [
	{
		id: 100,
		name: 'Пятерочка',
		type: 'expense',
		amount: 1499,
		tags: [{id: 0, name: 'Personal'}, {id: 1, name: 'Food'}],
		date: toDate('2023-01-10'),
		description: '-'
	},
	{
		id: 0,
		name: 'Salon',
		type: 'expense',
		amount: 900,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'Other'}],
		date: toDate('2023-02-10'),
		description: 'Haircut'
	},
	{
		id: 1,
		name: 'Пятерочка',
		type: 'expense',
		amount: 900,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'Food'}],
		date: toDate('2023-01-15'),
		description: '-'
	},
	{
		id: 2,
		name: 'Shopping',
		type: 'expense',
		amount: 1000,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'Clothes'}],
		date: toDate('2022-01-29'),
		description: 'New T-shirt'
	},
	{
		id: 3,
		name: 'Scholarship',
		type: 'income',
		amount: 10,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'University'}],
		date: toDate('2023-03-25'),
		description: 'OOOOOOOOOOOOOOO thx God'
	},
	{
		id: 4,
		name: 'Scholarship',
		type: 'income',
		amount: 10,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'University'}],
		date: toDate('2023-02-25'),
		description: 'OOOOOOOOOOOOOOO thx God'
	},
	{
		id: 5,
		name: 'Lorem',
		type: 'expense',
		amount: 1,
		tags: [],
		date: toDate('1999-09-19'),
		description: 'Lorem'
	},
	{
		id: 6,
		name: 'Prize',
		type: 'income',
		amount: 2000,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'University'}, {id: 1, name: 'Sport'}],
		date: toDate('2023-04-10'),
		description: 'Tournament prize'
	},
	{
		id: 7,
		name: 'Shaurma',
		type: 'expense',
		amount: 9000,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'Food'}],
		date: toDate('2023-04-17'),
		description: 'Very good'
	},
	{
		id: 8,
		name: 'Kinopoisk',
		type: 'expense',
		amount: 300,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'Entertainment'}],
		date: toDate('2023-01-01'),
		description: 'Avatar 2'
	},
	{
		id: 9,
		name: 'Yandex Music',
		type: 'expense',
		amount: 990,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'Entertainment'}],
		date: toDate('2022-12-29'),
		description: 'Music subscription for year'
	},
	{
		id: 10,
		name: 'Macbook',
		type: 'expense',
		amount: 100000,
		tags: [{id: 1, name: 'Personal'}, {id: 1, name: 'Household'}],
		date: toDate('2053-01-01'),
		description: 'New MacBook'
	}
];
