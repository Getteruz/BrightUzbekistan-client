import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import GreenButton from "components/UI/Buttons/GreenButton";
import CJournal from 'components/UI/CJournal'
import GoToBack from "components/UI/GoToBack";
import Navbar from "components/UI/Navbar";
import { journals } from "../Journals/data";
import cls from './Journal.module.scss'

const Journal = () => {
    const [page, setPage] = useState()
    const { t } = useTranslation('journal')
    const router = useRouter()
    const journalRef = useRef()
    const [journal] = journals.filter(journal => journal.id === router.query?.id) || []

    return (
        <div className={cls.journal}>
            <div className={cls.journal__nav}>
                <GoToBack title={t('Журнал')} />
                <Navbar />
            </div>
            <div className={cls.journal__content}>
                <h2 className={cls.journal__title}>{t(journal?.title)}</h2>

                <CJournal
                    src={`/journals/${router.query.id}.pdf`}
                    ref={journalRef}
                    onFlip={({ object }) => setPage(object?.pages?.currentPageIndex)}
                />

                <div className={cls.journal__info}>
                    <span className={cls.journal__info__page}>{`${(page > 0) ? `${page} - ${page + 1}` : ''}`}</span>
                    <div className={cls.journal__info__wrapper}>
                        <div>
                            <h2 className={cls.journal__info__title}>{t(journal?.title)}</h2>
                            {/* <p className={cls.journal__info__desc}>{t("Описание журнала")}</p> */}
                        </div>
                        <GreenButton disabled>{t('Подписатся на выпуск')}</GreenButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Journal;
