import Link from 'next/link';
import Container from '../Container';
import Flex from '../Flex';
import { links, rules } from './data';
import cls from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <Container className={cls.footer__container}>
                <Flex width='auto' gap='33'>
                    <div className={cls.footer__text}>Copyright: 2022</div>

                    <span>
                        <Flex gap='46'>
                            {
                                links?.length > 0 && links.map(options =>
                                    <Link
                                        key={options.id}
                                        className={cls.footer__link}
                                        href={options.link}
                                        style={{ [options.color && 'color']: options.color }}
                                    >
                                        {options.label}
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
                                        className={cls.footer__link}
                                        href={options.link}
                                        style={{ [options.color && 'color']: options.color }}
                                    >
                                        {options.label}
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
