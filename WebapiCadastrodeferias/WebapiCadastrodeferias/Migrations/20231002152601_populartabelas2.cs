using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebapiCadastrodeferias.Migrations
{
    /// <inheritdoc />
    public partial class populartabelas2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
      migrationBuilder.Sql("INSERT INTO ListaDepartamentos (Nome) VALUES ('Rec Humanos')");
      migrationBuilder.Sql("INSERT INTO ListaDepartamentos (Nome) VALUES ('Contabilidade')");
      migrationBuilder.Sql("INSERT INTO ListaDepartamentos (Nome) VALUES ('Tesouraria')");
      migrationBuilder.Sql("INSERT INTO ListaDepartamentos (Nome) VALUES ('Agencia')");
      migrationBuilder.Sql("INSERT INTO ListaDepartamentos (Nome) VALUES ('T I')");
      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c012451', 'Jose Silva', 'Rec Humanos')");
      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c215464', 'Carla Bastos', 'Rec Humanos')");
      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c548542', 'Maria dos Santos', 'Rec Humanos')");

      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c652325', 'Emilia Silva e Silva', 'Contabilidade')");
      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c232514', 'Andre Bustamantes', 'Contabilidade')");
      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c552142', 'Patricia Helena Veloso', 'Contabilidade')");

      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c225151', 'Helena Jasmin Costa', 'Agencia')");
      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c441451', 'Antonio Carlos Tostes', 'Agencia')");
      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c062625', 'Agostinho Barbosa', 'Agencia')");

      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c021521', 'Isabela Antunes', 'Tesouraria')");
      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c061177', 'Joao Mendonca', 'Tesouraria')");
      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c098547', 'Carolina Pinto', 'Tesouraria')");



      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c665825', 'Elisa Antunes', 'Rec Humanos')");

      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c021252', 'Janaina Pedro de Paula', 'Contabilidade')");

      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c075747', 'Jose Maria Custodio', 'Agencia')");

      migrationBuilder.Sql("INSERT INTO ListaFuncionarios (Matricula, Nome, Departamento) VALUES ('c107328', 'Maria Amélia Serafim', 'Tesouraria')");
    }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
