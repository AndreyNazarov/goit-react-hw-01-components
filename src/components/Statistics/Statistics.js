import s from './Statistics.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
var randomColor = require('randomcolor');

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {stats.length > 0 && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
