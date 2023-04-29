import Navbar from "../../Navbar";
import Test from "./Test";
import cls from './RightAside.module.scss'

const RightAside = ({children}) => {
    return (
        <aside className={cls.aside}>
            <Navbar />
            <Test />
            {children}
        </aside>
    );
}

export default RightAside;
