import { useState } from "react"
import AppContainer from "../../../components/AppContainer"
import BlockCounter from "./BlockCounter"
import styles from "./TaskPage.module.css"

function TasksPage() {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <div className="flex justify-space-between py-8">
        <aside className="px-4">
          <div className="w-72 bg-white rounded text-center px-4 py-2">Счетчик</div>
        </aside>
        <main>
          <section>
            <div className={styles.title}>Счетчик</div>
            <div className={styles.subtitle}>
              Добавляйте и убирайте плитки с помощью соответствующих кнопок. Кнопка "Cбросить" удалит ваш прогресс
            </div>
          </section>
          <section className={styles.counterContainer}>
            <BlockCounter count={ count }/>
            <div className={styles.title}>{count}</div>
            <div className="">
            <button className={styles.controll} onClick={() => setCount(0)}>Сбросить</button>
            <button disabled={count === 0} className={styles.controll} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button className={styles.controll} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </div>
          </section>
        </main>
      </div>
    </AppContainer>
  )
}

export default TasksPage
