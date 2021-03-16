import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  //console.log(stats);
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      {title && (
        <ul class="stat-list">
          {stats.map((el) => (
            <li key={el.id} class="item">
              <span class="label">{el.label}</span>
              <span class="percentage">{el.percentage}%</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
