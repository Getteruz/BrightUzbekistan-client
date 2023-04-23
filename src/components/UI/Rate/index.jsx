import { useTranslation } from 'next-i18next';
import cls from './Rate.module.scss'
import RateItem from './RateItem';

const Rate = () => {
    const { t } = useTranslation()

    return (
        <div className={cls.rate}>
            <span className={cls.rate__title}>{t('ПОСЛЕДНИЕ НОВОСТИ')}</span>
            <ul className={cls.rate__list}>
                <RateItem 
                    currency='usd'
                    value='10845.08'
                    differens='7.92'
                    up={true}
                />
                <RateItem 
                    currency='euro'
                    value='9,400'
                    differens='42.6'
                    up={true}
                />
                <RateItem 
                    currency='rub'
                    value='144.27'
                    differens='0.94'
                    up={false}
                />
            </ul>
        </div>
    );
}

export default Rate;
