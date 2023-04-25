import DownloadButton from 'components/UI/Buttons/DownloadButton';
import InfoCard from 'components/UI/Cards/InfoCard';
import Flex from 'components/UI/Flex';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import cls from './Ads.module.scss'

const Aside = () => {
    const { t } = useTranslation(['about'])

    return (
        <div className={cls.cards__wrapper}>
            <InfoCard
                title={t('Для рекламодателей!')}
                subtitle={t('Медакит для размещения модульных реклам и пиар статьей в журнале Bright Uzbekistan')}
            >
                <DownloadButton label={t('Скачать медия кит')} src='https://storage.bright.getter.uz/media-kit.pdf' />
            </InfoCard>
            <InfoCard
                title={t('Полезные ссылки')}
                subtitle={t('Проект Bright Uzbekistan осуществляется при поддержке Администрации Президента Республики Узбекистан, Министерства инвестиций, промышленности и торговли и Агентства стратегических Реформ при Президенте Республики Узбекистан.')}
            >
                <Flex gap='20' direction='column'>
                    <Link href='https://lex.uz'><a className={cls.link} target='_blank'>Lex.uz</a></Link>
                    <Link href='https://mygov.uz'><a className={cls.link} target='_blank'>mygov.uz</a></Link>
                    <Link href='https://prezident.uz'><a className={cls.link} target='_blank'>Preziden.uz</a></Link>
                </Flex>
            </InfoCard>
        </div>
    );
}

export default Aside;
