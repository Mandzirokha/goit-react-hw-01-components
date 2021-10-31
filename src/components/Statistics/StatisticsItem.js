import css from "./statisticsItem.module.css";

export default function StatisticsItem({ stat }) {
  return (
    <li className={css.item}>
      <span className={css.label}>{stat.label} </span>
      <span className={css.percentage}>{stat.percentage} %</span>
    </li>
  );
}
