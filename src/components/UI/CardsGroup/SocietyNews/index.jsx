import NewsCard from 'components/UI/Cards/NewsCard';
import cls from './SocietyNews.module.scss'

const SocietyNews = ({
    items = []
}) => {
    const news = items?.slice(0,5) || []
    return (
        <div className={cls.wrapper}>
            {
                news?.length > 0 && news?.map((news, index) =>  (
                    <NewsCard 
                        key={index}
                        title='«Сен хам тупой экан»: в Ташкенте водитель оскорбил сотрудника ДПС и устроил истерику'
                        description='Уроженцы Хивы «Д.У.» (1969 г.р.) и его сын «Д.Х.» (1994 г.р.) в период пребывания на заработках на территории Российской Федерации с 2009 года по 2015 год посредством социальных сетей попали под влияние вербовщиков международных террористических организаций.'
                        category='Jamiyat'
                        date='2023-04-24T12:58:51.406Z'
                    />
                ))
            }
        </div>
    );
}

export default SocietyNews;