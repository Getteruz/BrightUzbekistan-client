import { useTranslation } from 'next-i18next'
import cls from './Test.module.scss'

export default function Test({}) {
    const { t } = useTranslation('common')
    return (
        <div className={cls.btn}>
            <div className={cls.btn__wrap}>
                <div className={cls.btn__boll}></div>
                <div className={cls.btn__boll3}></div>
            </div>
            <p className={cls.btn__title}>{t('Сайт находится в тестовом режиме')}</p>
        </div>
    )
}