let champData = {}

function championData(){
    fetch("http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
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
    input.addEventListener('input', () =>{
        
    })
})
    
function createChampionCard(championData) {
    console.log(championData)
    const div = document.createElement("div");
    const img = document.createElement("img");
    const a = document.createElement("a");
    a.innerHTML = '<i class="heart" data-feather="heart"></i>'
    img.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`
    img.width="230"
    img.height="400"
    const champName = document.createTextNode(championData.name)
    div.appendChild(champName)
    div.appendChild(img)
    div.appendChild(a)
    div.className="champion"
    document.getElementById("champs").appendChild(div)
    a.addEventListener('click', () => {
        a.firstChild.classList.toggle("clicked")
    })
}

