import Button from '../Navbar/Button';
import cls from './Rate.module.scss'
import RateItem from './RateItem';
import { GlassesIcon, GlobusIcon, PersonIcon } from '../icons';
import { useGetWindowWidth } from 'hooks/useGetWindowWith';
import { useState } from 'react';
import { useEffect } from 'react';
import ru from '../../../lang/ru.json'
import uz from '../../../lang/uz.json'
import en from '../../../lang/en.json'
import { useRouter } from 'next/router';

const Rate = () => {
    const windowWidth = useGetWindowWidth()
    const router = useRouter()
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const [currency, setCurrency] = useState()
    useEffect(() => {
        fetch('https://api.bright.getter.uz/currency', options)
            .then(response => response.json())
            .then(response => setCurrency(response))
            .catch(err => console.error(err));
    }, [])
    const langData = {
        uz,
        ru,
        en
    }

    return (
        <>
            {windowWidth < 501 && <div className={cls.tashkent}>
                <p className={cls.tashkent__text}>{langData[router.locale]?.city} 2023</p>
                <Button
                    label={langData[router.locale]?.VISIONALLY}
                    icon={GlassesIcon}
                />
            </div>
            }

            <div className={cls.rate}>
                {windowWidth > 500 && <span className={cls.rate__title}>{langData[router.locale]?.lastNew}</span>}
                <ul className={cls.rate__list}>
                    {
                        currency && currency?.map((e, index) => (
                            <RateItem
                                key={index}
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