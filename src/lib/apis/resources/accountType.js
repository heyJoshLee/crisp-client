import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const RESOURCE_URL = `${BASE_URL}/accountTypes/`;

// Index
export const getAccountTypes = async () => {
  console.log("Fetching all account types from:", RESOURCE_URL);
  try {
    const response = await axios.get(`${RESOURCE_URL}`);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching account types:', error);
    throw error;
  }
};

// Show
export const getAccountTypeById = async (id) => {
  const url = `${RESOURCE_URL}${id}`;
  console.log("Fetching account type by ID from:", url);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching account type by ID:', error);
    throw error;
  }
};

// Create
export const createAccountType = async (accountTypeData) => {
  console.log("Creating account type at:", RESOURCE_URL);
  try {
    const response = await axios.post(RESOURCE_URL, accountTypeData);
    console.log("Created account type:", response);
    return response.data;
  } catch (error) {
    console.error('Error creating account type:', error);
    throw error;
  }
};

// Edit
export const updateAccountType = async (id, accountTypeData) => {
  const url = `${RESOURCE_URL}${id}`;
  console.log("Updating account type at:", url);
  try {
    const response = await axios.patch(url, accountTypeData);
    console.log("Updated account type:", response);
    return response.data;
  } catch (error) {
    console.error('Error updating account type:', error);
    throw error;
  }
};

// Delete
export const deleteAccountType = async (id) => {
  const url = `${RESOURCE_URL}${id}`;
  console.log("Deleting account type at:", url);
  try {
    const response = await axios.delete(url);
    console.log("Deleted account type:", response);
    return response.data;
  } catch (error) {
    console.error('Error deleting account type:', error);
    throw error;
  }
};

export const getAccountTypeWithAccounts = async (id) => {
  const url = `${RESOURCE_URL}${id}/accounts`;
  console.log("Fetching account type with accounts from:", url);
  try {
    const response = await axios.get(url);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching account type with accounts:', error);
    throw error;
  }
}