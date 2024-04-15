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
}
