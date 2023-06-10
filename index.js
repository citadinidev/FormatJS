//###############################################
//################CITADINI.DEV###################
//###############################################


function PHONE(phone) {

    let x = phone.replace(/\D/g, '');

    if (x.length === 10) {
        return x.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else if (x.length === 11) {
        return x.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2$3-$4');
    } else {
        return phone;
    }

}

function CPF_CNPJ(cpfCnpj) {

    let x = cpfCnpj.replace(/\D/g, '');

    if (x.length === 11) {
        return x.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (x.length === 14) {
        return x.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
        return cpfCnpj;
    }
}


function CEP(cep) {
    let x = cep.replace(/\D/g, '');

    if (x.length === 8) {
        return x.replace(/^(\d{5})(\d{3})$/, '$1-$2');
    } else {
        return cep;
    }
}

module.exports = {
    PHONE,
    CPF_CNPJ,
    CEP
};