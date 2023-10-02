using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebapiCadastrodeferias.Data;

namespace WebapiCadastrodeferias.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class Funcionariocontroller : ControllerBase
  {

    private readonly DataContext _context;

    public Funcionariocontroller(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Funcionario>>> GetFuncionario()
    {
      return Ok(await _context.ListaFuncionarios.ToListAsync());
    }



    [HttpPost]

    public async Task<ActionResult<List<Funcionario>>> CreateFuncionario(Funcionario funcionario)
    {
      _context.ListaFuncionarios.Add(funcionario);
      await _context.SaveChangesAsync();

      return Ok(await _context.ListaFuncionarios.ToListAsync());
    }

    [HttpPut]
    public async Task<ActionResult<List<Funcionario>>> UpdateFuncionario(Funcionario funcionario)
    {
      var dbfuncionario = await _context.ListaFuncionarios.FindAsync(funcionario.Id);

      if (dbfuncionario == null) return BadRequest("Funcionário não localizado");

      dbfuncionario.Matricula = funcionario.Matricula;
      dbfuncionario.Nome = funcionario.Nome;
      dbfuncionario.Departamento = funcionario.Departamento;


      await _context.SaveChangesAsync();

      return Ok(await _context.ListaFuncionarios.ToListAsync());
    }

    [HttpDelete("{id}")]

    public async Task<ActionResult<List<Funcionario>>> DeleteFuncionario(int id)
    {
      var dbfuncionario = await _context.ListaFuncionarios.FindAsync(id);
      if (dbfuncionario == null) return BadRequest("Funcionário não localizado!");

      _context.ListaFuncionarios.Remove(dbfuncionario);
      await _context.SaveChangesAsync();

      return Ok(await _context.ListaFuncionarios.ToListAsync());
    }

  }
}
