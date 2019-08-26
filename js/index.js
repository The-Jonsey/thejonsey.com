window.onload = () => {
  init(false);
  $.get("/key.txt", (key) => {
    $.get(
      "https://api.github.com/users/the-jonsey/repos?per_page=100&sort=pushed&access_token="
      + key, (repos) => {
        let wrapper = $("#projects .fp-tableCell")[0];
        let size = repos.length;
        repos.forEach((repo) => {
          let item = document.createElement("div");
          if (repo.language == null) {
            size--;
            return;
          }
          item.setAttribute("class", "slide github-item repo-" + repo.language.toLowerCase().replace(/\s/g, "-"));
          let header = document.createElement("h1");
          let link = document.createElement("a");
          link.setAttribute("href", repo.html_url);
          link.setAttribute("target", "_blank");
          link.setAttribute("rel", "noopener noreferrer");
          link.innerText = repo.name;
          header.appendChild(link);
          item.appendChild(header);
          let language = document.createElement("p");
          language.innerHTML = "<i>Written in: </i> " + repo.language;
          item.appendChild(language);
          let times = document.createElement("small");
          times.innerHTML = "<i>Created: </i>" + parseDate(repo.created_at)
              + " <i>Last Updated: </i>" + parseDate(repo.pushed_at);
          item.appendChild(times);
          $.get("https://api.github.com/repos/The-Jonsey/" + repo.name
              + "/commits?per_page=1&access_token=" + key, (commit) => {
            let commitMessage = document.createElement("p");
            commitMessage.innerHTML = "<i>latest commit:</i> "
                + commit[0].commit.message;
            commitMessage.style.marginBottom = "0";
            item.appendChild(commitMessage);
            let description = document.createElement("p");
            description.innerText = repo.description;
            item.appendChild(description);
            size--;
            if (size === 0) {
              fullpage_api.destroy("all");
              init(true);
            }
          });
          wrapper.appendChild(item);
        });
    });
  });
  $(".switcher").click((ev) => {
    console.log(
        document.getElementById(ev.target.getAttribute("for").substr(1)));
    if (document.getElementById(
        ev.target.getAttribute("for").substr(1)).style.display === "none") {
      $("#container").children().fadeOut(200);
      setTimeout(() => {
        $(ev.target.getAttribute("for")).fadeIn(200);
      }, 200);
    }
  });
};

function parseDate(date) {
  date = new Date(date);
  return zeroes(date.getDate()) + "-" + zeroes(date.getMonth() + 1) + "-"
      + date.getFullYear();
}

function zeroes(num) {
  return num < 10 ? "0" + num : num;
}

function init(navigation) {
  $('#fullpage').fullpage({
    autoScrolling: true,
    loopBottom: true,
    navigation: navigation,
    navigationPosition: 'left',
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    lazyLoading: false,
  });
}