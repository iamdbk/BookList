// Book Constrcutor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book to List
UI.prototype.addBookTioLIst = function (book) {
  const list = document.querySelector("#book-list");
  const row = document.createElement("tr");
  //    const colTitle = document.createElement("td"),
  //     colAuthor = document.createElement("td"),
  //     colIsbn = document.createElement("td"),
  //     colCross = document.createElement("td");
  //   colTitle.append(book.title);
  //   colAuthor.append(book.author);
  //   colIsbn.append(book.isbn);
  //   colCross.append("X");
  //   row.append(colTitle, colAuthor, colIsbn, colCross);
  // list.append(row);
  // OR
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td class><a><span class="material-icons">
    delete_forever
    </span></a></td>
 
    `;
  list.append(row);
};

// Event Listeners
document.querySelector("#book-form").addEventListener("submit", function (e) {
  let title = document.querySelector("[title]").value,
    author = document.querySelector("[author]").value,
    isbn = document.querySelector("[isbn]").value;
  if (title === "" || author === "" || isbn === "") {
    alert("enter data properly");
  } else {
    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();
    ui.addBookTioLIst(book);
    (document.querySelector("[title]").value = ""),
      (document.querySelector("[author]").value = ""),
      (document.querySelector("[isbn]").value = "");
  }

  e.preventDefault();
});

// Deleteing the row
document.querySelector(".table").addEventListener("click", function (e) {
  if (e.target.classList.contains("material-icons")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});
