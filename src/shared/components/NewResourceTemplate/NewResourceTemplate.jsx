import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const NewResourceTemplate = ({ title, fields, createFunction, redirectUrl }) => {
  const initialFormData = fields.reduce((acc, field) => {
    if (field.options && field.options.length > 0) {
      return { ...acc, [field.name]: field.options[0][1] };
    }
    return { ...acc, [field.name]: '' };
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createFunction(formData);
      if (redirectUrl) {
        navigate(redirectUrl);
      } else {
        console.log('Resource created successfully!');
      }
    } catch (error) {
      console.error('Failed to create resource:', error);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!formData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <form className="form stacked" onSubmit={handleSubmit}>
        {fields.map(field => (
          <div className="form-group" key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.options ? (
              <select
                onChange={handleOnChange}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
              >
                {field.options.map((option) => (
                  <option key={option[1]} value={option[1]}>
                    {option[0]}
                  </option>
                ))}
              </select>
            ) : (
              <input
                onChange={handleOnChange}
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
              />
            )}
          </div>
        ))}
        <div className="form-group">
          <button className="button" type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewResourceTemplate;
