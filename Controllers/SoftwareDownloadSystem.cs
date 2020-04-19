using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using SDS_Backend.Models;

namespace SDS_Backend.Controllers
{
    [ApiController]
    [Route("api")]
    public class SoftwareDownloadSystem : ControllerBase
    {
        private readonly SDS_DBContext _context;

        public SoftwareDownloadSystem(SDS_DBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SoftwareDownload>>> GetSoftwaresAsync()
        {
            return await _context.softwareDownloadsystem.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SoftwareDownload>> GetSoftwaresAsync(string id)
        {
            var software = await _context.softwareDownloadsystem.FindAsync(id);

            if (software == null)
            {
                return NotFound();
            }

            return software;
        }

        [HttpPost("post")]
        public async Task<ActionResult<SoftwareDownload>> PostSoftwareAsync(SoftwareDownload data)
        {
            _context.softwareDownloadsystem.Add(data);

            await _context.SaveChangesAsync();

            return CreatedAtAction("Success ", new { id = data.ID }, data);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<SoftwareDownload>> DeleteMovie (string id)
        {
            var movie = await _context.softwareDownloadsystem.FindAsync(id);
            
            if (movie == null)
            {
                return NotFound();
            }

            _context.softwareDownloadsystem.Remove(movie);
            await _context.SaveChangesAsync();

            return movie;


        }

    }

}
