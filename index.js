import { catsData } from "./catsdata.js"

const emotionRadio = document.getElementById('emotion-radios')

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
    let radioItem = ""
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItem += `<p>${emotion}</p>`
    }
    emotionRadio.innerHTML = radioItem
}

renderEmotionsRadios(catsData)