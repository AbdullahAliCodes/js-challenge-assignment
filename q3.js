function greetingBot(name, isMorning) {
  return isMorning ? `Good morning, ${name}!` : `Hello, ${name}!`;
}

console.log(greetingBot("Jeff", true));
console.log(greetingBot("Bobby", false));
