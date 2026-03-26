import type { taskType } from "../../Tasks/Types/TaskTypes"

export type ProjectType = { 
  name: string,
  tasks: [taskType]
  completed: boolean
}