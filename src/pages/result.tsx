import Button from '../components/Button'
import Estatic from '../components/Estatic'
import styles from '../styles/Result.module.css'
import { useRouter } from "next/router"

export default function result() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

  const total = +router.query.total
  const certains = +router.query.certains
  const percent = Math.round((certains / total) * 100)

  return (
    <div className={styles.result}>
      <h1>Resultado Final</h1>
      <div style={{ display: 'flex' }}>
        <Estatic text="Perguntas" value={total} />
        <Estatic text="Certas" value={certains} background='#9cd2a4' />
        <Estatic text="Percentual" value={`${percent}%`} background='#de6a33' />
      </div>
      <Button href='/' text='Tentar novamente' />
    </div>
  )
}