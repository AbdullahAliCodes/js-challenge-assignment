const post = {
  username: "uncledullaz",
  caption: "Imagined if you imagined, what an imagination you could imagine",
  likes: 2,
  comments: ["yooo", "yoo bro", "you suck", "send link"],
  addLike() {
    this.likes++;
  },
};

const { username, caption } = post;

console.log(
  `Your username is "${username}" and your latest caption is: "${caption}"`,
);
