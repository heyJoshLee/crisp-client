import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAccountTypeWithAccounts } from '@apis/resources/accountType';
import ShowResourceHeader from '@shared/components/ShowResourceHeader/ShowResourceHeader';

const ShowAccountType = () => {
  const { id } = useParams();
  const [accountType, setAccountType] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccountType = async () => {
      try {
        const data = await getAccountTypeWithAccounts(id);
        setAccountType(data.accountType);
        setAccounts(data.accounts);
      } catch (error) {
        console.error('Error fetching account type:', error);
      }
    };

    fetchAccountType();
  }, [id]);

  if (!accountType) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ShowResourceHeader title={`Viewing "${accountType.type}"`} resource={accountType} slug="accountTypes" />
      <hr className='mv-4'/>
      <div className='flex'>
        <h2>Accounts</h2>
        <Link to={`/accounts/new`} className='ml-4'>
          <div className='button'>New Account</div>
        </Link>
      </div>
        {accounts.map(account => (
          <div className='card' key={account.id}>
            <Link to={`/accounts/${account.id}`}>
              {account.name}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ShowAccountType;
