function deleteTask(e) {
  const clicked_button = e.target;
  clicked_button.parentElement.remove();
}

function clickHandler() {
  const text_area = document.getElementById("tweetInput");
  const new_tweet = text_area.value;

  const newListItem = document.createElement("li");
  newListItem.innerText = new_tweet;
  newListItem.classList =
    "list-group-item d-flex justify-content-between align-items-center";
  newListItem.style.margin = "0.5rem";
  newListItem.style.border = "0.1rem solid #01ff30";

  const delButton = document.createElement("button");
  delButton.innerText = "Delete";
  delButton.classList = "btn btn-danger btn-sm delete-button";

  delButton.addEventListener("click", deleteTask);

  newListItem.appendChild(delButton);

  const list = document.getElementById("tweetList");
  list.insertBefore(newListItem, list.firstChild);

  text_area.value = "";
}

const tweet_button = document.getElementById("tweetButton");

tweet_button.addEventListener("click", clickHandler);
