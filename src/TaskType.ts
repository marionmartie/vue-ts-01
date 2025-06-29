export type TaskData = {
    id: Number | String,
    title: String,
    description?: String,
    completed: Boolean,
    priority?: Number
}

export type Priority = {
    priority: 1 | 2 | 3,
    priorityName: "Low" | "Medium" | "High",
}