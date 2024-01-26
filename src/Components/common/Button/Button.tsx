import { IButton } from "../../../utils/customTypes";
import styles from '../Button/Button.module.css';

export default function Button({buttonTitle, onClick}: IButton){
    return(
        <button className={styles.button} onClick={onClick}>{buttonTitle}</button>
    )
}
