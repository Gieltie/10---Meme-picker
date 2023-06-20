import { catsData } from "./catsdata.js"

const emotionRadio = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

emotionRadio.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener('click', getMatchingCatsArray)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray(){
    const isGif = gifsOnlyOption.checked
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
    console.log(selectedEmotion, isGif)
}

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
    let radioItem = ""
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItem += `
        <div class="radio">    
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions">
        </div>`
    }
    emotionRadio.innerHTML = radioItem
}

renderEmotionsRadios(catsData)