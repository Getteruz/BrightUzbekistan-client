import RecomendedCard from '..';
import cls from './RecomendedCardList.module.scss'

const RecomendedCardList = ({
    items = []
}) => {
    return (
        <div className={cls.list}>
            {items?.slice(0,1)?.length > 0 && <RecomendedCard fullWidth={true} {...items.slice(0,1)[0]}/>}
            <div className={cls.list__wrapper}>
                {
                    items?.slice(1)?.length > 0 && items.slice(1).map(item =>
                        <RecomendedCard key={item.id} {...item} />    
                    )
                }
            </div>
        </div>
    );
}

export default RecomendedCardList;
