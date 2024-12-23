import react, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

// const fields = [
//   { name: 'type', label: 'Type', type: 'text' },
// ]
const ShowResourceTemplate = ({title, fields, createFunction, redirectUrl}) => {
  const [formData, setFormData] = useState(null);
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
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <h1>{title}</h1>
        <form className="form stacked" onSubmit={handleSubmit}>
          {fields.map(field => (
            <div className="form-group" key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <input onChange={handleOnChange} type={field.type} id={field.name} name={field.name} value={formData[field.name]} />
            </div>
          ))}
          <div className="form-group">
            <button className="button">Create</button>
          </div>
        </form>
      </div>
  );
}

export default ShowResourceTemplate;