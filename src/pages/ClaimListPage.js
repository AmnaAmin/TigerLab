import React, { useState, useEffect } from 'react';
import ClaimList from '../components/ClaimList';
import axios from 'axios';

const ClaimListPage = () => {
  const [claims, setClaims] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [status, setStatus] = useState('');

  const API_ENDPOINT = 'http://localhost:8001/api/v1/claims';

  useEffect(() => {
    // Fetch data from API and set it to the claims state
    axios
      .get(API_ENDPOINT)
      .then((res) => setClaims(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredClaims = claims
    .filter((claim) => {
      if (status === '') return true;
      return claim.status === status;
    })
    .filter((claim) => {
      if (searchValue === '') return true;
      return (
        claim.policyNumber.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilter = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Claim ID"
        onChange={handleSearch}
      />
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="Submitted">Submitted</option>
        <option value="Approved">Approved</option>
        <option value="Processed">Processed</option>
        <option value="Completed">Completed</option>
        <option value="Rejected">Rejected</option>
      </select>
      <ClaimList claims={filteredClaims} />
    </div>
  );
};

export default ClaimListPage;
