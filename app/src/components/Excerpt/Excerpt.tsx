interface ExcerptProps extends React.AllHTMLAttributes<HTMLElement> {
  tagName?: "p" | "span" | "div" | "section";
  className?: string;
  children: React.ReactNode;
  limit?: number;
  limitBy?: "word" | "character";
}

export const Excerpt: React.FC<ExcerptProps> = ({ tagName = "p", className = "", limitBy = "word", limit, children = "", ...rest }) => {
  const Tag: ExcerptProps["tagName"] = tagName;
  var getLimitedWordContent = (data: any) => {
    var content = ""
    var x = Object.entries(data).map((d) => {
      var dData = d[1]
      return dData
    })
    content = x.join(" ")

    var limitedContent = content.split(" ").splice(0, limit).join(" ")
    return limitedContent
  }
  var getLimitedCharContent = (data: any) => {
    var content = ""
    var x = Object.entries(data).map((d) => {
      var dData = d[1]
      return dData
    })
    content = x.join(" ")

    var limitedContent = content.substring(0, limit)
    return limitedContent
  }

  return (
    <Tag className={`${className}`} {...rest}>
      {children != "undefined" && typeof children === "string" && 
        <>
          {limitBy == "word" &&<>{children.split(" ").splice(0, limit).join(" ")}</>}
          {limitBy == "character" && <>{children.substring(0, limit)}</>}
          {(limitBy == "character" || limitBy == "word") && !limit && <>{children}</>}
        </>
      }
      {children != "undefined" && typeof children === "object" &&
        <>
          {limitBy == "word" && <>{getLimitedWordContent(children)}</>}
          {limitBy == "character" && <>{getLimitedCharContent(children)}</>}
          {(limitBy == "character" || limitBy == "word") && !limit && <>{children}</>}
        </>
      }
      {limit && "..."}
    </Tag>
  )
}
