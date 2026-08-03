import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/">
              <Home size={14} />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, idx) => (
            <li key={idx} className="breadcrumb-item">
              <ChevronRight size={14} className="breadcrumb-sep" />
              {item.path ? (
                <Link to={item.path}>{item.label}</Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
