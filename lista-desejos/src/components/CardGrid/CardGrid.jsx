import styles from "./CardGrid.module.css";
import { Card } from "../Card/Card";

export const CardGrid = ({ wishs, handleDelete }) => {
  return (
    <div className={styles.grid}>
      {wishs.map((wish, index) => (
        <Card
          key={ `${wish.name}-${index}` }
          name={wish.name}
          description={wish.description}
          image={wish.urlImage}
          date={wish.date}
          onDelete={() => handleDelete (index)}
        />
      ))}
    </div>
  );
};
