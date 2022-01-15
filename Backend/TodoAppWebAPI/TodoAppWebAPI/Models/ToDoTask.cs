using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoAppWebAPI.Models
{
    public class ToDoTask
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Remarks { get; set; }
    }
}
