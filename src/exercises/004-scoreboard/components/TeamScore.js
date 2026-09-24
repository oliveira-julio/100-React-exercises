import React, { useState } from 'react'

import styles from './TeamScore.module.css'

const TeamScore = () => {
    const [score, setScore] = useState(0);
    
    const decreaseScore = () => {
        setScore(score -1)
    }

    const resetScore = () => {
        setScore(0)
    }

    const increaseScore = () => {
        setScore(score +1)
    }

    return (
        <div>
            <div>
                <p className={styles.score_panel}>
                    {score}
                </p>
            </div>
            <div className={styles.button_row}>
                <button className={styles.button_item} onClick={decreaseScore}>Decrease</button>
                <button className={styles.button_item} onClick={resetScore}>Reset</button>
                <button className={styles.button_item} onClick={increaseScore}>Increase</button>
            </div>
        </div>
    )
}

export default TeamScore