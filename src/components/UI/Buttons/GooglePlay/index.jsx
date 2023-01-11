import { GooglePlayIcon } from 'components/UI/icons';
import cls from './GooglePlay.module.scss'

const GooglePlay = (props) => {
    return (
        <button 
            className={cls.btn}
            {...props}
        >
            <GooglePlayIcon />
            <div>
                <p className={cls.btn__desc}>Get it on</p>
                <p className={cls.btn__name}>Google Play</p>
            </div>
        </button>
    );
}

export default GooglePlay;
