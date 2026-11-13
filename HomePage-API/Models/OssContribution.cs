namespace HomePage_API.Models;

public class OssContribution
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string Description { get; set; } = null!;
    public string RepositoryName { get; set; } = null!;
    public string RepositoryUrl { get; set; } = null!;
    public string? CommitUrl { get; set; }
    public string ContributionType { get; set; } = null!;
    public string? Technologies { get; set; }
    public DateTime ContributedAt { get; set; }
}
