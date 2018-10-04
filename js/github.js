window.onload = () => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Phone/i.test(navigator.userAgent) ) {
        let style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "css/mobile.css");
        document.head.appendChild(style);
    }
    $.get("/key.txt", (key) => {
        $.get("https://api.github.com/users/the-jonsey/repos?per_page=100&sort=pushed&access_token=" + key, (repos) => {
            let wrapper = $(".github-wrapper-inner")[0];
            repos.forEach((repo) => {
                let item = document.createElement("div");
                item.setAttribute("class", "github-item");
                let header = document.createElement("h4");
                let link = document.createElement("a");
                link.setAttribute("href", repo.html_url);
                link.innerText = repo.name;
                header.appendChild(link);
                item.appendChild(header);
                let language = document.createElement("p");
                language.innerHTML = "<i>Written in: </i> " + repo.language;
                item.appendChild(language);
                let times = document.createElement("small");
                times.innerHTML = "<i>Created: </i>" + parseDate(repo.created_at) + " <i>Last Updated: </i>" + parseDate(repo.pushed_at);
                item.appendChild(times);
                let description = document.createElement("p");
                description.innerText = repo.description;
                item.appendChild(description);
                wrapper.appendChild(item);
            });
        });
    });
};

/*
<div class="github-item">
    <h4><a href="https://github.com/the-jonsey/mysqcnl">MySQcnL</a></h4>
    <p><i>Written in: </i> Node.JS, MySQL</p>
    <p>A MySQL connector library, used for manipulating large amount of data.</p>
</div>
 */


function parseDate(date) {
    date = new Date(date);
    return zeroes(date.getDate()) + "-" + zeroes(date.getMonth() + 1) + "-" + date.getFullYear();
}


function zeroes(num) {
    return num < 10 ? "0" + num : num;
}
