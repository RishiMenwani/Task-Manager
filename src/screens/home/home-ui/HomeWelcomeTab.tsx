import { WelcomeCard } from '@/components/welcome-card'
import styles from "../Home.module.scss"
import { Header } from '@/components/layout/header'
import { HeaderTitleNoSSR } from '@/components/layout/header/HeaderTitle'

export function HomeWelcomeTab() {
  return (
    <main className={styles.content}>
      <Header>
        <HeaderTitleNoSSR>Task Management</HeaderTitleNoSSR>
      </Header>
      <WelcomeCard />
    </main>
  )
}
