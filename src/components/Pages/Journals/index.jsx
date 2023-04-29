import GoToBack from 'components/UI/GoToBack';
import JournalCard from 'components/UI/JournalCard';
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import { useTranslation } from 'next-i18next';
import { journals } from './data';
import cls from './Journals.module.scss'

const Journals = () => {
    const { t } = useTranslation('journal')

    return (
        <LayoutChildWrapper>
            <main className={cls.main}>
                <GoToBack title={t('Журнал')} />
                <div className={cls.main__cards}>
                    {
                        journals?.length > 0 && journals.map(journal => (
                            <JournalCard
                                key={journal.id}
                                id={journal.id}
                                image={journal.image}
                                title={t(journal.title)}
                                desc={t(journal.description)}
                            />
                        ))
                    }
                </div>
            </main>
        </LayoutChildWrapper>
    );
}

export default Journals;
