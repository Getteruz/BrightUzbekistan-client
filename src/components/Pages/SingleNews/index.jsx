import Image from "next/image";
import Aside from "components/UI/Aside/RightAside/News";
import NewsCard from "components/UI/Cards/NewsCard";
import RecomendedCardList from "components/UI/Cards/RecomendedCard/RecomendedCardList";
import CardsGroup from "components/UI/CardsGroup";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";
import ShareBanner from "components/UI/ShareBanner";
import { newsData } from "./data";
import cls from './SingleNews.module.scss'

const tags = ['# Узбекистан', '# Таможня', '# Шавкат Мирзиёев.', '# Экономика']

const SingleNews = () => {
    return (
        <LayoutChildWrapper asideComponent={<Aside />}>
            <main className={cls.main}>
                <GoToBack title="Последние новости" />
                <div className={cls.main__wrapper}>
                    <h2 className={cls.main__title}>Мирзиёев анонсировал ряд изменений в таможенной сфере</h2>
                    <NewsCard time="9:41" category="Политика" title="17 февраля президент Шавкат Мирзиёев провел совещание по дальнейшему реформированию таможни и преобразованию ее в сферу, свободную от коррупции." />
                    <div className={cls.main__image}>
                        <Image
                            src='/Images/prezident.webp'
                            layout="fill"
                            objectFit="cover"
                            alt="Image"
                        />
                    </div>
                    <h3 className={cls.main__subtitle}>Как сообщили в пресс-службе главы государства, таможенная система является важным связующим звеном между отечественной и мировой экономикой.</h3>
                    <p className={cls.main__desc}>
                        «Если эта система не будет работать правильно и прозрачно, то будет только препятствовать предпринимательству и инвестициям. Поэтому в 2019 году началось реформирование таможенного администрирования и процедур. В частности, на таможенных постах организованы коридоры упрощенного контроля. Сегодня через них проходят 95 процентов пассажиров и 75 процентов грузов. Разрешения 60 видов, которые прежде выдавались 12 различными ведомствами, сегодня предоставляются в электронном виде через “единое окно”. В результате время таможенного оформления сократилось в 10 раз. В стратегии развития на 2022-2026 годы поставлена цель довести объем экспорта до 30 миллиардов долларов и число иностранных туристов до 7 миллионов. Это возлагает особую ответственность на таможенные органы», – говорится в сообщении.
                        <br />
                        <br />
                        В связи с этим на совещании основное внимание уделено развитию таможенной системы, улучшению условий на постах.
                        <br />
                        <br />
                        «Таможенные посты – это лицо нашей страны, именно здесь формируется первое впечатление. В них должны быть удобные условия для населения и предпринимателей.
                        <br />
                        <br />
                        Даны указания по совершенствованию инфраструктуры пограничных таможенных постов, благоустройству прилегающей к ним территории, реконструкции некоторых постов и ремонту ведущих к ним дорог», – сказал Шавкат Мирзиёев.
                    </p>
                    <time className={cls.main__time}>7 Февраль, 2022.  09:11</time>
                </div>
                <div className={cls.main__banner}>
                    <ShareBanner tags={tags} />
                </div>
                {/* <div className={cls.main__cards}>
                    <CardsGroup news={{...newsData['political-news'], withNavigation: true}} />
                </div>
                <div className={cls.main__recomended}>
                    <h4 className={cls.main__recomended__text}>Репортерские статьи</h4>
                    <RecomendedCardList items={newsData['last-news'].items}/>
                </div> */}
            </main>
        </LayoutChildWrapper>
    );
}

export default SingleNews;
