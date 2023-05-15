import { GooglePlayIcon } from 'components/UI/icons';
import cls from './GooglePlay.module.scss'

const GooglePlay = (props) => {
    return (
        <button 
            className={cls.btn}
            {...props}
        >
            <GooglePlayIcon />
        </button>
    );
}

export default GooglePlay;
