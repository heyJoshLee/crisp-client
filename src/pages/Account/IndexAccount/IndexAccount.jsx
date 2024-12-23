import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccounts } from '@apis/resources/account';
import IndexResourceTemplate from '@shared/components/IndexResourceTemplate/IndexResourceTemplate';

const IndexAccount = () => {
  const [accounts, setAccounts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await getAccounts();
        setAccounts(data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    console.log("Fetching all accounts");
    fetchAccounts();
  }, [navigate]);

  if (!accounts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <IndexResourceTemplate 
        title={"Accounts"} 
        resources={accounts} 
        slug={"accounts"} 
        textToShow="name"
      />
    </div>
  );
};

export default IndexAccount;
