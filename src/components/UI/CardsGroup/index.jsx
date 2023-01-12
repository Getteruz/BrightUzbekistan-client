import Flex from '../Flex';
import NewsCard from '../NewsCard';
import NewsImageCard from '../NewsImageCard';
import cls from './CardsGroup.module.scss'
import Navigation from './Navigation';

const CardsGroup = ({
    direction = '',
    mainCard = {direction: 'grid'},
    withNavigation = true,
    button = {},
    name = '',
    items = []
}) => {
    const indexOfItemWithImage = items.findIndex(item => item.image)
    const itemWithImage = items.splice(indexOfItemWithImage, indexOfItemWithImage + 1)?.[0]

    return (
        <div className={cls.group}>
            {withNavigation && (
                <Navigation
                    btnLabel={button.label}
                    btnColor={button.color}
                    link={button.link}
                    title={name}
                />
            )}
            <Flex direction={`${direction === 'reverse' ? 'column-reverse' : 'column'}`} gap='42'>
                {itemWithImage && (
                    <NewsImageCard
                        title={itemWithImage?.title}
                        desc={itemWithImage?.desc}
                        time={itemWithImage?.time}
                        category={itemWithImage?.category}
                        image={itemWithImage?.image}
                        direction={mainCard?.direction}
                    />
                )}
                <div className={cls.group__items}>
                    {
                        items.length > 0 && items.map(item => 
                            <NewsCard 
                                key={item.id}
                                title={item.title}
                                time={item.time}
                                category={item.category}
                            />    
                        )
                    }
                </div>
            </Flex>
        </div>
    );
}

export default CardsGroup;
