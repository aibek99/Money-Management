import _ from "./APIHandler/fetchApi";
import type {TagData} from "./APIHandler/types";

export interface Filter {
  type: "income" | "expense" | null,
  amount: {
    from: null | number,
    to: null | number
  },
  tags: Tag[],
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
  author: number;
  tags: string[];
  date: string;
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

// TODO Catch tags from db

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



// sadfioirjgoseijvsifd idk how to solve it
// export type Tags = typeof tags[number];
// const tt: Tags[] = ['Personal', 'Foods', 'war'];
// export type Tags = ['Personal' | 'Food' | 'Clothes' | 'University' | 'Other' | 'Job' | 'Household' | 'Games' | 'Entertainment'];