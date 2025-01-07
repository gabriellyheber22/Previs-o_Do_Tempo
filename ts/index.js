"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const formulario = document.getElementById('form');
const input = document.querySelector("#city");
const sectionTemp = document.getElementById('section-tempo');
formulario === null || formulario === void 0 ? void 0 : formulario.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault(); // Evita que se recargue a página
    if (!input || !sectionTemp)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert('O local precisa ter, pelo menos, 3 letras');
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=1afff8cf699024af87a9a91d63f5703d&lang=pt-br&units=metric`); // Faz a requisição na API
        if (!response.ok) {
            alert('Localização não encontrada');
            return;
        }
        const data = yield response.json(); // Transforma a resposta em JSON é assincrona
        const infos = {
            temperatura: Math.round(data.main.temp),
            local: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        };
        sectionTemp.innerHTML = `<div id="dados-do-tempo">
                <h2>${infos.local}</h2>
                <p>${infos.temperatura} cº</p>
            </div>
            <img src="${infos.icon}" >`;
    }
    catch (error) {
        console.log(error);
    }
}));
