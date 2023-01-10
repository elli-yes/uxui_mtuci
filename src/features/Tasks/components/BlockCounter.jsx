import styles from "./TaskPage.module.css"

function BlockCounter({ count }) {

  return (
      <div className={styles.bricksContainer}>
        {Array.apply(null, Array(count))
          .map((_, index) =>
            <div key={index} className={styles.brick}></div>
        )}
      </div>
  )
}

export default BlockCounter
