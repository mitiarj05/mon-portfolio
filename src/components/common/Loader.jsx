import { useState, useEffect } from 'react';

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-modern">
      <div className="loader-content">
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loader-text">
          <span>M</span>
          <span>i</span>
          <span>t</span>
          <span>i</span>
          <span>a</span>
          <span className="space"> </span>
          <span>R</span>
          <span>J</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;