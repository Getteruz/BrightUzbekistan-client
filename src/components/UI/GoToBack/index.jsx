import { useRouter } from 'next/router';
import { CornerUpLeftIcon } from '../icons';
import cls from './GoToBack.module.scss'
import ru from '../../../lang/ru.json'
import уз from '../../../lang/уз.json'
import uz from '../../../lang/uz.json'
import en from '../../../lang/en.json'

const GoToBack = ({ title = '' }) => {
    const router = useRouter()
    const langData = {
        uz,
        уз,
        ru,
        en
    }
    return (
        <div className={cls.nav}>
            <button
                className={cls.nav__btn}
                onClick={() => router.back()}
            >
                <CornerUpLeftIcon />
                {langData[router.locale]?.back}
            </button>
            {title && <span className={cls.nav__title}>| {title}</span>}
        </div>
    );
}

export default GoToBack;
