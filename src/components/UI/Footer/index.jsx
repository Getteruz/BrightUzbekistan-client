import Link from 'next/link';
import useGetSize from 'hooks/useGetSize';
import Container from '../Container';
import Flex from '../Flex';
import { links, rules } from './data';
import cls from './Footer.module.scss'
import { useTranslation } from 'next-i18next';


const Footer = () => {
    const { width } = useGetSize('leftAside')
    const { t } = useTranslation()

    return (
        <footer className={cls.footer}>
            <Container className={cls.footer__container} maxWidth={1200} margin={`0 0 0 ${width}px !important`} >
                <Flex width='auto' gap='33'>
                    <div className={cls.footer__text}>Copyright: 2023</div>

                    <span>
                        <Flex gap='46'>
                            {
                                links?.length > 0 && links.map(options =>
                                    <Link
                                        key={options.id}
                                        href={options.link}
                                    >
                                        <a
                                            className={cls.footer__link}
                                            style={{ [options.color && 'color']: options.color }}
                                        >
                                            {t(options.label)}
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
                                rules?.length > 0 && rules.map(options =>
                                    <Link
                                        key={options.id}
                                        href={options.link}
                                    >
                                        <a
                                            className={cls.footer__link}
                                            style={{ [options.color && 'color']: options.color }}
                                        >
                                            {t(options.label)}
                                        </a>
                                    </Link>
                                )
                            }
                        </Flex>
                    </span>

                    <div className={cls.footer__developed}>
                        Developed by:
                        <a href='https://getter.uz' target='_blank' rel="noreferrer" > Getter</a>
                    </div>
                </Flex>
            </Container>
        </footer>
    );
}

export default Footer;
