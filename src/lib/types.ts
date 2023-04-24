import _ from "./APIHandler/fetchApi";
import type {TagData} from "./APIHandler/types";

export interface Filter {
  type: "income" | "expense" | null,
  amount: {
    from: null | number,
    to: null | number
  },
  tags: string[],
  date: {
    from: null | Date,
    to: null | Date
  }
}

export interface Transaction {
  id: number;
  name: string;
  // TODO REMOVE STRING
  type: TransType | string;
  amount: number;
  tags: Tag[];
  date: Date;
  author: number;
  description: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface dateType {
  from: null | Date;
  to: null | Date;
}

export type TransType = 'income' | 'expense';

export const Tags: string[] = [];

async function getTagsData() {
  const data = await _.getAllTags();
  if (data) {
    data.forEach((tag: TagData) => {
      Tags.push(tag.name);
    });
  }
}

await getTagsData();
