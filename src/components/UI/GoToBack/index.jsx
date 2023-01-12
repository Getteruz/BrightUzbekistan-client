import { useRouter } from 'next/router';
import { CornerUpLeftIcon } from '../icons';
import cls from './GoToBack.module.scss'

const GoToBack = ({title = ''}) => {
    const router = useRouter()
    return (
        <div className={cls.nav}>
            <button 
                className={cls.nav__btn}
                onClick={() => router.back()}
            >
                <CornerUpLeftIcon />
                Назад
            </button>
           {title &&  <span className={cls.nav__title}>| {title}</span>}
        </div>
    );
}

export default GoToBack;
