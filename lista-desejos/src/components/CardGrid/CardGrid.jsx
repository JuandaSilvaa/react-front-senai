import styles from './CardGrid.module.css'
import { Card } from "../Card/Card";

export const CardGrid = () => {
  return (
    <div className={styles.grid}>
      <Card
        name="Ps5"
        description="Para jogar"
        image="https://http2.mlstatic.com/D_NQ_NP_697302-MLU78076147107_072024-O.webp"
      />
            <Card
        name="Ps5"
        description="Para jogar"
        image="https://http2.mlstatic.com/D_NQ_NP_697302-MLU78076147107_072024-O.webp"
      />
    </div>
  );
};
