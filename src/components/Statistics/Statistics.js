import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";
import css from "./statistics.module.css";

export default function Statistic({ title, stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.list}>
        {stats.map((stat) => {
          return <StatisticsItem stat={stat} key={stat.id} />;
        })}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
};
