using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TodoAppWebAPI.Models;
using TodoAppWebAPI.Services;

namespace ToDoAppWebAPITests.Mock
{
    public class ToDoTaskRepositoryMock : IToDoTaskRepository
    {
        public async Task<bool> CreateToDoTask(ToDoTask toDoTask)
        {
            if (string.IsNullOrEmpty(toDoTask.Name))
            {
                
                return await Task.FromResult(false);
            }
            return await Task.FromResult(true);
        }

        public async Task<bool> DeleteToDoTask(int id)
        {
            return true;
        }

        public async Task<ToDoTask> GetToDoTask(int id)
        {
            return new ToDoTask { Id = id, Name = "test", Remarks = "remarks" };
        }

        public async Task<ICollection<ToDoTask>> GetToDoTasks()
        {
            List<ToDoTask> toDoTaskList = new List<ToDoTask>
            {
                new ToDoTask{Id=1,Name="test",Remarks="remarks"}
            };

            return toDoTaskList;
        }

        public async Task<bool> UpdateToDoTask(ToDoTask toDoTask)
        {
            if (string.IsNullOrEmpty(toDoTask.Name))
            {
                return false;
            }
            return true;
        }
    }
}
