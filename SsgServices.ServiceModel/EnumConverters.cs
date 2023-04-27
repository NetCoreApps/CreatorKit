using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace SsgServices.ServiceModel;

public static class EnumConverters
{
    static FieldInfo GetEnumMember(Type type, string name) => 
        (FieldInfo) type.GetMember(name, BindingFlags.Public | BindingFlags.Static)[0];

    public static string? GetDescription(MemberInfo mi)
    {
        return mi.GetCustomAttributes(typeof(ServiceStack.DataAnnotations.DescriptionAttribute)).FirstOrDefault()
            is ServiceStack.DataAnnotations.DescriptionAttribute ssDescAttr
            ? ssDescAttr.Description
            : null;
    }

    public static List<string> ToEnumFlagsList(Enum enumValue)
    {
        var enumType = enumValue.GetType();
        return Enum.GetValues(enumType).Cast<Enum>().Where(x => enumValue.HasFlag(x) && Convert.ToInt64(x) != 0).Select(x =>
        {
            var name = x.ToString();
            var enumMember = GetEnumMember(enumType, name);
            var enumDesc = GetDescription(enumMember);
            return enumDesc ?? name;
        }).ToList();
    }
}