import Navbar from '../Navbar';
import cls from './RightAside.module.scss'

const RightAside = () => {
    return (
        <aside className={cls.aside}>
            <Navbar />
        </aside>
    );
}

export default RightAside;
