const rollNumber = "26100222";

document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = document.getElementById("bookForm");
  const formData = new FormData(form);

  fetch(`https://api.assignment3.rohanhussain.com/books/${rollNumber}`, {
    method: "POST",
    body: formData,
  })
    .then(() => {
      alert(data.message);
      loadBooks();
    })
    .catch(() => {
      alert("Failed to add book. Please try again.");
      loadBooks();
    });
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("price").value = "";
});

function loadBooks() {
  fetch(`https://api.assignment3.rohanhussain.com/books/${rollNumber}`)
    .then((response) => response.json())
    .then((data) => {
      const booksList = document.getElementById("books");
      booksList.innerHTML = ""; //
      data.books.forEach((book) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${book.title} by ${book.author} - $${book.price}`;
        booksList.appendChild(listItem);
      });
    })
    .catch(() => alert("Failed to upload books. Please try again."));
}

loadBooks();
