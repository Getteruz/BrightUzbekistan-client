import { useTranslation } from 'react-i18next'
import cls from './Test.module.scss'

export default function Test() {
    const { t } = useTranslation()

    return (
        <div className={cls.btn}>
            <div className={cls.btn__wrap}>

                <div className={cls.btn__boll}></div>
                <div className={cls.btn__boll3}></div>
            </div>
            <p className={cls.btn__title}>{t('тест')}</p>
        </div>
    )
}