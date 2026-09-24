import TeamScore from "./components/TeamScore"

import styles from "./App.module.css"
const App = () => {
  return (
    <div className={styles.scoreboard}>
      <TeamScore></TeamScore>
      <TeamScore></TeamScore>
    </div>
  )
}

export default App