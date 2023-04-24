import GoToBack from 'components/UI/GoToBack';
import JournalCard from 'components/UI/JournalCard';
import LayoutChildWrapper from 'components/UI/LayoutChildWrapper';
import { useTranslation } from 'react-i18next';
import { journals } from './data';
import cls from './Journals.module.scss'

const Journals = () => {
    const { t } = useTranslation()

    return (
        <LayoutChildWrapper>
            <main className={cls.main}>
                <GoToBack title={t('Журнал')} />
                <div className={cls.main__cards}>
                    {
                        journals?.length > 0 && journals.map(journal => (
                            <JournalCard
                                id={journal.id}
                                key={journal.id}
                                image={journal.image}
                                title={journal.title}
                                desc={journal.description}
                            />
                        ))
                    }
                </div>
            </main>
        </LayoutChildWrapper>
    );
}

export default Journals;
