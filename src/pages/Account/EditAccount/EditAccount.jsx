import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAccountById, updateAccount } from '@apis/resources/account';
import EditResourceTemplate from '@shared/components/EditResourceTemplate/EditResourceTemplate';

const EditAccount = () => {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formFields = [
    { name: 'name', label: 'Account Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'text' },
  ];

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const data = await getAccountById(id);
        setAccount(data);
      } catch (error) {
        console.error('Error fetching account:', error);
        setError('Error fetching account');
      }
    };

    fetchAccount();
  }, [id]);

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <EditResourceTemplate
        resource={account}
        title={"Editing Account"}
        editFunction={updateAccount}
        fields={formFields}
        redirectUrl={`/accounts/${account.id}`}
      />
    </div>
  );
};

export default EditAccount;
