import styled from '@emotion/styled'

const Boton = styled.a`
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    border:1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin-right:1rem;
    background-color: ${props => props.bgColor ? '#DA552F' : 'white'};
    color: ${props => props.bgColor ? 'white' : '#000'};
    width: 100%;
    text-align: center;
    
    @media (min-width: 768px) {
        max-width:${props => props.fullWidth ? '100%' : '25rem'};
    }

    &:last-of-type{
        margin-right: 0;
    }

    &:hover{
        cursor: pointer;
    }
`;



export default Boton
