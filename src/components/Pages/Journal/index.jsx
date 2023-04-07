import { useRef } from "react";
import GreenButton from "components/UI/Buttons/GreenButton";
import CJournal from 'components/UI/CJournal'
import GoToBack from "components/UI/GoToBack";
import Navbar from "components/UI/Navbar";
import cls from './Journal.module.scss'
import { useState } from "react";
import NavbarResponse from "components/UI/navbarResponse/navbarResponse";
import Rate from "components/UI/Rate";
import { useGetWindowWidth } from "hooks/useGetWindowWith";

const Journal = () => {
    const [page, setPage] = useState()
    const journalRef = useRef()
    const windowWidth = useGetWindowWidth()

    return (
        <div className={cls.journal}>
            {windowWidth < 501 && <Rate />}
            {windowWidth < 501 && <NavbarResponse />}
            <div className={cls.journal__nav}>
                <GoToBack />

                {windowWidth > 501 && <Navbar />}
            </div>
            <div className={cls.journal__content}>
                <h2 className={cls.journal__title}>“Bright Uzbekistan” 132 Soni</h2>

                <CJournal ref={journalRef} onFlip={({ data }) => setPage(data + 1)} />

                <div className={cls.journal__info}>
                    <span className={cls.journal__info__page}>{`${(page >= 0) ? `${page} - ${page + 1}` : '1 - 2'}`}</span>
                    <div className={cls.journal__info__wrapper}>
                        <div>
                            <h2 className={cls.journal__info__title}>Частным песчаным пляжем расположен в Дубае на острове Палм-Джумейра. </h2>
                            <p className={cls.journal__info__desc}>"Bright Uzbekistan" loyihasi O'zbekistonning eksport, import va investitsiya faoliyati, hamkorlarimiz haqida fikr olish, o'z biznesini jahon miqyosida namoyish etish, yangi, uzoq kutilgan shartnomalar tuzish va yetkazib berish geografiyasini kengaytirish uchun ajoyib imkoniyatdir. </p>
                        </div>
                        <GreenButton>Подписатся на выпуск</GreenButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Journal;
