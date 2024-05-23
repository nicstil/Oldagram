const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const nameEl = document.getElementById("artist-full-name");
const locationEl = document.getElementById("artist-location");
const avatarEl = document.getElementById("artist-avatar-img");
const postEl = document.getElementById("artist-img");
const commentEl = document.getElementById("username-comment");
const likesEl = document.getElementById("likes-count");

const likesBtn = document.getElementById("heart-icon");
const artistImage = document.getElementById("artist-img");
const likesCountEl = document.getElementById("likes-count");

let likesCount = 0;

likesBtn.addEventListener("click", increaseLikes);
artistImage.addEventListener("click", increaseLikes);

function increaseLikes() {
  likesCount++;
  likesCountEl.textContent = `${likesCount} likes`;
}
