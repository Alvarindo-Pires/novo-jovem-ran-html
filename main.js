const cardContainer = document.querySelector(".card-container");
const searchImput = document.querySelector("#searchImput");

const displayData = data => {
    cardContainer.innerHTML = "";
    data.forEach(e => { 
        cardContainer.innerHTML +=
        <div class="card">
        <h4>$(e.title)</h4>
        <p>$(e.description)</p>
        </div>
    })
}
searchImput.addEventListener("keyup", (e) => {
    const search = data.filter(i => i.title.toLocaleLowerCase().incluse(e.target.value.toLocaleLowerCase()));
    displayData(search);
})

window.addEventListener("load", displayData.bind(null,data))