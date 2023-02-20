
import axios from 'axios';
export class FixerApiServiceImpl  {

    constructor() { }

    public convertirDivisa = async (divisaOrigen:string,divisaDestino:string,monto:number) => {
        
        var myHeaders = {
            "apikey": "ssYPCoc1mLjLm7OMJVpl7ULNouWGaDIH"
        };

        let conversionDivisa = await axios.get(`https://api.apilayer.com/fixer/convert?to=${divisaDestino}&from=${divisaOrigen}&amount=${monto}`, { headers: myHeaders })
        .then(response => response.data)
        .catch(error => console.log('error', error));

        return conversionDivisa.result;
    }
}

