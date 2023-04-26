import styled from "@emotion/styled";

const ContainerDiv = styled('div')`
    display: flex;
    width: 100%;
    padding: 0 20px;
    max-width: ${props => props.maxWidth || '1940px'};
    margin: ${props => props.margin || '0 auto'};
`

const Container = ({ children, ...other }) => {
    return (
        <ContainerDiv {...other}>
            {children}
        </ContainerDiv>
    )
}

export default Container;
