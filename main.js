let summaryContainer = document.getElementsByClassName("summary__stats__wrapper")
const p = document.createElement("p");
let features = ''
fetch('http://127.0.0.1:5500/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((feature) => {
            features += `
            <div class="summary__stats__wrapper__${feature.category.toLowerCase()}">
                <div class="summary__stats__wrapper__${feature.category.toLowerCase()}-title">
                    <img src="${feature.icon}" />
                    <h3>${feature.category}</h3>
                </div>
                <div class="summary__stats__wrapper__${feature.category.toLowerCase()}-detail">
                    <h3>${feature.category.score}<span> / 100</span></h3>
                </div>
            </div>
            `
        })
    })
summaryContainer.innerHTML += features