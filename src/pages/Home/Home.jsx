import React, { useEffect} from "react";
import { getAccountTypes } from '@apis/resources/accountType';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div>
      <h1>Welcome. Please Choose an option below</h1>
      <Link to="/accountTypes">
        <div className='mr-2 button'>Account Types</div>
      </Link>
      <Link to="/accounts">
        <div className='mr-2 button'>Accounts</div>
      </Link>
      <Link to="/entries">
        <div className='mr-2 button'>Entries</div>
      </Link>
    </div>
  );
}

export default Home;