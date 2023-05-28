using System;
using System.Collections.Generic;
using ServiceStack;

namespace CreatorKit.ServiceModel;

[Tag(Tag.Mail), ValidateIsAdmin]
public class ViewMailData
{
    public int? Year { get; set; }
    public int? Month { get; set; }
    public bool? Force { get; set; }
}

public class ViewMailDataResponse
{
    public DateTime LastUpdated { get; set; }
    public SiteMeta SiteMeta { get; set; }
}

public class SiteMeta
{
    public DateTime CreatedDate { get; set; }
    public List<MarkdownFile> Pages { get; set; }
    public List<MarkdownFile> Posts { get; set; }
    public List<MarkdownFile> WhatsNew { get; set; }
    public List<MarkdownFile> Videos { get; set; }
}

public class MarkdownFile
{
    public string Slug { get; set; }
    public string? Layout { get; set; }
    public bool Draft { get; set; }
    public string Title { get; set; }
    public string Summary { get; set; }
    public string? Content { get; set; }
    public string? Image { get; set; }
    public string? Author { get; set; }
    public List<string>? Tags { get; set; } = new();
    public DateTime Date { get; set; }
    public string? Url { get; set; }
    public string? Group { get; set; }
    public int? Order { get; set; }
    public int? WordCount { get; set; }
    public int? LineCount { get; set; }
    public int MinutesToRead => (int)Math.Ceiling((WordCount ?? 1) / (double)225);
}
