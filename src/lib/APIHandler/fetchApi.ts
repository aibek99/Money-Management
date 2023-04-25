import {API_BASE_URL} from "./config";
import Cookies from 'js-cookie';

import type {PTransaction, responseAllTransaction, responseTransaction, responseUser, TransactionData, TagData} from "./types";



async function postTransaction(data: PTransaction): Promise<responseTransaction> {
    const token: string = Cookies.get('token');

    const response = await fetch(`${API_BASE_URL}transaction/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
        body: JSON.stringify(data),
    });
    
    if (!response.ok) {
        console.error('Error Posting Transactions', response.statusText);
        return {'success':false,
                'data':null};
    }else{
        const responseData = await response.json();
        return {'success':true,
            'data': responseData};
    }
};



async function getUser(): Promise<responseUser> {
    const token: string = Cookies.get('token');

    const response =  await fetch(`${API_BASE_URL}user/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
    });

    if (!response.ok) {
        return {'success':false,
                'data':null};
    // throw new Error(response.statusText);
    }else{
        const responseData = await response.json();
        return {'success':true,
            'data': responseData};
    }
}


async function getAllTransactions(): Promise<responseAllTransaction> {
    const token: string = Cookies.get('token');

    const response =  await fetch(`${API_BASE_URL}transaction/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
    });

    if (!response.ok) {
        console.error('Error Getting Transactions:', response.statusText);
        return {'success':false,
                'data':null};
    // throw new Error(response.statusText);
    }else{
        const responseData = await response.json();
        return {'success':true,
            'data': responseData};
    }
}

async function getTransaction(id: number): Promise<responseTransaction> {
    const token: string = Cookies.get('token');

    const response = await fetch(`${API_BASE_URL}transaction/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
    });

    if (!response.ok) {
        console.error('Error Getting Transaction for id=', id, response.statusText);
        return {'success':false,
                'data':null};
    }else{
        const responseData = await response.json();
        return {'success':true,
            'data': responseData};
    }
}

async function deleteTransaction(id: number): Promise<boolean> {
    const token: string = Cookies.get('token');
    const response = await fetch(`${API_BASE_URL}transaction/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
    });

    if (!response.ok) {
        console.error('Error Getting Transaction for id=', id, response.statusText);
        return false;
    }else{
        return true;
    }
}



async function putTransaction(data:TransactionData): Promise<responseTransaction> {
    const token: string = Cookies.get('token');

    const response = await fetch(`${API_BASE_URL}transaction/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        console.error('Error Putting Transaction for id=', data.id, response.statusText);
        return {'success':false,
                'data':null};
    }else{
        const responseData = await response.json();
        return {'success':true,
            'data': responseData};
    }
};



async function getAllTags(): Promise<TagData[] | null> {
    const token: string = Cookies.get('token');
    const response =  await fetch(`${API_BASE_URL}tag/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', "Authorization": `Token ${token}`},
    });

    if (!response.ok) {
        console.error('Error Getting Tags:', response.statusText);
        return null;
    // throw new Error(response.statusText);
    }else{
        const responseData = await response.json();
        return responseData;
    }
}



const _ = {
    getUser,
    postTransaction,
    getAllTransactions,
    getTransaction,
    deleteTransaction,
    putTransaction,
    getAllTags
}

export default _;