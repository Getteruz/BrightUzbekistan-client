import Navbar from "../../Navbar";
import cls from './RightAside.module.scss'
import Test from "./Test";

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
