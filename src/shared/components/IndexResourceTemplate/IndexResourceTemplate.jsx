import React from "react";
import { Link } from 'react-router-dom';

const IndexResourceTemplate = ({ title, resources, slug, textToShow }) => {
  return (
    <div>
      <div className='flex'>
        <h1>{title}</h1>
        <Link to={`/${slug}/new`} className='ml-4'>
          <div className='button'>New</div>
        </Link>
      </div>
      {resources.map(resource => (
        <div className='card' key={resource.id}>
          <Link to={`/${slug}/${resource.id}`}>
            {resource[textToShow]}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default IndexResourceTemplate;