async function getAddressByCep() {
    const cep = document.getElementById('inputCep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        (document.getElementById('rua').innerHTML = data.logradouro);
        (document.getElementById('bairro-distrito').innerHTML = data.bairro);
        (document.getElementById('localidade').innerHTML = `${data.localidade}/${data.uf}`);
    } catch (error) {
        alert("Verifique as informações e tente novamente.");
    }
}

async function getPrevisao() {
    const lat = document.getElementById('lati').value;
    const lon = document.getElementById('long').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`);
        const data = await response.json();
        document.getElementById('temp').innerHTML = `Previsão de tempo de acordo com a região: ${data.current.temperature_2m} ° C`;
        
    } catch (error) {
        console.log(error);
    }
}