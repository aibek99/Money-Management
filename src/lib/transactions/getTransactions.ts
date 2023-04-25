import type { Transaction } from "../types";

import type { TransactionData, TagData } from "../APIHandler/types";
import _ from "../APIHandler/fetchApi";
import {toDate} from "./date";

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

	// const tagNames = transaction.tag.map((tag) => tag.name);

	transactions.push({
		id: transaction.id,
		name: transaction.title,
		type: transaction.transaction_type,
		author: transaction.author,
		amount: transaction.amount,
		tags: transaction.tag,
		date: toDate(transaction.datetime.slice(0, 10)),
		description: transaction.description
	})
}
