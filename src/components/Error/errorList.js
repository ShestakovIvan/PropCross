import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ErrorList = ({ errorCode, errorText }) => (
    <div>
        <Link to={`/`}>
          <button className="back">← Back</button>
        </Link>

      <div className="errorResult">
        <span> {errorCode}: </span>
        <span> {errorText} </span>
        <div className ='message'> Repeat request </div>
      </div>
    </div>
  );
  export default ErrorList;