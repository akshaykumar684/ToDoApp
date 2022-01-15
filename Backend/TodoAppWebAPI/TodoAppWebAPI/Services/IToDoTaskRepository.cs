using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoAppWebAPI.Models;

namespace TodoAppWebAPI.Services
{
    public interface IToDoTaskRepository
    {
        Task<ICollection<ToDoTask>> GetToDoTasks();
        Task<ToDoTask> GetToDoTask(int id);
        Task<bool> CreateToDoTask(ToDoTask toDoTask);
        Task<bool> UpdateToDoTask(ToDoTask toDoTask);
        Task<bool> DeleteToDoTask(int id);
    }
}
