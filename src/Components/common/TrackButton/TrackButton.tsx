import styles from './TrackButton.module.css'
import { EButtonAction, IButtonAction } from '../../../utils/customTypes'

export default function TrackButton(buttonAction: IButtonAction){
    const buttonTitle = buttonAction.action === EButtonAction.ADD? '+' : '-';
    
    // can either add or remove a track
    // functionality changes depending on the addition or removal of the track
    return(
        <button className={styles.trackButton}>{buttonTitle}</button>
    )
}
