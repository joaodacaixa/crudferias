using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace WebapiCadastrodeferias.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RelatorioController : ControllerBase
  {
    private readonly String _connectionString;

    public RelatorioController(IConfiguration configuration)
    {

      _connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    [HttpGet]

    public async Task<IActionResult> GetFeriasporDpto()
    {
      using (var sqlConnection = new SqlConnection(_connectionString))
      {
        const string sql = "select Listafuncionarios.matricula, Listaferias.Funcionario, ListaFerias.DataInicio, ListaFerias.Quantidadededias, Listafuncionarios.Departamento from listaferias inner join Listafuncionarios on (listaferias.Funcionario=Listafuncionarios.nome) order by Departamento";
        var feriasDpo = await sqlConnection.QueryAsync(sql);
        return Ok(feriasDpo);
      }
    }
    
  }
}
