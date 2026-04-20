function greetingBot(name, isMorning) {
  const greeting = (isMorning && "Good morning") || "Hello";
  return `${greeting}, ${name}!`;
}

console.log(greetingBot("Jeff", true));
console.log(greetingBot("Bobby", false));
