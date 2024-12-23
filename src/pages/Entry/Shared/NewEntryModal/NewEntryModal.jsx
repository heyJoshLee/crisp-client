import React, { useState } from 'react';
import NewEntryModalPage from './NewEntryModalPage'
import './NewEntryModal.css';
import { createEntry } from '../../../../lib/apis/resources/entry';

const NewEntryModal = ({accountId, setEntries, setBalance}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (formData) => {
    console.log('Form submitted:', formData);
    const {id, name, date, value} = await createEntry(formData);
    setEntries((entries) => [...entries, {id, name, date, value} ]);
    setBalance((balance) => balance + value);
    closeModal(); // Close the modal on successful form submission
  };

  return (
    <div>
      <button onClick={openModal} className="button">New Entry</button>
      <NewEntryModalPage
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        accountId={accountId}
      />
    </div>
  );
};

export default NewEntryModal;
