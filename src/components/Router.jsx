import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from '../pages/Home/_Layout'

// Import your pages or components
import HomePage from '@pages/Home/Home';

// Account Types
import IndexAccountType from '@pages/AccountType/IndexAccountType/IndexAccountType';
import ShowAccountType from '@pages/AccountType/ShowAccountType/ShowAccountType';
import NewAccountType from '@pages/AccountType/NewAccountType/NewAccountType';
import EditAccountType from '@pages/AccountType/EditAccountType/EditAccountType';

import IndexAccount from '@pages/Account/IndexAccount/IndexAccount';
import ShowAccount from '@pages/Account/ShowAccount/ShowAccount';
import EditAccount from '@pages/Account/EditAccount/EditAccount';
import NewAccount from '../pages/Account/NewAccount/NewAccount';

import IndexEntry from '../pages/Entry/IndexEntry/IndexEntry';
function AppRouter() {
  return (
    <Router>
      <Routes>
      <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

          {/* Account Types */}
          <Route path="/accountTypes/:id/edit" element={<EditAccountType />} />
          <Route path="/accountTypes/:id" element={<ShowAccountType />} />
          <Route path="/accountTypes/new" element={<NewAccountType />} />
          <Route path="/accountTypes" element={<IndexAccountType/> }/>

          {/* Accounts */}
          <Route path="/accounts/:id/edit" element={<EditAccount />} />
          <Route path="/accounts/:id" element={<ShowAccount />} />
          <Route path="/accounts/new" element={<NewAccount />} />
          <Route path="/accounts" element={<IndexAccount/> }/>

          {/* Entries */}
          <Route path="/entries" element={<IndexEntry />} />

          </Route>
        </Routes>
    </Router>
  );
}

export default AppRouter;
