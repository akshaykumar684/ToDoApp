using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoAppWebAPI.Models;
using TodoAppWebAPI.Services;

namespace TodoAppWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoTaskController : ControllerBase
    {
        private readonly IToDoTaskRepository _toDoTaskRepository;
        public ToDoTaskController(IToDoTaskRepository toDoTaskRepository)
        {
            _toDoTaskRepository = toDoTaskRepository;
        }
        // GET: api/<ToDoTaskController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoTask>>> GetToDoTasks()
        {
            return Ok(await _toDoTaskRepository.GetToDoTasks());
        }

        // GET api/<ToDoTaskController>/1
        [HttpGet("{id}", Name = "GetToDoTask")]
        public async Task<ActionResult<ToDoTask>> GetToDoTask(int id)
        {
            return Ok(await _toDoTaskRepository.GetToDoTask(id));
        }

        // POST api/<ToDoTaskController>
        [HttpPost]
        public async Task<ActionResult> CreateToDoTask([FromBody] ToDoTask toDoTask)
        {
            if (toDoTask == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _toDoTaskRepository.CreateToDoTask(toDoTask))
            {
                ModelState.AddModelError("", $"Something went wrong.Task {toDoTask.Name} can't be created");
                return StatusCode(500, ModelState);
            }

            return CreatedAtRoute("GetToDoTask", new { toDoTask.Id }, toDoTask);
        }

        // PUT api/<ToDoTaskController>/1
        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateToDoTask(int id, [FromBody] ToDoTask toDoTask)
        {
            if (toDoTask == null || id != toDoTask.Id || !ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!await _toDoTaskRepository.UpdateToDoTask(toDoTask))
            {
                ModelState.AddModelError("", $"Something went wrong.Task {toDoTask.Name} can't be updated");
                return StatusCode(500, ModelState);
            }
            return CreatedAtRoute("GetToDoTask", new { toDoTask.Id }, toDoTask);
        }

        // DELETE api/<ToDoTaskController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteToDoTask(int id)
        {
            if (!await _toDoTaskRepository.DeleteToDoTask(id))
            {

                ModelState.AddModelError("", $"Something went wrong.ToDoTask can't be deleted");
                return StatusCode(500, ModelState);
            }

            return NoContent();
        }
    }
}
