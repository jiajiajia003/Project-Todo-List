import { createProject } from "./project.js";
import { createTodo } from "./todo.js";

const projectManager = (() => {
    let projects = [];

    const loadFromStorage = () => {
        const data = localStorage.getItem("todoProjects");
        if (data) {
            const parsed = JSON.parse(data);
            projects = parsed.map(project => {
                const newProject = createProject(project.name);
                newProject.id = project.id;
                newProject.todos = project.todos.map(todo => {
                    const newTodo = createTodo(
                        todo.title,
                        todo.description,
                        todo.dueDate,
                        todo.priority,
                        todo.isFinished
                    )
                    newTodo.id = todo.id;
                    return newTodo;
                })
                return newProject;
            })
        } else {
            getUncategorized();
        }
    }

    const saveToStorage = () => {
        localStorage.setItem("todoProjects", JSON.stringify(projects));
    }

    const getUncategorized = () => {
        let uncategorzied = projects.find(p => p.name === "Uncategorized");
        if (!uncategorzied) {
            uncategorzied = createProject("Uncategorized");
            projects.push(uncategorzied);
            saveToStorage();
        }

        return uncategorzied;
    }

    const addProject = (name) => {
        if (!name.trim()) return null;
        if (projects.some(p => p.name === name)) return null;
        const newProject = createProject(name);
        projects.push(newProject);
        saveToStorage();
        return newProject;
    }

    const getProjectById = (id) => projects.find(p => p.id === id);
    const getTodoFromProject = (todoId, project) => project.todos.find(t => t.id === todoId);
    const getAllProjects = () => projects;

    const removeProject = (id) => {
        const index = projects.findIndex(p => p.id === id);
        if (index != -1) projects.splice(index, 1);
        saveToStorage();
    }

    const addTodoToProject = (todo, projectId = null) => {
        const project = projectId ? getProjectById(projectId) : getUncategorized();
        if (project.todos.includes(todo)) return;
        project.todos.push(todo);
        saveToStorage();
    }

    const removeTodo = (todoId, projectId) => {
        const project = getProjectById(projectId);
        if (!project) return;

        const index = project.todos.map(todo => todo.id).indexOf(todoId);
        if (index > -1) {
            project.splice(index, 1);
        }
        saveToStorage();
    }

    const updateTodoFinished = (todoId, projectId, isFinished) => {
        const project = getProjectById(projectId);
        if (!project) return;

        const todo = getTodoFromProject(todoId, project);
        if (!todo) return;

        todo.isFinished = isFinished;
        saveToStorage();
    }

    loadFromStorage();

    return {
        getUncategorized,
        addProject,
        getProjectById,
        getAllProjects,
        addTodoToProject,
        removeTodo,
        removeProject,
        updateTodoFinished,
    }
})();

export { projectManager };