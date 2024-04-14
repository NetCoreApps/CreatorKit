using System;
using ServiceStack;

namespace CreatorKit.ServiceModel;

[AttributeUsage(AttributeTargets.Class)]
public class RendererAttribute<T>(string template) : RendererAttribute(typeof(T)) {}

/// <summary>
/// Specify which renderer should be used to render emails
/// </summary>
[AttributeUsage(AttributeTargets.Class)]
public class RendererAttribute(Type type) : AttributeBase
{
    public Type Type { get; set; } = type;

    public string Layout { get; set; } = "basic";
    public string? Template { get; set; }
}