function loadPage(page) {
    fetch(page + ".html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Ошибка загрузки страницы:", error));
}