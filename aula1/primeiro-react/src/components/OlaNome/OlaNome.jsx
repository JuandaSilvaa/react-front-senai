import styles from './OlaNome.module.css'

export const OlaNome = (props) => {
    const {name} = props
    return (
      <div className={styles.container}>
        <h1>Olá {name}!</h1>
      </div>
    )
  }
  