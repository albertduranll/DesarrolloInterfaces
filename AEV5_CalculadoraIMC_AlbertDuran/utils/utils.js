export const calcularIMC = (weight, height) => {

    if (!isNaN(weight) && !isNaN(height)){

        let imc = (weight / (height * height));

        return imc;
    }
    else {
        return NaN;
    }
};

export const getResultColor = (imc) => {
    let color;
    if (!isNaN(imc)){
        if (imc < 27)
        {
            color = 'green';
        }
        else if (imc >= 27 && imc <= 39.9)
        {
            color = 'orange';
        }
        else if (imc > 40)
        {
            color = 'red';
        }
    }
    return color;
};
