import Aside from 'components/UI/Aside/RightAside/Ads';
import GoToBack from 'components/UI/GoToBack';
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import ShareBanner from 'components/UI/ShareBanner';
import Image from 'next/image';
import cls from './AboutUs.module.scss'

const tags = ['# Узбекистан', '# Таможня', '# Шавкат Мирзиёев.', '# Экономика']

const AboutUs = () => {
    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <GoToBack title='Последние новости' />
            <main className={cls.about}>
                <div className={cls.about__image}>
                    <Image
                        src='/Images/BrightUzbekistan.svg'
                        layout='fill'
                        objectFit='cover'
                        alt='Bright Uzbekistan foto'
                    />
                </div>
                <h1 className={cls.about__title}>О проекте </h1>
                <p className={cls.about__desc}>
                    Проект "Bright Uzbekistan" является международным проектом, разрабатываемым компанией "Top Business Group" и развивающиеся при поддержке Администрации Президента Республики Узбекистан. Проект включает в себя печатное издание и онлайн информационный портал, которые предназначены для повышения имиджа и продвижения экономического потенциала Узбекистана на международном уровне.
                    <br />
                    <br />
                    Основная цель проекта - показать мировому сообществу экспортный, импортный и инвестиционный потенциал Узбекистана. Проект также направлен на укрепление позиций Узбекистана в международных экономических отношениях и на привлечение иностранных инвесторов в экономику страны. А так же каждый номер журнала это показатель взаимных отношений Узбекистана с другими государствами.
                    <br />
                    <br />
                    Издание включает в себя информационный блок об осуществляемых мерах по поддержке предпринимательской деятельности, а также интервью с преуспевающими бизнесменами и влиятельными лицами Узбекистана и всего мира, новости торговли и ВЭД, аналитические обзоры, статистику и анализ, а также темы, касающиеся туризма, спорта, сельского хозяйства, образования и информационных технологий.
                    <br />
                    <br />
                    Проект "Bright Uzbekistan" — это уникальная возможность узнать о бизнес-возможностях Узбекистана и всего мира, о том, как предприниматели и инвесторы могут воспользоваться этими возможностями для достижения своих целей.
                </p>
                {/* <ShareBanner tags={tags} /> */}
            </main>
        </LayoutChildWrapper>

    );
}

export default AboutUs;
