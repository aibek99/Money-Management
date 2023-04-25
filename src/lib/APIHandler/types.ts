

interface Tag {
    id: number;
    name: string;
}

export interface TransactionData {
    id: number;
    title: string;
    amount: number;
    author: number;
    description: string;
    transaction_type: "income" | "expense";
    datetime: string;
    tag: Tag[] | [];
}

interface pTag {
    name: string;
}

export interface PTransaction {
    id: number;
    title: string;
    amount: number;
    description: string;
    transaction_type: "income" | "expense";
    datetime: string;
    tag: pTag[] | [];
}


export interface responseTransaction {
    success: boolean;
    data: TransactionData | null;
}

export interface responseAllTransaction {
    success: boolean;
    data: TransactionData[] | null;
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

export interface TagData {
    id: number;
    name: string;
}

