import React, { useState } from 'react';

const useValidacion = (stateInicial, validar, fn) => {
    const [valores, setValores] = useState(stateInicial)
    const [errores, setErrores] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErrores = Object.keys(errores).length === 0;
            if (noErrors) {
                fn(); //Fn = función que se ejecuta en el componente.
            }
            setSubmitForm(false);
        }
    }, []);

    return (
        <div>

        </div>
    )
}

export default useValidacion
