import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PixaInput = ({ onSearch }) => {
  const [termLocal, setTermLocal] = useState('');
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    const q = termLocal.trim() || params.term || 'cloud';
    onSearch(q);           
    navigate(`/pixa/${q}`); 
  };

  return (
    <form className="d-flex gap-2" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="search for images..."
        value={termLocal}
        onChange={(e) => setTermLocal(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};

export default PixaInput;
