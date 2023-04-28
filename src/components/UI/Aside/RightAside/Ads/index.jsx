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
                    <Link href='www.president.uz'><a className={cls.link} target='_blank'>www.president.uz</a></Link>
                    <Link href='www.miit.uz'><a className={cls.link} target='_blank'>www.miit.uz</a></Link>
                    <Link href='www.asr.gov.uz'><a className={cls.link} target='_blank'>www.asr.gov.uz</a></Link>
                </Flex>
            </InfoCard>
        </div>
    );
}

export default Aside;
