using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;

[Route("api/[controller]")]
[ApiController]
public class RiwayatController : Controller
{
    private readonly DbManager _dbManager;
    Response response = new Response();

    public RiwayatController(IConfiguration configuration)
    {
        _dbManager = new DbManager(configuration);
    }

    // GET: api/Riwayat
    [HttpGet]
    public IActionResult GetRiwayats()
    {
        try
        {
            response.status = 200;
            response.message = "Succes";
            response.data = _dbManager.GetAllRiwayats();
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
    public IActionResult CreateRiwayat([FromBody] Riwayat riwayat)
    {
        try
        {
            {
                response.status = 200;
                response.message = "Succes";
                _dbManager.CreateRiwayat(riwayat);
            }
        }
        catch (Exception ex)
        {
            response.status = 500;
            response.message = ex.Message;
        }
        return Ok(response);
    }
}