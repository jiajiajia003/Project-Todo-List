function createTodo(title, description, dueDate, priority, isFinished = false) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    dueDate,
    priority,
    isFinished,
  };
}

export { createTodo };
