const getRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = "json";

        if (data) {
            xhr.setRequestHeader("Content-Type", "application/json");
        }

        xhr.onload = () => {
            if (xhr.status >= 400) {
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

const getAllArticles = () => {
    console.log("Connected");
    getRequest("GET", "http://localhost:3000/routes/api/articles", true)
        .then(responseData => {
            console.log(responseData);

            const showArticles = responseData.map(element => {
                return (
                    "<li>" +
                    "Title: " +
                    element.title +
                    " , " +
                    "Poster: " +
                    element.poster +
                    " , " +
                    "Description: " +
                    element.description +
                    " , " +
                    "</li>"
                )
            })
            document.getElementById("results").innerHTML =
                "<ul>" + showArticles.join("\n") + "</ul>";
        }
        )
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