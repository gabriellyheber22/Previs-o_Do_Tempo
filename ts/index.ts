const formulario = document.getElementById('form');
const input: HTMLInputElement | null = document.querySelector("#city");
const sectionTemp = document.getElementById('section-tempo');

formulario?.addEventListener("submit", async (event) => { /*  async para tornar a requisição assincrona e não travar a página*/
    event.preventDefault() // Evita que se recargue a página
    if (!input || !sectionTemp) return
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert('O local precisa ter, pelo menos, 3 letras');
        return
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=1afff8cf699024af87a9a91d63f5703d&lang=pt-br&units=metric`) // Faz a requisição na API

        if (!response.ok) {
            alert('Localização não encontrada');
            return
        }
        const data = await response.json() // Transforma a resposta em JSON é assincrona
        const infos = {
            temperatura: Math.round(data.main.temp),
            local: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` 
        }
        sectionTemp.innerHTML = `<div id="dados-do-tempo">
                <h2>${infos.local}</h2>
                <p>${infos.temperatura} cº</p>
            </div>
            <img src="${infos.icon}" >`

    } catch (error) {
        console.log(error);
    }
    


})