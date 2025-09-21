import React from "react";

const PixaInfo = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <div className="row row-cols-1 row-cols-lg-2 g-4 mt-3">
      {items.map((it) => (
        <div className="col" key={it.id}>
          <article className="pixa-card shadow-sm rounded-4 p-3 p-md-4 h-100 bg-light border">
            <div className="d-flex gap-3 gap-md-4 align-items-center">
              {/* אזור טקסט */}
              <div className="flex-grow-1">
                <h2 className="fw-bold mb-2 pixa-title">
                  {it.tags?.split(",")[0]?.trim() || "Image from Pixabay"}
                </h2>
                <p className="mb-1">
                  <span className="text-muted">By:</span>{" "}
                  <strong>{it.user || "—"}</strong>
                </p>
                <p className="mb-0 text-muted small pixa-tags">
                  {it.tags ? `Tags: ${it.tags}` : "No description available."}
                </p>
              </div>

              {/* תמונה מימין */}
              <a
                href={it.pageURL}
                target="_blank"
                rel="noreferrer"
                className="ms-auto"
                title="Open on Pixabay"
              >
                <img
                  src={it.webformatURL || it.previewURL}
                  srcSet={
                    it.largeImageURL
                      ? `${it.previewURL} 150w, ${it.webformatURL} 300w, ${it.largeImageURL} 600w`
                      : undefined
                  }
                  sizes="(max-width: 576px) 140px, 220px"
                  alt={it.tags || "Pixabay image"}
                  className="pixa-thumb"
                  loading="lazy"
                />
              </a>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default PixaInfo;
