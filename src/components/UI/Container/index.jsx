import styled from "@emotion/styled";

const ContainerDiv = styled('div')`
    display: flex;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 30px;
`

const Container = ({ children, ...other }) => {
    return (
        <ContainerDiv {...other}>
            {children}
        </ContainerDiv>
    )
}

export default Container;
