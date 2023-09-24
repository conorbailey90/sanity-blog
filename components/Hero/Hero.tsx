import styles from './Hero.module.css'
import { ProfileType } from '@/types'


function Hero(props: {profile: ProfileType}) {
    const {profile} = props;

  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h1>{profile.fullName}</h1>
            <h4>{profile.headline}</h4>
        </div>
    </section>
  )
}

export default Hero