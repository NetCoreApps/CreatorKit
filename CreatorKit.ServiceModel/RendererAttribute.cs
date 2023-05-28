using System;
using ServiceStack;

namespace CreatorKit.ServiceModel;

/// <summary>
/// Specify which renderer should be used to render emails
/// </summary>
[AttributeUsage(AttributeTargets.Class)]
public class RendererAttribute : AttributeBase
{
    public Type Type { get; set; }
    public RendererAttribute(Type type)
    {
        Type = type;
    }

    public string Layout { get; set; } = "basic";
    public string Template { get; set; }
}