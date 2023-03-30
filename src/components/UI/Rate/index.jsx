import Button from '../Navbar/Button';
import cls from './Rate.module.scss'
import RateItem from './RateItem';
import { GlassesIcon, GlobusIcon, PersonIcon } from '../icons';
import { useGetWindowWidth } from 'hooks/useGetWindowWith';

const Rate = () => {
    const windowWidth = useGetWindowWidth()
    return (
        <>
            {windowWidth < 501 && <div className={cls.tashkent}>
                <p className={cls.tashkent__text}>ТАШКЕНТ 2022</p>
                <Button
                    label='для слабовидящих'
                    icon={GlassesIcon}
                />
            </div>
            }

            <div className={cls.rate}>
                {windowWidth > 500 && <span className={cls.rate__title}>Последние новости</span>}
                <ul className={cls.rate__list}>
                    <RateItem
                        currency='usd'
                        value='10845.08'
                        differens='7.92'
                        up={true}
                    />
                    <RateItem
                        currency='euro'
                        value='9,400'
                        differens='42.6'
                        up={true}
                    />
                    <RateItem
                        currency='rub'
                        value='144.27'
                        differens='0.94'
                        up={false}
                    />
                </ul>
            </div>
        </>
    );
}

export default Rate;
