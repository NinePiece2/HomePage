using System;
using System.Collections.Generic;

namespace HomePage.Models;

public partial class Application
{
    public int Uid { get; set; }

    public string Name { get; set; } = null!;

    public string? ApplicationLink { get; set; }

    public string? GitHubLink { get; set; }

    public string? HomePageLink { get; set; }
    
    public string? GitHubReadMeLink { get; set; }
}
