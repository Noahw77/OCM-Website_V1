
document.addEventListener("DOMContentLoaded", function () {
  fetch("blog.json")
    .then(response => response.json())
    .then(data => {
      const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      const latest = sorted[0];
      const container = document.querySelector("#latest-blog-post");

      if (latest && container) {
        container.innerHTML = `
          <div class="blog-card">
            <h4><a href="${latest.link}">${latest.title}</a></h4>
            <p><em>${new Date(latest.date).toLocaleDateString()}</em></p>
            <p>${latest.excerpt}</p>
          </div>
        `;
      }
    });
});
