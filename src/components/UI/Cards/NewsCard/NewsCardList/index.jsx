import NewsCard from '..';
import cls from './List.module.scss'

const NewsCardList = ({items, desc = true}) => {
    console.log(items);
    return (
        <div className={cls.list}>
            {
                items?.length > 0 && items.map((item, index) => <NewsCard key={index} {...item} id={item?.id} />)
            }
        </div>
    );
}

export default NewsCardList;
