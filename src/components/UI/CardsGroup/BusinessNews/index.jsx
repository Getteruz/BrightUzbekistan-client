import NewsCard from 'components/UI/Cards/NewsCard';
import NewsCardWithBorder from 'components/UI/Cards/NewsCardWithBorder';
import NewsImageCard from 'components/UI/Cards/NewsImageCard';
import cls from './BusinessNews.module.scss'

const BusinessNews = ({
    items = []
}) => {
    const firstGroup = items.slice(0, 2) || []
    const secondGroup = items.slice(3,5) || []

    return (
        <div className={cls.wrapper}>
            <div className={cls.wrapper__group}>
                {firstGroup?.length > 0 && firstGroup.map((item, index) => 
                    <NewsCardWithBorder 
                        key={item.id}
                        description='Джефф Безос вложил 3 миллиарда долларов в создание противосмертоносного препарата'
                        date='2023-04-24T12:58:51.406Z'
                        category='Biznes'
                    />
                )}
            </div>
            <NewsImageCard 
                id={1}
                title='Основатель и генеральный директор Tesla уже пять недель сокращает свою долю в компании.'
                description='В комментариях на странице некоторые блогеры уже предложили Маску помощь в продвижении каналов.'
                category='Biznes'
                image='/Images/image.webp'
                date='2023-04-24T12:58:51.406Z'
                direction='column' 
                reverse={true} 
            />
            <div className={cls.wrapper__group}>
                {secondGroup?.length > 0 && secondGroup.map((item, index) => 
                    <NewsCard 
                        key={index}
                        title='Джефф Безос вложил 3 миллиарда долларов в создание противосмертоносного препарата'
                        date='2023-04-24T12:58:51.406Z'
                        category='Biznes'
                    />
                )}
            </div>
        </div>
    );
}

export default BusinessNews;