
import Image from 'next/image'
import rocketIllustration from '@/assets/img/rocket.png'
import { Button } from '@/common/ui/button'
import styles from "./WelcomeCard.module.scss"

export function WelcomeCard() {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.rocketImage} src={rocketIllustration} alt="Rocket illustration" />
      <h2 className={styles.title}>
        Hi 👋 <br />
        Welcome to Your Personal Task Manager
      </h2>
      <p className={styles.description}>
        Streamline your tasks with our task manager. Stay organized, prioritize
        your to-do list, and track progress all in one place. Boost productivity
        and achieve your goals effortlessly.
      </p>
      <Button className={styles.getStartedButton}>Get started</Button>
    </div>
  )
}
