import React from 'react';
import './BoxComp.css';
const BoxComp = ({ icon, title, description }) => {
  return (
 
     <div className="custom-card p-5">
      <div>
        <div className="icon-container">
          <img src={icon} alt="icon" className="icon" />
        </div>
        <div style={{fontSize:"18px",fontWeight:600}}>{title}</div>
        <div style={{marginBottom:"4px", fontSize:"16px",fontWeight:400}}>{description}</div>
      </div>
    </div>
 

  );
};



export default BoxComp;
