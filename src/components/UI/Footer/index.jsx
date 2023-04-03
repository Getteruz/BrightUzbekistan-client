import Link from 'next/link';
import useGetSize from 'hooks/useGetSize';
import Container from '../Container';
import Flex from '../Flex';
import { links, rules } from './data';
import cls from './Footer.module.scss'
import { useRouter } from 'next/router';
import ru from '../../../lang/ru.json'
import uz from '../../../lang/uz.json'
import en from '../../../lang/en.json'

const Footer = () => {
    const { width } = useGetSize('leftAside')
    const style = { marginLeft: `${width || 0}px !important` }
    const router = useRouter()
    const langData = {
        uz,
        ru,
        en
    }
    return (
        <footer className={cls.footer}>
            <Container className={cls.footer__container} maxWidth={1200} margin={`0 0 0 ${width}px`} >
                <Flex width='auto' gap='33'>
                    <div className={cls.footer__text}>Copyright: 2022</div>

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

                <Flex width={'auto'} gap='46'>
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
                        Developed by:
                        <span> Getter</span>
                    </div>
                </Flex>
            </Container>
        </footer>
    );
}

export default Footer;
