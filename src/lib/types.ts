export interface Tag {
  id: number;
  name: string;
}

export interface Filter {
  transaction_type: "income" | "expense" | null,
  amount: {
    from: null | number,
    to: null | number
  },
  tag: Tag[],
  datetime: {
    from: null | string,
    to: null | string
  }
}

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  datetime: string;
  transaction_type: string;
  description: string;
  tag: Tag[];
}

export interface dateType {
  from: null | Date;
  to: null | Date;
}

// TODO Catch tags from db
export const Tags = ['Personal', 'Food', 'Clothes', 'University', 'Other', 'Job', 'Household', 'Games', 'Entertainment'];
// sadfioirjgoseijvsifd idk how to solve it
// export type Tags = typeof tags[number];
// const tt: Tags[] = ['Personal', 'Foods', 'war'];
// export type Tags = ['Personal' | 'Food' | 'Clothes' | 'University' | 'Other' | 'Job' | 'Household' | 'Games' | 'Entertainment'];