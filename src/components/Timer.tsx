import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Timer.module.css'

interface TimerProps {
  duration: number
  timerFinished: () => void
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timerFinished}
        colors={['#bce596', '#F7B801', '#ed827a']}
        colorsTime={[0.33, 0.33, 0.33]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}