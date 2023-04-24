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
  tags: Tag[];
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
export const Tags = ['Personal', 'Food', 'Clothes', 'University', 'Other', 'Job', 'Household', 'Games', 'Entertainment'];
// sadfioirjgoseijvsifd idk how to solve it
// export type Tags = typeof tags[number];
// const tt: Tags[] = ['Personal', 'Foods', 'war'];
// export type Tags = ['Personal' | 'Food' | 'Clothes' | 'University' | 'Other' | 'Job' | 'Household' | 'Games' | 'Entertainment'];