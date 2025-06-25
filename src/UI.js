import { projectManager } from "./projectManager.js";
import { createTodo } from "./todo.js";
import { createProject } from "./project.js";

const UI = (() => {
    let currentProjectId = null;

    const cache = {
        projectDisplay: document.querySelector("#projectDisplay"),
        todoDisplay: document.querySelector("#todoDisplay"),
        projectForm: document.querySelector("#projectForm"),
        todoForm: document.querySelector("#todoForm"),
        projectSelect: document.querySelector("#projectSelect"),
        showProjectFormButton: document.querySelector("#showProjectForm"),
        showTodoFormButton: document.querySelector("#showTodoForm"),
        cancelProjectButton: document.querySelector("#cancelProject"),
        cancelTodoButton: document.querySelector("#cancelTodo"),
    }

    const highlightActiveProject = (activeId) => {
        document.querySelectorAll("#projectDisplay button").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.id === activeId);
        })
    }

    const renderProjects = () => {
        cache.projectDisplay.textContent = "";
        const projects = projectManager.getAllProjects();
        projects.forEach(project => {
            const button = document.createElement("button");
            button.dataset.id = project.id;
            button.textContent = project.name;
            button.addEventListener("click", () => {
                currentProjectId = project.id;
                renderTodos(project.id);
                highlightActiveProject(project.id);
            });
            cache.projectDisplay.appendChild(button);
        })
    }

    const renderTodos = (projectId) => {
        cache.todoDisplay.textContent = "";
        const project = projectManager.getProjectById(projectId);
        if(!project) return;

        const todoHeader = document.querySelector("#todoHeader");
        todoHeader.textContent = project.name;

        project.todos.forEach(todo => {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todoDiv", `priority-${todo.priority}`, `finished-${todo.isFinished}`);
            // todoDiv.id = todo.id;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("todoCheckbox");
            // checkbox.dataset.id = todo.id;
            checkbox.checked = todo.isFinished; //CHECK HERE

            checkbox.addEventListener("change", () => {
                todoDiv.classList.remove(`finished-${todo.isFinished}`);
                projectManager.updateTodoFinished(todo.id, projectId, checkbox.checked);
                todoDiv.classList.add(`finished-${todo.isFinished}`);
            })

            const titleSpan = document.createElement("span");
            titleSpan.textContent = `${todo.title} (${todo.dueDate})`;

            todoDiv.appendChild(checkbox);
            todoDiv.appendChild(titleSpan);
            cache.todoDisplay.appendChild(todoDiv);
        })
    }

    const updateProjectDropdown = () => {
        cache.projectSelect.textContent = "";

        projectManager.getAllProjects().forEach(project => {
            const option = document.createElement("option");
            option.textContent = project.name;
            option.value = project.id;
            cache.projectSelect.appendChild(option);
        })
    }

    const bindEvent = () => {

        cache.showProjectFormButton.addEventListener("click", () => {
            cache.projectForm.style.display = "block";
        })

        cache.cancelProjectButton.addEventListener("click", () => {
            cache.projectForm.style.display = "none";
            cache.projectForm.reset();
        })

        cache.projectForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#projectName").value.trim();
            if (!name) return;
            projectManager.addProject(name);
            cache.projectForm.reset();
            cache.projectForm.style.display = "none";
            renderProjects();
        })

        cache.showTodoFormButton.addEventListener("click", () => {
            updateProjectDropdown();
            cache.todoForm.style.display = "block";
        })

        cache.cancelTodoButton.addEventListener("click", () => {
            cache.todoForm.style.display = "none";
            cache.todoForm.reset();
        })

        cache.todoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.querySelector("#todoTitle").value.trim();
            const dueDate = document.querySelector("#todoDueDate").value;
            const priority = document.querySelector("#todoPriority").value;
            const description = document.querySelector("#todoDescription");
            const selectedProjectId = cache.projectSelect.value;
            if (!title) return;

            const todo = createTodo(title, description, dueDate, priority, false);
            projectManager.addTodoToProject(todo, selectedProjectId);

            cache.todoForm.reset();
            cache.todoForm.style.display = "none";
            renderTodos(selectedProjectId);
        })
    }

    const init = () => {
        projectManager.getUncategorized();
        renderProjects();
        bindEvent();
    }

    return { init };

})();

export { UI };