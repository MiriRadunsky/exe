import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VipInfo from './vipInfo'; 

const VipApp = () => {
  const { term } = useParams();               
  const [items, setItems] = useState([]);

  useEffect(() => {
    doApi(term);
  }, [term]);

  const doApi = async (query) => {
    setItems([]);
    const url = "https://expressrichpepole.onrender.com/";
    try {
      const { data } = await axios.get(url);
      setItems(data); 
    } catch (err) {
      console.log(err);
      alert('There was a problem fetching data');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">VipApp</h2>
      <VipInfo items={items} />
    </div>
  );
};

export default VipApp;
