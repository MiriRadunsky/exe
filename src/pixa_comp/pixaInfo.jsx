import React from 'react';

const PixaInfo = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
      {items.map((it) => (
        <div className="col" key={it.id}>
          <article className="card h-100 shadow-sm">
            <img
              src={it.webformatURL}
              className="card-img-top"
              alt={it.tags}
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title mb-2">
                {it.tags?.split(',')[0]?.trim() || 'Image from Pixabay'}
              </h5>
              <p className="card-text small text-muted mb-2">
                By <strong>{it.user}</strong>
              </p>
              <p className="card-text">
                {it.tags
                  ? `Tags: ${it.tags}`
                  : 'No description available.'}
              </p>
            </div>
           
          </article>
        </div>
      ))}
    </div>
  );
};

export default PixaInfo;
