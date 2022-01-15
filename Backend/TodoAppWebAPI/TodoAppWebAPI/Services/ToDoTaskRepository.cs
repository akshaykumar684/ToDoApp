using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoAppWebAPI.Models;

namespace TodoAppWebAPI.Services
{
    public class ToDoTaskRepository : IToDoTaskRepository
    {
        private readonly ToDoTaskDbContext _toDoTaskDbContext;
        public ToDoTaskRepository(ToDoTaskDbContext toDoTaskDbContext)
        {
            _toDoTaskDbContext = toDoTaskDbContext;
        }

        public async Task<bool> CreateToDoTask(ToDoTask toDoTask)
        {
            await _toDoTaskDbContext.Tasks.AddAsync(toDoTask);
            return await _toDoTaskDbContext.SaveChangesAsync() >= 0;
        }

        public async Task<bool> DeleteToDoTask(int id)
        {
            var toDoTask = await _toDoTaskDbContext.Tasks.FirstOrDefaultAsync(c => c.Id == id);
            if (toDoTask == null)
            {
                return false;
            }
            _toDoTaskDbContext.Tasks.Remove(toDoTask);

            return await _toDoTaskDbContext.SaveChangesAsync() >= 0;
        }

        public async Task<ToDoTask> GetToDoTask(int id)
        {
            var toDoTask = await _toDoTaskDbContext.Tasks.FirstOrDefaultAsync(c => c.Id == id);
            return toDoTask;
        }

        public async Task<ICollection<ToDoTask>> GetToDoTasks()
        {
            var toDoTasks = await _toDoTaskDbContext.Tasks.ToListAsync();
            return toDoTasks;
        }

        public async Task<bool> UpdateToDoTask(ToDoTask toDoTask)
        {
             _toDoTaskDbContext.Tasks.Update(toDoTask);
            return await _toDoTaskDbContext.SaveChangesAsync() >= 0;
        }
    }
}
