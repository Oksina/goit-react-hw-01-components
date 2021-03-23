import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    //console.log(stats);
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            {title && (
                <ul className="stat-list">
                    {stats.map(el => (
                        <li key={el.id} className="item">
                            <span className="label">{el.label}</span>
                            <span className="percentage">{el.percentage}%</span>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Statistics;

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
