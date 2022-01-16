using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;
using TodoAppWebAPI.Controllers;
using TodoAppWebAPI.Models;
using TodoAppWebAPI.Services;
using ToDoAppWebAPITests.Mock;

namespace ToDoAppWebAPITests
{
    [TestClass]
    public class ToDoTaskControllerTests
    {
        private readonly IToDoTaskRepository _toDoTaskRepository;
        public ToDoTaskControllerTests()
        {
            _toDoTaskRepository = new ToDoTaskRepositoryMock();
        }
        [TestMethod]
        public void GetToDoTasks_Resllt_NotNull()
        {
            var toDoTaskController = new ToDoTaskController(_toDoTaskRepository);
            
            Task.Run(async () =>
            {
               var result =  await toDoTaskController.GetToDoTasks();
               Assert.IsNotNull(result.Result);
            }).Wait();
        }

        [TestMethod]
        public void GetToDoTask_ReturnOkObject_With200StatusCode()
        {
            var toDoTaskController = new ToDoTaskController(_toDoTaskRepository);
            
            Task.Run(async () =>
            {
                var result = await toDoTaskController.GetToDoTask(1);
                ActionResult returnObjectType = result.Result;
                Assert.IsInstanceOfType(returnObjectType, typeof(OkObjectResult));
                Assert.IsNotNull(result.Result);
                Assert.AreEqual(((OkObjectResult)returnObjectType).StatusCode, 200);
            }).Wait();
        }

        [TestMethod]
        public void CreateToDoTask_ReturnCreatedAtRouteObject_With201StatusCode()
        {
            var toDoTaskController = new ToDoTaskController(_toDoTaskRepository);
            var toDoTaskObject = new ToDoTask { Id = 1, Name = "test", Remarks = "remarks" };
            Task.Run(async () =>
            {
                var result = await toDoTaskController.CreateToDoTask(toDoTaskObject);
                Assert.IsInstanceOfType(result, typeof(CreatedAtRouteResult));
                Assert.AreEqual(((CreatedAtRouteResult)result).StatusCode, 201);
            }).Wait();
        }


        [TestMethod]
        public void UpdateToDoTask_ReturnCreatedAtRouteObject_With201StatusCode()
        {
            var toDoTaskController = new ToDoTaskController(_toDoTaskRepository);
            var toDoTaskObject = new ToDoTask { Id = 1, Name = "test", Remarks = "remarks" };
            Task.Run(async () =>
            {
                var result = await toDoTaskController.UpdateToDoTask(1,toDoTaskObject);
                Assert.IsInstanceOfType(result, typeof(CreatedAtRouteResult));
                Assert.AreEqual(((CreatedAtRouteResult)result).StatusCode, 201);
            }).Wait();
        }

        [TestMethod]
        public void DeleteToDoTask_ReturnNoContentObject_With204StatusCode()
        {
            var toDoTaskController = new ToDoTaskController(_toDoTaskRepository);
            Task.Run(async () =>
            {
                var result = await toDoTaskController.DeleteToDoTask(1);
                Assert.IsInstanceOfType(result, typeof(NoContentResult));
                Assert.AreEqual(((NoContentResult)result).StatusCode, 204);
            }).Wait();
        }
    }
}
