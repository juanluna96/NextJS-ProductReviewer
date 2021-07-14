import styled from "@emotion/styled"

const Formulario = styled.form`
    max-width:600px;
    width: 95%;
    margin: 5rem auto 2rem auto;

    fieldset{
        margin:2rem 0;
        border: 1px solid #e1e1e1;
        font-size:2rem;
        padding:2rem;
    }
`;

const Campo = styled.div`
    margin-bottom: 2rem;
    @media (min-width: 768px) {
            display:flex;
            align-items:center;
            flex-wrap:wrap;
    }
    width: 100%;

    label {
        @media (min-width: 768px) {
            flex: 0 0 150px;
        }
        display:block;
        font-size: 1.6rem;
    }

    input,textarea {
        @media (min-width: 768px) {
            flex: 1;
        }
        width: 100%;
        padding: 1rem;
    }

    textarea{
        width: 100%;
        max-width:400px;
        height:300px;
    }
`;

const InputSubmit = styled.input`
    background-color: var(--naranja);
    width: 100%;
    padding: 1.5rem;
    text-align: center;
    color: #fff;
    font-size:1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans',sans-serif;
    font-weight: 700;

    &:hover{
        cursor: pointer;
    }
`;

const Error = styled.p`
    background-color: red;
    padding:1rem;
    font-family: 'PT Sans',sans-serif;
    font-weight: 700;
    font-size:1.4rem;
    color:#FFF;
    text-align:center;
    text-transform:uppercase;
    margin:2rem 0;
`;



export { Formulario, Campo, InputSubmit, Error }
