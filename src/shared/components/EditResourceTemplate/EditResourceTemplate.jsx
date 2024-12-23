import react, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

// const fields = [
//   { name: 'type', label: 'Type', type: 'text' },
// ]
const EditResourceTemplate = ({resource, title, fields, editFunction, redirectUrl}) => {
  const [formData, setFormData] = useState(resource);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(resource);
  }, [resource]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await editFunction(resource.id, formData);
      if (redirectUrl) {
        navigate(redirectUrl);
      } else {
        console.log('Resource updated successfully!');
      }
    } catch (error) {
      console.error('Failed to update resource:', error);
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
            <button className="button">Save</button>
          </div>
        </form>
      </div>
  );
}

export default EditResourceTemplate;