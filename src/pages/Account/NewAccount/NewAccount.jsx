import React, { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '@apis/resources/account';
import { getAccountTypes } from '@apis/resources/accountType';
import NewResourceTemplate from '@shared/components/NewResourceTemplate/NewResourceTemplate';

const NewAccount = () => {
const navigate = useNavigate();
const [accountTypes, setAccountTypes] = useState(null);
const [formFields, setFormFields] = useState(null);
let accountTypesArray = [];
useEffect(() => {
  const fetchAccountTypes = async () => {
    try {
      const data = await getAccountTypes();
      setAccountTypes(data);
      accountTypesArray = data.map(type => ([ type.type, String(type.id) ]));
      setFormFields([
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'description', label: 'Description', type: 'text' },
        { name: "accountTypeId", label: "Account Type", type: "select", options: accountTypesArray},
      ])
    } catch (error) {
      console.error('Error fetching account types:', error);
    }
  };
  fetchAccountTypes();
}, [navigate]);

if (!accountTypes) { 
  return <div>Loading...</div>;
}
  


  return (
    <div>
      <NewResourceTemplate 
        title={"New Account"} 
        createFunction={createAccount} 
        fields={formFields} 
        redirectUrl={"/accounts"} />
    </div>
  );
};

export default NewAccount;
