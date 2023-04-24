import {API_BASE_URL, token} from "./config";

import type {PTransaction, responseAllTransaction, responseTransaction, responseUser, Transaction} from "./types";


async function postTransaction(data: PTransaction): Promise<responseTransaction | void> {
    await fetch(`${API_BASE_URL}transaction/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
        body: JSON.stringify(data),
    })
    .then((response) => {
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        return {'success':true,
                'data':response.json()};
    })
    .catch((error) => {
        console.error('Error creating transaction:', error);
        return {'success':false,
                'data':null};
    });
};



async function getUser(): Promise<responseUser | void> {
    await fetch(`${API_BASE_URL}user/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
    })
    .then((response) => {
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        return {'success':true,
                'data':response.json()};
    })
    .catch((error) => {
        console.error('Error Getting user:', error);
        return {'success':false,
                'data':null};
    });
}


async function getAllTransactions(): Promise<responseAllTransaction | void> {
    await fetch(`${API_BASE_URL}transaction/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
    })
    .then((response) => {
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        return {'success':true,
                'data':response.json()};
    })
    .catch((error) => {
        console.error('Error Getting Transactions:', error);
        return {'success':false,
                'data':null};
    });
}

async function getTransaction(id: number): Promise<responseTransaction | void> {
    await fetch(`${API_BASE_URL}transaction/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
    })
    .then((response) => {
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        return {'success':true,
                'data':response.json()};
    })
    .catch((error) => {
        console.error('Error Getting Transaction for id=', id, error);
        return {'success':false,
                'data':null};
    });
}

async function deleteTransaction(id: number): Promise<boolean | void> {
    
    await fetch(`${API_BASE_URL}transaction/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
    })
    .then((response) => {
        if (!response.ok) {
        return false;
        }
        return true;
    })
    .catch((error) => {
        console.error('Error Deleting Transaction for id=', id, error);
        return false;
    });
}



async function putTransaction(data:Transaction): Promise<responseTransaction | void> {
    await fetch(`${API_BASE_URL}transaction/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
        body: JSON.stringify(data),
    })
    .then((response) => {
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        return {'success':true,
                'data':response.json()};
    })
    .catch((error) => {
        console.error('Error Putting transaction:', error);
        return {'success':false,
                'data':null};
    });
};





const _ = {
    getUser,
    postTransaction,
    getAllTransactions,
    getTransaction,
    deleteTransaction,
    putTransaction
}

export default _;