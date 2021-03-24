import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th className={s.th}>Type</th>
                    <th className={s.th}>Amount</th>
                    <th className={s.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(el => {
                    const { id, type, amount, currency } = el;
                    return (
                        <tr key={id}>
                            <td className={s.tdt}>{type}</td>
                            <td className={s.td}>{amount}</td>
                            <td className={s.td}>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
