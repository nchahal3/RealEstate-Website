public class HouseListing
{
    public int Id { get; set; }
    public string Address { get; set; } = "";
    public string Price { get; set; } = "";
    public int Value { get; set; }
    public string PrimaryDetails { get; set; } = "";
    public string LongDetails { get; set; } = "";
    public string MainImgSrc { get; set; } = "";
    public string[] Images { get; set; }
    public CustomField[] CustomFields { get; set; }
    public bool Favorited { get; set; }
    public int Ranking { get; set; }
    public int Bedrooms { get; set; }
    public int Bathrooms { get; set; }
    public int SQFT { get; set; }
}