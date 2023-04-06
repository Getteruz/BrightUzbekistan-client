import NewsCard from '..';
import cls from './List.module.scss'

const NewsCardList = ({items, desc = true}) => {

    return (
        <div className={cls.list}>
            {
                items?.length > 0 && items.map(item => <NewsCard 
                    key={item.id} 
                    id={item?.id}
                    title={item?.ru?.title}
                    time={item?.publishDate}
                    category={item?.mainCategory?.ru}
                    desc={desc && item?.ru?.shortDescription}
                />)
            }
        </div>
    );
}

export default NewsCardList;
