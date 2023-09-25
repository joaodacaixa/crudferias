using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebapiCadastrodeferias.Data;

namespace WebapiCadastrodeferias.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FeriasController : ControllerBase
  {

    private readonly DataContext _context;

    public FeriasController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Ferias>>> GetFerias()
    {
      return Ok(await _context.ListaFerias.ToListAsync());
    }

    [HttpPost]

    public async Task<ActionResult<List<Ferias>>> CreateFerias(Ferias ferias)
    {
      _context.ListaFerias.Add(ferias);
      await _context.SaveChangesAsync();

      return Ok(await _context.ListaFerias.ToListAsync());
    }


    [HttpPut]
    public async Task<ActionResult<List<Ferias>>> UpdateFerias(Ferias ferias)
    {
      var dbferias = await _context.ListaFerias.FindAsync(ferias.Id);

      if (dbferias == null) return BadRequest("Periodo de Férias não localizado");


      dbferias.Funcionario= ferias.Funcionario;
      dbferias.DataInicio = ferias.DataInicio;
      dbferias.Quantidadededias = ferias.Quantidadededias;



      await _context.SaveChangesAsync();

      return Ok(await _context.ListaFerias.ToListAsync());
    }

    [HttpDelete("{Id}")]

    public async Task<ActionResult<List<Ferias>>> DeleteFerias(int Id)
    {
      var dbferias = await _context.ListaFerias.FindAsync(Id);
      if (dbferias == null) return BadRequest("Período de Férias não localizado!");

      _context.ListaFerias.Remove(dbferias);
      await _context.SaveChangesAsync();
      return Ok(await _context.ListaFerias.ToListAsync());
    }

  }
}
