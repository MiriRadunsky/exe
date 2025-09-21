import React from "react";

const VipInfo = ({ items = [] }) => {
  if (!Array.isArray(items) || !items.length) return null;

  return (
    <div className="row row-cols-1 row-cols-lg-2 g-4 mt-3">
      {items.map((p) => (
        <div className="col" key={p.id}>
          <div className="card h-100 shadow-sm">
            <div className="row g-0 h-100">
           
              <div className="col-md-8 d-flex flex-column p-3">
                <h5 className="card-title fs-3 fw-bold">{p.name}</h5>
                <p className="card-text mb-1">
                  <strong>Money:</strong> {p.worth}
                </p>
                <p className="card-text mb-1">
                  <strong>Company:</strong> {p.source}
                </p>
                <p className="card-text text-muted mb-0">
                  <small>
                    Country: {p.country} • Born: {p.birth_year}
                  </small>
                </p>
              </div>

             
              <div className="col-md-4 d-flex align-items-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="img-fluid rounded-end"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VipInfo;
