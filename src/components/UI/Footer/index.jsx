import Link from 'next/link';
import useGetSize from 'hooks/useGetSize';
import Container from '../Container';
import Flex from '../Flex';
import { links, rules } from './data';
import cls from './Footer.module.scss'
import { useRouter } from 'next/router';
import { useGetWindowWidth } from 'hooks/useGetWindowWith';

const Footer = () => {
    const { width } = useGetSize('leftAside')
    const router = useRouter()
    const windowWidth = useGetWindowWidth()
    return (
        <footer className={cls.footer}>
            <Container className={cls.footer__container} maxWidth={1200} margin={`0 0 0 ${width}px`} >
                <Flex className={cls.footer__left} width='auto' gap='33'>
                    {windowWidth > 500 ? <div className={cls.footer__text}>Copyright: 2023</div> : ""}

                    <span>
                        <Flex gap='46'>
                            {
                                links[router.locale]?.length > 0 && links[router.locale]?.map(options =>
                                    <Link
                                        key={options.id}
                                        href={options.link}
                                    >
                                        <a
                                            className={cls.footer__link}
                                            style={{ [options.color && 'color']: options.color }}
                                        >
                                            {options.label}
                                        </a>
                                    </Link>
                                )
                            }
                        </Flex>
                    </span>


                </Flex>

                <Flex width={'auto'} gap={windowWidth > 500 ? 46 : 7} style={windowWidth > 500 ? { marginTop: "8px" } : { marginTop: "0" }} >
                    <span>
                        <Flex gap='17'>
                            {
                                rules[router.locale]?.length > 0 && rules[router.locale]?.map(options =>
                                    <Link
                                        key={options.id}
                                        href={options.link}
                                    >
                                        <a
                                            className={cls.footer__link}
                                            style={{ [options.color && 'color']: options.color }}
                                        >
                                            {options.label}
                                        </a>
                                    </Link>
                                )
                            }
                        </Flex>
                    </span>

                    <div className={cls.footer__developed}>
                        {windowWidth < 500 ? <div className={cls.footer__developed__text}>Copyright: 2023</div> : ""}
                        Developed by:
                        <a href='https://getter.uz' target='_blank'> Getter</a>
                    </div>
                </Flex>
            </Container>
        </footer >
    );
}

export default Footer;
