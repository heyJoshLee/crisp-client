import react, { useState, useEffect } from "react";
import Header from "@shared/components/Header/Header";
import { getEntries } from "@apis/resources/entry";
import { isDateBetween } from "../../../lib/util/dateHelpers";


const IndexEntry = () => {
  const [entries, setEntries] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getEntries();
        setEntries(data);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "startDate") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Filtering entries");

    if (!startDate || !endDate) {
      console.error("Start and End dates are required");
      return;
    }
    const filteredEntries = entries.filter((entry) => {
      return isDateBetween(entry.date, startDate, endDate);
    });
    setEntries(filteredEntries);
  }


  return (
    <div>
      <h1>Entries {`(${entries.length} items)`}</h1>
      {entries.length > 0 && (
        <div>
          <h2>Filter By Date</h2>
          <form className="form side-by-side" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input onChange={handleOnChange} className="mr-4" name="startDate" id="startDate" type="date" />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input onChange={handleOnChange} name="endDate" id="endDate" type="date" />
          </div>
          <input type="submit" value="Filter" className="button" />
          </form>
          <ul>
            {entries.map((entry) => (
              <div className='card'>
                <p>{`${entry.date}: ${entry.name}`}</p>
                <p>{`Amount: $${entry.value}`}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
     
    </div>
  );
}

export default IndexEntry;