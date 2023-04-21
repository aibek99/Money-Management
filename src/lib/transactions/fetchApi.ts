import axios from 'axios';
import type {Transaction}  from '../types';


const API_BASE_URL = 'http://127.0.0.1:8000/';

// Get all transactions
async function getAllTransactions(): Promise<Transaction[]> {
  const response = await axios.get(`${API_BASE_URL}transaction/`);
  console.log(response.data);
  return response.data;
}

// Create a new transaction
async function createTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction> {
  const response = await axios.post(`${API_BASE_URL}transaction/`, transaction);
  return response.data;
}

// Update an existing transaction
async function updateTransaction(transaction: Transaction): Promise<void> {
  const { id, ...data } = transaction;
  console.log(id);
  console.log(data);
//   const response = await axios.put(`${API_BASE_URL}transaction/${id}/`, data);
//   return response.data;
}

// Delete an existing transaction
async function deleteTransaction(id: number): Promise<void> {
    await axios.delete(`${API_BASE_URL}transaction/${id}/`);
}


const _ = {
    getAllTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction,
}

export default _;