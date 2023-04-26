import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import cls from './Rate.module.scss'
import RateItem from './RateItem';

const Rate = ({ rate = [] }) => {
    const { t } = useTranslation()

    return (
        <div className={cls.rate}>
            <Link href='/last-news'>
                <a className={cls.rate__title}>{t('ПОСЛЕДНИЕ НОВОСТИ')}</a>
            </Link>
            <ul className={cls.rate__list}>
                {
                    rate?.length > 0 && rate.map(curr => (
                        <RateItem
                            key={curr.id}
                            currency={curr.Ccy}
                            value={curr.Rate}
                            differens={curr.Diff}
                            up={parseFloat(curr.Diff) >= 0}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default Rate;
