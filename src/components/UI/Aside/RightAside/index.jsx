import Navbar from "../../Navbar";
import Test from "./Test";
import cls from './RightAside.module.scss'
import { useEffect, useRef } from "react";

const RightAside = ({children}) => {
    const asideRef = useRef()
    const prevScrollPos = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            if(prevScrollPos.current > window.scrollY){
                const scrollPos = asideRef.current.scrollTop - (prevScrollPos.current - window.scrollY)
                asideRef.current.scrollTo({
                    top: scrollPos,
                })
            } else {
                asideRef.current.scrollTo({
                    top: window.scrollY,
                })
            }

            prevScrollPos.current = window.scrollY
        }
        if(typeof window !== 'undefined'){
            window.addEventListener('scroll', handleScroll)
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <aside className={cls.aside} ref={asideRef}>
            <Navbar />
            <Test />
            {children}
        </aside>
    );
}

export default RightAside;
