using HomePage_API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HomePage_API.Controllers;

[Route("[controller]/[action]")]
[ApiController]
public class ContributionsController(HomePageContext homePageContext) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> TableData()
    {
        var contributions = await homePageContext.OssContributions
            .AsNoTracking()
            .OrderByDescending(contribution => contribution.ContributedAt)
            .ThenByDescending(contribution => contribution.Id)
            .ToListAsync();

        return Ok(contributions);
    }

    [HttpGet]
    public async Task<IActionResult> Latest([FromQuery] int limit = 3)
    {
        if (limit is < 1 or > 10)
        {
            return BadRequest("Limit must be between 1 and 10.");
        }

        var contributions = await homePageContext.OssContributions
            .AsNoTracking()
            .OrderByDescending(contribution => contribution.ContributedAt)
            .ThenByDescending(contribution => contribution.Id)
            .Take(limit)
            .ToListAsync();

        return Ok(contributions);
    }
}
