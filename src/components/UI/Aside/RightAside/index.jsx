import Navbar from "../../Navbar";
import cls from './RightAside.module.scss'
import Test from "./Test/test";


const RightAside = ({ children }) => {
    return (
        <aside className={cls.aside}>
            <Navbar />
            {children}
            <Test />
        </aside>


    );
}




export default RightAside;
