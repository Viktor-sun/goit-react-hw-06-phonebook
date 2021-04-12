import React from 'react';
import './Title.scss';

const Title = ({ title }) => (
  <div className="wrapper-title">
    <h1 className="title">{title}</h1>
  </div>
);

export default Title;
