import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAccountTypeById, updateAccountType } from '@apis/resources/accountType';
import EditResourceTemplate from '@shared/components/EditResourceTemplate/EditResourceTemplate';

const EditAccountType = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [accountType, setAccountType] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formFields = [
    { name: 'type', label: 'Type', type: 'text' },
  ]



  useEffect(() => {
    const fetchAccountType = async () => {
      try {
        const data = await getAccountTypeById(id);
        setAccountType(data);
      } catch (error) {
        console.error('Error fetching account type:', error);
        setError('Error fetching account type');
      }
    };

    fetchAccountType();
  }, [id]); 


  if (!accountType) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <EditResourceTemplate 
        resource={accountType} 
        title={"Editing Account Type"} 
        editFunction={updateAccountType} 
        fields={formFields} 
        redirectUrl={`/accountTypes/${accountType.id}`} />
    </div>
  );
};

export default EditAccountType;
