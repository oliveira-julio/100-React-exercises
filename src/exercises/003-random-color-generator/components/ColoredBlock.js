
import styles from './ColoredBlock.module.css'


const ColoredBlock = ({color}) => {
    return (
        <div className={styles.square} style={{backgroundColor: color}}></div>
    )
}

export default ColoredBlock