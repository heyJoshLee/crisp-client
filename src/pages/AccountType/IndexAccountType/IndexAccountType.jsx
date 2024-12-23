import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getAccountTypes, updateAccountType } from '@apis/resources/accountType';
import IndexResourceTemplate from '@shared/components/IndexResourceTemplate/IndexResourceTemplate';

const IndexAccountType = () => {
  const [accountTypes, setAccountTypes] = useState(null);
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchAccountTypes = async () => {
      try {
        const data = await getAccountTypes();
        console.log('data:', data);
        setAccountTypes(data);
      } catch (error) {
        console.error('Error fetching account type:', error);
      }
    };

    console.log("Fetching all account types");
    fetchAccountTypes();
  }, [navigate]);

  if (!accountTypes) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <IndexResourceTemplate 
        title={"Account Types"} 
        resources={accountTypes} 
        slug={"accountTypes"} 
        textToShow="type"/>
 
    </div>
  
  );
};

export default IndexAccountType;
