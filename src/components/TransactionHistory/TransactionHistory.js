import TransactionItem from "./TransactionItem";
import css from "./transactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.blank}>
          <th className={css.column}>Type</th>
          <th className={css.column}>Amount</th>
          <th className={css.column}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.history}>
        {items.map((item) => (
          <tr className={css.blank} key={item.id}>
            <TransactionItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
