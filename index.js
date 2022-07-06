let champData = {}

function championData(){
    fetch("http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json")
    .then(response => response.json())
    .then(data => {
        for (const champName in data.data){
            const championData = data.data[champName]
            const element = createChampionCard(championData)
        }
        feather.replace()
    })
}
document.addEventListener('DOMContentLoaded', () => {
    championData()
    const input = document.getElementById("search")
    input.addEventListener('input', (event) =>{
        const text = event.target.value
        const champList = document.getElementsByClassName("champion")
        Array.from(champList).forEach((champ) => {
            if(champ.textContent.toLowerCase().includes(text.toLowerCase())) {
                champ.style.display = "flex"
            } else {
                champ.style.display = "none"
            }
        })
    })
})
    
function createChampionCard(championData) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const a = document.createElement("a");
    const footer = document.createElement("div")
    a.innerHTML = '<i class="star" data-feather="star"></i>'
    img.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`
    img.width="230"
    img.height="400"
    const champName = document.createTextNode(championData.name)
    div.appendChild(champName)
    div.appendChild(img)
    div.appendChild(footer)
    footer.appendChild(a)
    footer.style.width = "100%";
    div.className="champion"
    document.getElementById("champs").appendChild(div)
    a.addEventListener('click', () => {
        a.firstChild.classList.toggle("clicked")
    })
}

