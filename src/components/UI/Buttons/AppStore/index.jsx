import { AppStoreIcon } from 'components/UI/icons';
import cls from './AppStore.module.scss'

const AppStore = (props) => {
    return (
        <button 
            className={cls.btn}
            {...props}
        >
            <AppStoreIcon />
            <div>
                <p className={cls.btn__desc}>Available on the</p>
                <p className={cls.btn__name}>App Store</p>
            </div>
        </button>
    );
}

export default AppStore;
