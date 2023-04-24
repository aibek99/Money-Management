import type { Transaction } from "../types";

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
