// Constantes e Variáveis
const amount = 9;
const paragraphsContent = [
    'Aenean ex dolor, mattis nec venenatis ac, feugiat sed ipsum. Vivamus ac mauris nunc. Maecenas in elit ornare, feugiat turpis id, fermentum lectus. Nunc commodo, diam eu scelerisque placerat, ligula mi pulvinar nulla, rhoncus aliquam orci lorem quis sem. Cras hendrerit pulvinar tellus, vel faucibus urna dictum id. Vestibulum rhoncus nisi libero, fringilla tincidunt erat ultrices eu. Morbi fringilla enim a suscipit scelerisque. Nulla et condimentum sapien, vitae congue quam. Mauris dictum arcu leo, id tempor justo tristique hendrerit. Donec tincidunt dui ac laoreet fringilla. Vivamus ante est, dapibus sed sem fringilla, lacinia posuere sapien. Curabitur id nibh interdum eros finibus aliquet a et ligula. Vivamus vel justo elit. Sed faucibus est et urna vulputate hendrerit.',
    'Fusce elementum nulla nec nisi tempus, eu blandit purus blandit. Donec euismod vulputate libero, id efficitur eros eleifend non. Morbi id pharetra arcu, ut sagittis arcu. In porttitor purus egestas ex tincidunt, sed sodales ipsum aliquam. Mauris a lectus et ex iaculis mollis nec id dolor. Cras ac nunc purus. Integer facilisis, justo eu porttitor congue, dui nunc accumsan neque, a suscipit ex dolor et turpis. Vestibulum at dapibus felis.',
    'Vestibulum ullamcorper a velit a interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut neque et mi condimentum mollis eget vitae eros. Vivamus pellentesque, lorem et vestibulum egestas, mauris arcu volutpat eros, a vestibulum leo urna sed massa. Nullam nunc nunc, interdum sit amet massa eu, fermentum efficitur nisi. Donec pretium ut ipsum ac aliquet. Pellentesque ultrices arcu nisl, sed mollis mi porttitor et. Mauris dictum, urna eu scelerisque rutrum, lacus erat laoreet magna, a tempus nisi magna et arcu. Pellentesque feugiat ligula tristique ante pulvinar scelerisque. Nam fringilla condimentum porttitor.'
];
const titlesContent = ['Loren Dolor Nulla Vestibulum','Dolor', 'Nulla', 'Vestibulum'];

function createParagraphs(array) {
    const article = document.getElementsByClassName('article')[0];
    let count = 0;
    for (let index = 0; index < array.length; index += 1) {
        let paragraph = document.createElement('p');
        paragraph.innerHTML = array[index];
        article.appendChild(paragraph);
    }
    return count;
}

function createContent (){
    const article = document.getElementsByClassName('article')[0];
    for (let index = 0; index < titlesContent.length; index += 1) {
        let titles = '';
        if (index === 0) {
            titles = document.createElement('h1');
            titles.innerHTML = titlesContent[index];
            titles.className = 'article-title';
            article.appendChild(titles);
            createParagraphs(paragraphsContent);
        } else {
            titles = document.createElement('h2');
            titles.innerHTML = titlesContent[index];
            titles.className = 'title';
            article.appendChild(titles);
            createParagraphs(paragraphsContent);
        }
    }
}
createContent();