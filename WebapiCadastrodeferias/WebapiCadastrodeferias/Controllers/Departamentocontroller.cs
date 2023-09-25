using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebapiCadastrodeferias.Data;

namespace WebapiCadastrodeferias.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class Departamentocontroller : ControllerBase
  {

    private readonly DataContext _context;

    public Departamentocontroller(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Departamento>>> GetFuncionario()
    {
      return Ok(await _context.ListaDepartamentos.ToListAsync());
    }

    [HttpPost]

    public async Task<ActionResult<List<Departamento>>> CreateFerias(Departamento departamento)
    {
      _context.ListaDepartamentos.Add(departamento);
      await _context.SaveChangesAsync();

      return Ok(await _context.ListaDepartamentos.ToListAsync());
    }

    [HttpPut]
    public async Task<ActionResult<List<Funcionario>>> UpdateDepartamento(Departamento departamento)
    {
      var dbdepartamento = await _context.ListaDepartamentos.FindAsync(departamento.Id);

      if (dbdepartamento == null) return BadRequest("Departamento não localizado");


      dbdepartamento.Nome = departamento.Nome;
 


      await _context.SaveChangesAsync();

      return Ok(await _context.ListaDepartamentos.ToListAsync());
    }

    [HttpDelete("{Id}")]

    public async Task<ActionResult<List<Departamento>>> DeleteDepartamento(int Id)
    {
      var dbdepartamento = await _context.ListaDepartamentos.FindAsync(Id);
      if (dbdepartamento == null) return BadRequest("Departamento não localizado!");

      _context.ListaDepartamentos.Remove(dbdepartamento);
      await _context.SaveChangesAsync();

      return Ok(await _context.ListaDepartamentos.ToListAsync());
    }

  }


}

