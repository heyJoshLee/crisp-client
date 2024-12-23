import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const RESOURCE_URL = `${BASE_URL}/accounts/`;

// Index
export const getAccounts = async () => {
  console.log("Fetching all accounts from:", RESOURCE_URL);
  try {
    const response = await axios.get(RESOURCE_URL);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

// Show
export const getAccountById = async (id) => {
  const url = `${RESOURCE_URL}${id}`;
  console.log("Fetching account by ID from:", url);
  try {
    const response = await axios.get(url);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching account by ID:', error);
    throw error;
  }
};

// Create
export const createAccount = async (accountData) => {
  console.log("Creating account at:", RESOURCE_URL);
  try {
    console.log("sending data:", accountData);
    const response = await axios.post(RESOURCE_URL, accountData);
    console.log("Created account:", response);
    return response.data;
  } catch (error) {
    console.error('Error creating account:', error);
    throw error;
  }
};

// Edit 
export const updateAccount = async (id, accountData) => {
  const url = `${RESOURCE_URL}${id}`;
  console.log("Updating account at:", url);
  console.log("Data:", accountData);
  try {
    const response = await axios.patch(url, accountData);
    console.log("Updated account:", response);
    return response.data;
  } catch (error) {
    console.error('Error updating account:', error);
    throw error;
  }
};

// Delete
export const deleteAccount = async (id) => {
  const url = `${RESOURCE_URL}${id}`;
  console.log("Deleting account at:", url);
  try {
    const response = await axios.delete(url);
    console.log("Deleted account:", response);
    return response.data;
  } catch (error) {
    console.error('Error deleting account:', error);
    throw error;
  }
};

export const getEntriesForAccount = async (id) => {
  const url = `${RESOURCE_URL}${id}/entries`;
  console.log("Fetching entries for account from:", url);
  try {
    const response = await axios.get(url);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching entries for account:', error);
    throw error;
  }
}

export const getAccountBalance = async (id) => {
  const url = `${RESOURCE_URL}${id}/balance`;
  console.log("Fetching balance for account from:", url);
  try {
    const response = await axios.get(url);
    console.log("Response", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching balance for account:', error);
    throw error;
  }
}
