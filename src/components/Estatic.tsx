import styles from '../styles/Estatic.module.css';

interface EstaticProps {
  value: any
  text: string
  background?: string
  color?: string
}

export default function Estatic(props: EstaticProps) {
  return (
    <div className={styles.estatic}>
      <div className={styles.value} style={{ 
        backgroundColor: props.background ?? '#FDD60F',
        color: props.color ?? '#333'
      }}>
        {props.value}
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}