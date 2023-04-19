import Aside from "components/UI/Aside/RightAside/News";
import AudioCard from "components/UI/AudioCard";
import GreyButton from "components/UI/Buttons/GreyButton";
import Flex from "components/UI/Flex";
import GoToBack from "components/UI/GoToBack";
import LayoutChildWrapper from "components/UI/LayoutChildWrapper";

import { useGetWindowWidth } from "hooks/useGetWindowWith";


const AudioNews = () => {
    const windowWidth = useGetWindowWidth()
    return (
        <LayoutChildWrapper asideComponent={<Aside />}>

            <GoToBack title="Аудио новости" />
            <Flex style={{ margin: '17px 0 104px 0' }}>
                {
                    Array(9).fill(null).map((_, index) =>
                        <AudioCard
                            key={index}
                            title="Под обломками торгового центра в Денау найден второй погибший"
                            category="Спорт"
                            src="/music.mp3"
                        />
                    )
                }
            </Flex>
            <GreyButton label='загрузить еще' style={{ margin: '0 0 145px 0' }} />
        </LayoutChildWrapper>
    );
}

export default AudioNews;
