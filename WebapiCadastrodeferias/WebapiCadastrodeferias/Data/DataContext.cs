using Microsoft.EntityFrameworkCore;

namespace WebapiCadastrodeferias.Data
{
  public class DataContext :DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    public DbSet<Ferias> ListaFerias => Set<Ferias>();
    public DbSet<Funcionario> ListaFuncionarios => Set<Funcionario>();

    public DbSet<Departamento> ListaDepartamentos => Set<Departamento>();
  }
}
