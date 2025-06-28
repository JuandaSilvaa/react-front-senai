import styles from './Cards.module.css'

export const Cards = ({titulo, descricao, url}) => {
    return (
      <div className={styles.container}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p>{descricao}</p>
        <img className={styles.imagem} src={url} alt="" />
      </div>
    )
  }