namespace HomePage.Models
{
    public class Model
    {
    }
    public class PopUpModel
    {
        public string ID { get; set; }
        public bool textArea { get; set; }
        public string confirmBtnMessage { get; set; }
        public string hintMessage { get; set; }
        public string cancelBtnMessage { get; set; }
        public string reminderText { get; set; }
    }

    public class PopUpModelWithComments
    {
        public string ID { get; set; }
        public string modelHeader { get; set; }
        public bool textArea { get; set; } = true;
        public bool saveAndCancelBtns { get; set; } = true;
    }

    public class ProjectsViewModel
    {
        public string ProjectName { get; set; }
        public string ProjectDescription { get; set; }
        public string ProjectGithubLink { get; set; }
        public string ProjectApplicationLink { get; set; }
        public string ProjectReadmeContent { get; set; }
    }   
}
