const inputImageLink = document.querySelector('#imageMovie')
const moviesList = document.querySelector('#moviesList')
const modalOverlay = document.querySelector(".modalOverlay")


function validateImageFormat(image) {
    if (image.endsWith('png') || image.endsWith('jpg') || image.endsWith('jpeg')) {
        return true
    } else return false
}

function addMovie() {
    let imageURL = inputImageLink.value
    if (validateImageFormat(image)) {
        let newMovie = `
            <div class="movie" style="background-image:url(${imageURL})">
                <div class="buttons">
                    <button class="remove-button" onclick="removeMovie(this)"><i class="fas fa-trash-alt"></i></button>
                    <a href="#"><button class="trailer-button"><i class="fas fa-play-circle"></i></button></a>
                </div>
            </div>
    `
    moviesList.innerHTML += newMovie
    inputImageLink.value =''
    } else {
        alert('Formato da imagem inválido.')
        inputImageLink.value =''
    }
    
}

function removeMovie(button) {
    let movieTarget = button.parentNode.parentNode
    movieTarget.remove()
}

function modalOpen() {
    modalOverlay.classList.add('active')
    modalContent.innerHTML =`
    <iframe width="600" height="400" src="https://www.youtube.com/embed" title="YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>###=== Faltam dados para incorporar o video corretamente ===###</p>
    `
}
function modalClose() {
    modalOverlay.classList.remove('active')
}