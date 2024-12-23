import React, { useState } from 'react';
import { createAccountType } from '@apis/resources/accountType';
import NewResourceTemplate from '@shared/components/NewResourceTemplate/NewResourceTemplate';


const NewAccountType = () => {
  const formFields = [
    { name: 'type', label: 'Type', type: 'text' },
  ]

  return (
    <div>
      <NewResourceTemplate 
        title={"New Account Type"} 
        createFunction={createAccountType} 
        fields={formFields} 
        redirectUrl={"/accountTypes"} />
    </div>
  );
};

export default NewAccountType;
