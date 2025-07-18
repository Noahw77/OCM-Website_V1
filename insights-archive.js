
document.addEventListener("DOMContentLoaded", function () {
  fetch("blog.json")
    .then(response => response.json())
    .then(data => {
      const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      const container = document.getElementById("archive-list");
      sorted.forEach(post => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
          <h4>${post.title}</h4>
          <p><em>${new Date(post.date).toLocaleDateString()}</em></p>
          <p>${post.excerpt}</p>
          <a href="${post.link}">Read More</a>
        `;
        container.appendChild(card);
      });
    });
});
