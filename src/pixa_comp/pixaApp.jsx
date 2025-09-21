import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PixaInput from './pixaInput';
import PixaInfo from './pixaInfo'; 

const API_KEY = process.env.REACT_APP_API_PIXABAY_KEY;

const PixaApp = () => {
  const { term } = useParams();               
  const [items, setItems] = useState([]);

  useEffect(() => {
    doApi(term || 'cloud');
  }, [term]);

  const doApi = async (query) => {
    setItems([]);
const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=12&safesearch=true`;
    try {
      const { data } = await axios.get(url);
setItems(data?.hits || []);
    } catch (err) {
      console.log(err);
      alert('There was a problem fetching images');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3">PixaApp</h2>
      <PixaInput onSearch={doApi} />
      <PixaInfo items={items} />
    </div>
  );
};

export default PixaApp;
