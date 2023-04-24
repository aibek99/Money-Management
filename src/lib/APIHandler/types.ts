

interface Tag {
    id: number;
    name: string;
}

export interface Transaction {
    id: number;
    title: string;
    amount: number;
    author: number;
    description: string;
    transaction_type: string;
    datetime: string;
    tag: Tag[] | [];
}

interface pTag {
    name: string;
}

export interface PTransaction {
    title: string;
    amount: number;
    description: string;
    transaction_type: string;
    datetime: string;
    tag: pTag[] | [];
}


export interface responseTransaction {
    success: boolean;
    data: Transaction | null;
}

export interface responseAllTransaction {
    success: boolean;
    data: Transaction[] | null;
}

export interface userData{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
}

export interface responseUser {
    success: boolean;
    data: userData | null;
}