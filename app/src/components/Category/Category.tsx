import React from 'react';

interface CategoryProps extends React.AllHTMLAttributes<HTMLDivElement> {
  categories?: string | string[];
  tagName?: "div" | "section";
  className?: string;
  isLink?: boolean;
  link?: string;
  categoryItemStyle?: string;
  children?: React.ReactNode;
}

export const Category: React.FC<CategoryProps> = ({ categories = "", categoryItemStyle = "", className = "", children, isLink, link, tagName = "div", ...rest }) => {
  const Tag: CategoryProps["tagName"] = tagName;

  return (
    <Tag className={className} {...rest}>
      {children && children}
      {!children &&
        <>
          {typeof categories === "object" && categories.map((category, i) => (
            <>
              {(isLink || link) ? <a key={i} href={link} className={categoryItemStyle}>{category}</a> : <span key={i} className={categoryItemStyle}>{category}</span>}

            </>
          ))}
          {typeof categories === "string" &&
            <>
              {(isLink || link) ? <a href={link} className={categoryItemStyle}>{categories}</a> : <span className={categoryItemStyle}>{categories}</span>}
            </>
          }
        </>
      }
    </Tag>
  );
};

export default Category;