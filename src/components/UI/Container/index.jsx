import styled from "@emotion/styled";

const ContainerDiv = styled('div')`
    display: flex;
    width: 100%;
    max-width: ${props => props.maxWidth || '1920px'};
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
