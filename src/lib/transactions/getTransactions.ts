import type { Transaction } from "../types";

// TODO Edit Date format
import type { TransactionData } from "../APIHandler/types";
import _ from "../APIHandler/fetchApi";

let transactions_json: TransactionData[] = [];

async function fetchData() {
  const response = await _.getAllTransactions();
  if (response.success && response.data) {
    transactions_json = response.data;
  }
}

await fetchData();

// const transactions_json: TransactionData[] = [
//     {
//         "id": 2,
//         "title": "My Second",
//         "amount": 324,
// 		"author": 2,
//         "datetime": "2023-04-21T19:32:41Z",
//         "transaction_type": "income",
//         "description": "i spent money",
//         "tag": [
//             {
//                 "id": 1,
//                 "name": "Personal"
//             }
//         ]
//     },
//     {
//         "id": 3,
//         "title": "My Thirsd",
//         "amount": 324,
// 		"author": 2,
//         "datetime": "2023-03-21T19:32:41Z",
//         "transaction_type": "expense",
//         "description": "i spent money",
//         "tag": [
//             {
//                 "id": 1,
//                 "name": "Personal"
//             },
//             {
//                 "id": 2,
//                 "name": "University"
//             },
//             {
//                 "id": 3,
//                 "name": "Job"
//             }
//         ]
//     },
//     {
//         "id": 4,
//         "title": "My Thirsd",
//         "amount": 324,
// 		"author": 2,
//         "datetime": "2023-03-21T19:32:41Z",
//         "transaction_type": "expense",
//         "description": "i spent money",
//         "tag": [
//             {
//                 "id": 2,
//                 "name": "University"
//             },
//             {
//                 "id": 4,
//                 "name": "Food"
//             }
//         ]
//     }
// ];


export const transactions: Transaction[] = [];

for (const transaction of transactions_json) {

	const tagNames = transaction.tag.map((tag) => tag.name);

	transactions.push({
		id: transaction.id,
		name: transaction.title,
		type: transaction.transaction_type,
		author: transaction.author,
		amount: transaction.amount,
		tags: tagNames,
		date: transaction.datetime.slice(0, 10),
		description: transaction.description
	})
}