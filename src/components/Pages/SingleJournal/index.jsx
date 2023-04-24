import { useRef, useState } from "react";
import { useRouter } from "next/router";
import GreenButton from "components/UI/Buttons/GreenButton";
import CJournal from 'components/UI/CJournal'
import GoToBack from "components/UI/GoToBack";
import Navbar from "components/UI/Navbar";
import cls from './Journal.module.scss'

const Journal = () => {
    const [page, setPage] = useState()
    const router = useRouter()
    const journalRef = useRef()

    return (
        <div className={cls.journal}>
            <div className={cls.journal__nav}>
                <GoToBack title="Мировые новости" />
                <Navbar />
            </div>
            <div className={cls.journal__content}>
                <h2 className={cls.journal__title}>“Bright Uzbekistan” 132 Soni</h2>

                <CJournal
                    src={`/journals/${router.query.id}.pdf`} 
                    ref={journalRef} 
                    onFlip={({data}) => setPage(data+1)} 
                />

                <div className={cls.journal__info}>
                    <span className={cls.journal__info__page}>{`${(page >= 0) ? `${page} - ${page+1}` : '1 - 2'}`}</span>
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
