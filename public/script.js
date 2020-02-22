const getRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = "json";

        if(data) {
            xhr.setRequestHeader("Content-Type", "application/json");
        }

        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject("Error occurred.");
        };

        xhr.send(JSON.stringify(data));
    });
    return promise;
}


function addArticle() {
    let article = {
        title: document.getElementById("title").value,
        poster: document.getElementById("poster").value,
        description: document.getElementById("description").value
    };
    let xhrPost = new window.XMLHttpRequest();
    xhrPost.open("OPEN", "http://localhost:3000/routes/api/articles");
    xhrPost.setRequestHeader("Content-Type", "application/json");
    xhrPost.send(JSON.stringify(article));
}