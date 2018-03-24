import searchComponent from './components/search.js';

function main(){
    alert('foo');
    searchComponent()
        .init()
        .render(document.querySelector('.search'));
}

main();
