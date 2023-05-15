import { AppStoreIcon } from 'components/UI/icons';
import cls from './AppStore.module.scss'

const AppStore = (props) => {
    return (
        <button 
            className={cls.btn}
            {...props}
        >
            <AppStoreIcon />
        </button>
    );
}

export default AppStore;
