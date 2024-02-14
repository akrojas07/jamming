import styles from './TrackButton.module.css'
import { EButtonAction, IButtonAction } from '../../../utils/customTypes'

export default function TrackButton({action, onClick}: IButtonAction){
    const buttonTitle = action === EButtonAction.ADD? '+' : '-';
    return(
        <button className={styles.trackButton} onClick={onClick}>{buttonTitle}</button>
    )
}
