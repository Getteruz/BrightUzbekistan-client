import NewsCard from '..';
import cls from './List.module.scss'

const NewsCardList = ({items, desc = true}) => {

    return (
        <div className={cls.list}>
            {
                items?.length > 0 && items.map((item, index) => 
                <NewsCard 
                    key={index} 
                    id={item?.id} 
                    ru={item?.ru}
                    publishDate={item?.created_at}
                    categories={item?.categories?.map(ctg => ctg.ru)}
                />)
            }
        </div>
    );
}

export default NewsCardList;
