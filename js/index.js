function validateNews(event) {
    event.stopPropagation();
    event.preventDefault();

    const input = document.getElementById("link-noticia");
    const url = input.value;

    const isValid = isValidLink(url);

    if(!isValid) {
        setInvalidUrl(input);
        return;
    }
}

function isValidLink(url){
    const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    return urlPattern.test(url);
}

function setInvalidUrl(input){
    input.setCustomValidity("Url inválida");
    input.reportValidity();
}