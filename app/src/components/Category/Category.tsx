import React from 'react';

interface CategoryProps extends React.AllHTMLAttributes<HTMLDivElement> {
  categories?: string | string[];
  categoryName?: "div" | "section";
  className?: string;
  categoryItemStyle?: string;
  children?: React.ReactNode;
}

export const Category: React.FC<CategoryProps> = ({ categories = "", categoryItemStyle = "", className = "", children, categoryName = "div", ...rest }) => {
  const CategoryTag: CategoryProps["categoryName"] = categoryName;

  return (
    <CategoryTag className={className} {...rest}>
      {children && children}
      {!children &&
        <>
          {typeof categories === "object" && categories.map((category, i) => (
            <span key={i} className={categoryItemStyle}>{category}</span>
          ))}
          {typeof categories === "string" && <span className={categoryItemStyle}>{categories}</span>}
        </>
      }
    </CategoryTag>
  );
};

export default Category;