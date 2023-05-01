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
                    <a href='https://www.president.uz' className={cls.link} target='_blank' rel='noreferrer' >www.president.uz</a>
                    <a href='http://www.miit.uz' className={cls.link} target='_blank' rel='noreferrer' >www.miit.uz</a>
                    <a href='https://www.asr.gov.uz' className={cls.link} target='_blank' rel='noreferrer' >www.asr.gov.uz</a>
                </Flex>
            </InfoCard>
        </div>
    );
}

export default Aside;
