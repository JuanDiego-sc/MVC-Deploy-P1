import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (startDate && endDate) {
      onSearch(new Date(startDate), new Date(endDate));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
