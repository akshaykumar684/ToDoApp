using Microsoft.EntityFrameworkCore;

namespace TodoAppWebAPI.Models
{
    public class ToDoTaskDbContext : DbContext
    {
        public ToDoTaskDbContext(DbContextOptions<ToDoTaskDbContext> options)
            : base(options)
        {

        }

        public DbSet<ToDoTask> Candidates { get; set; }
    }
}
