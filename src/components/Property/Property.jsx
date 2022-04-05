import styles from './Property.module.css';

export const Property = ({ type, name }) => (
    <div className={styles.wrapper}>
        <div className={styles.type}>
            <span>{type}</span>
        </div>
        <div className={styles.name}>
            <span>{name}</span>
        </div>
    </div>
)