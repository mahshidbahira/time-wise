function greet(name?: string): string {
  return `Hello, ${name ? name : "World"}!`;
}

export { greet };
