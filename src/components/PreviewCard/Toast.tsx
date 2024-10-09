import React from 'react'
import styles from "./Toast.module.css"

export default function Toast() {
  const [isShown, setIsShown] = React.useState(false)


  return (
    <div className={styles.wrapper}>
      <div className={styles.character}>
      Create an account to read the full story.
      </div>
    </div>
  )
}
