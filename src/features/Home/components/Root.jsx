import AppContainer from "../../../components/AppContainer"
import styles from "../styles/style.module.css"
import { Link } from "react-router-dom";

function Root() {
  return (
    <AppContainer>
    <div className={styles.container}>
      <div className={styles.title}>
        MTUCI UX/UI COURSE
      </div>
      <Link to={'/tasks'} className={styles.tasksLink}>
          Перейти к заданиям
      </Link>
    </div>
    </AppContainer>
  )
}

export default Root
