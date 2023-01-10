import { useState } from "react";


export const useForms = (initialForm = {}) => {
  
    const [formState, setFormState] = useState(initialForm)//El estado cambia cada vez que nosotros escribimos en 
    //el input
  
  
      const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
          ...formState,
          [name] : value
        });
  
      }

      const onResetInput = () => {
        setFormState(initialForm);
        
      }
      
  
  
    return {
        ...formState, //Le manda de forma desestructurada los datos
        formState, //Le manda el formstate completo
        onInputChange,
        onResetInput
    }
}