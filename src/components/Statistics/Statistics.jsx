import { Stat } from './Stat';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(stat => {
          return (
            <li className={css.item} key={stat.id}>
              <Stat stat={stat} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
