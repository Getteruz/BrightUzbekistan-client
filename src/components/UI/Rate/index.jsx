import Button from '../Navbar/Button';
import cls from './Rate.module.scss'
import RateItem from './RateItem';
import { GlassesIcon, GlobusIcon, PersonIcon } from '../icons';
import { useGetWindowWidth } from 'hooks/useGetWindowWith';
import { useState } from 'react';

const Rate = () => {
    const windowWidth = useGetWindowWidth()

    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const [currency, setCurrency] = useState()
    fetch('https://api.bright.getter.uz/currency', options)
        .then(response => response.json())
        .then(response => setCurrency(response))
        .catch(err => console.error(err));
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
                    {
                        currency && currency?.map(e => (
                            <RateItem
                                currency={e?.Ccy}
                                value={e?.Rate}
                                differens={e?.Diff}
                                up={true}
                            />
                        ))
                    }

                </ul>
            </div>
        </>
    );
}

export default Rate;