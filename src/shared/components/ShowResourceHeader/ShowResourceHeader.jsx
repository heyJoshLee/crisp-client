import React from "react";
import {Link } from 'react-router-dom';

const ShowResourceHeader = ({ title, slug, resource }) => {
  return (
      <div className='flex'>
        <h1>{title}</h1>
        <Link to={`/${slug}/${resource.id}/edit`} className='ml-4'>
          <div className='button'>Edit</div>
        </Link>
      </div>
  );
}

export default ShowResourceHeader;