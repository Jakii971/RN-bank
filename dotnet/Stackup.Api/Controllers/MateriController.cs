using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class MateriController : Controller
{
    private readonly DbManager _dbManager;
    Response response = new Response();

    public MateriController(IConfiguration configuration)
    {
        _dbManager = new DbManager(configuration);
    }

    // GET: api/Materi
    [HttpGet]
    public IActionResult GetMateris()
    {
        try
        {
            response.status = 200;
            response.message = "Succes";
            response.data = _dbManager.GetAllMateris();
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    // CREATE
    [HttpPost]
    public IActionResult CreateMateri([FromBody] Materi materi)
    {
        try
        {
            {
                response.status = 200;
                response.message = "Succes";
                _dbManager.CreateMateri(materi);
            }
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    // UPDATE
    [HttpPut("{id}")]
    public IActionResult UpdateMateri(int id, [FromBody]Materi materi)
    {
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbManager.UpdateMateri(id, materi);
        }
        catch(Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }

    // DELETE
    [HttpDelete("{id}")]
    public IActionResult DeleteMateri(int id)
    {
        try
        {
            response.status = 200;
            response.message = "Success";
            _dbManager.DeleteMateri(id);
        }
        catch(Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
}