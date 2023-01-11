import AudioCard from 'components/UI/AudioCard';
import NewsImageCard from 'components/UI/NewsImageCard';
import Rate from 'components/UI/Rate';
import cls from './Main.module.scss'

const Main = () => {
    return (
        <main className={cls.main}>
            <Rate />
            <AudioCard />
            <AudioCard />
            <NewsImageCard />
        </main>
    );
}

export default Main;
