namespace HomePage_API.Models
{
    public class ProjectsModel
    {
        public string ProjectName { get; set; }
        public string ProjectDescription { get; set; }
        public string ProjectGithubLink { get; set; }
        public string? ProjectApplicationLink { get; set; }
        public string ProjectReadmeContent { get; set; }
    }
    public class ContactFormModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public string Topic { get; set; }
    }
}