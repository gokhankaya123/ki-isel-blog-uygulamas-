function addPost() {
    const title = document.getElementById("postTitle").value.trim();
    const content = document.getElementById("postContent").value.trim();

    if (title === "" || content === "") {
        alert("Başlık ve içerik boş olamaz.");
        return;
    }

    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    const postTitle = document.createElement("h2");
    postTitle.textContent = title;

    const postContent = document.createElement("p");
    postContent.textContent = content;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.onclick = function() {
        postContainer.remove();
    };

    postContainer.appendChild(postTitle);
    postContainer.appendChild(postContent);
    postContainer.appendChild(deleteButton);

    document.getElementById("posts").appendChild(postContainer);

    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
}
