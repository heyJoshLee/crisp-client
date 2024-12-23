import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAccountById, getEntriesForAccount, getAccountBalance } from '@apis/resources/account';
import ShowResourceHeader from '@shared/components/ShowResourceHeader/ShowResourceHeader';
import NewEntryModal from '../../Entry/Shared/NewEntryModal/NewEntryModal';

const ShowAccount = () => {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const [entries, setEntries] = useState([]);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await getAccountById(id);
        setAccount(response);
        const entriesResponse = await getEntriesForAccount(id);
        setEntries(entriesResponse);
        const balanceResponse = await getAccountBalance(id);
        setBalance(balanceResponse);
      } catch (error) {
        console.error('Error fetching account:', error);
      }
    };

    fetchAccount();
  }, [id]);

  if (!account) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ShowResourceHeader title={`Viewing "${account.name}"`} resource={account} slug="accounts" />
      <hr className="mv-4" />
      <div>
        <h1>{`$${balance}`}</h1>
        <h2>Account Details</h2>
        <p>ID: {account.id}</p>
        <p>Name: {account.name}</p>
        <p>Balance: {account.balance}</p>
        <p>Description: {account.description}</p>
      </div>

      <NewEntryModal accountId={id} setBalance={setBalance} setEntries={setEntries}/>

      {entries.length > 0 && (
        <div>
          <h2>Entries for this Account</h2>
          <ul>
            {entries.map((entry) => (
              <div className='card'>
                <p>{`${entry?.date}: ${entry?.name}`}</p>
                <p>{`Amount: $${entry.value}`}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShowAccount;
