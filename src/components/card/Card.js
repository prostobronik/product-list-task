import Badge from "../badge/Badge";
import s from "./Card.module.css";

const Card = ({ title, url }) => {
  return (
    <div className={s.card} style={{ backgroundImage: `url(${url})` }}>
      <h2 className={s.title}>
        {title} <Badge badge="NEW" />
      </h2>
      <p className={s.brand}>{title}</p>
    </div>
  );
};

export default Card;
