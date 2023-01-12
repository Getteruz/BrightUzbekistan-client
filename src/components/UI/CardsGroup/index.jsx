import Flex from '../Flex';
import NewsCard from '../Cards/NewsCard';
import NewsImageCard from '../Cards/NewsImageCard';
import cls from './CardsGroup.module.scss'
import Navigation from './Navigation';
import NewsCardWithBorder from '../Cards/NewsCardWithBorder';

const CardsGroup = ({
    direction = '',
    mainCard = { direction: 'grid' },
    cardType = '',
    withNavigation = true,
    button = {},
    name = '',
    items = []
}) => {
    const sleatedArr = Array.from(items)
    const mainCardIndex = sleatedArr.findIndex(item => item?.mainCard)
    const mainCardData = mainCardIndex >= 0 && sleatedArr.splice(mainCardIndex, mainCardIndex + 1)?.[0]

    return (
        <div className={cls.group}>
            {withNavigation && (
                <Navigation
                    btnLabel={button?.label}
                    btnColor={button?.color}
                    link={button?.link}
                    title={name}
                />
            )}
            <Flex direction={`${direction === 'reverse' ? 'column-reverse' : 'column'}`} gap='42'>
                {mainCardData && (
                    <NewsImageCard
                        {...mainCardData}
                        direction={mainCard?.direction}
                    />
                )}
                <div className={cls.group__items}>
                    {
                        sleatedArr.length > 0 && sleatedArr.map(item =>
                            item.cardType === 'with-border'
                                ? (<NewsCardWithBorder
                                    key={item?.id}
                                    withImage={true}
                                    {...item}
                                />)
                                : (<NewsCard
                                    key={item?.id}
                                    {...item}
                                />)
                        )
                    }
                </div>
            </Flex>
        </div>
    );
}

export default CardsGroup;
