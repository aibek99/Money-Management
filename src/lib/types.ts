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
export const Tags: Tag[] = [{id: 1, name: 'Personal'}, {id: 1, name: 'Food'}, {id: 1, name: 'Clothes'}, {id: 1, name: 'University'}, {id: 1, name: 'Other'}, {id: 1, name: 'Job'}, {id: 1, name: 'Household'}, {id: 1, name: 'Games'}, {id: 1, name: 'Entertainment'}];