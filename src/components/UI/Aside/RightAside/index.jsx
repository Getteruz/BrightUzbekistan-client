import Navbar from "../../Navbar";
import Test from "./Test";
import cls from './RightAside.module.scss'
import { useEffect, useRef } from "react";
import Image from "next/image";

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
                const scrollPos = asideRef.current.scrollTop + (window.scrollY - prevScrollPos.current)
                asideRef.current.scrollTo({
                    top: scrollPos,
                })
            }

            prevScrollPos.current = window.scrollY
        }
        if(typeof window !== 'undefined'){
            window.addEventListener('scroll', handleScroll)
        }

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const onScroll = (e) => {
        e.target.style.overflowY = 'hidden'
    }

    return (
        <aside className={cls.aside} ref={asideRef} onScroll={onScroll}>
            <Navbar />
            <Test />
            {children}
        </aside>
    );
}

export default RightAside;
