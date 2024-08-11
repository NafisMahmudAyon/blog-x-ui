'use client'

import { Copy, Copied } from "@/app/src/components/Icon";
import React, { useState } from "react";

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeSnippetProps {
  content?: string;
  lang?: string;
  className?: string;
  headerStyles?: string;
  bodyStyles?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  content = "",
  lang = "html",
  className = "",
  bodyStyles = "",
}) => {
  const [copySuccess, setCopySuccess] = useState<boolean | null>(null);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(content.trim())
      .then(() => setCopySuccess(true))
      .catch(() => setCopySuccess(false));

    // Reset copy success message after 2 seconds
    setTimeout(() => {
      setCopySuccess(null);
    }, 2000);
  };
  return (
    <Code className={` ${className} overflow-hidden shadow-lg drop-shadow-lg border-gray-900 border rounded-lg  relative`}>
      <span className="text-white absolute top-2 right-10" onClick={handleCopyClick} title={copySuccess? "Copied" : "Copy"}>
        {
          copySuccess === null
            ? <Copy className="text-white" />
            : copySuccess === true
              ? <Copied className="text-white" />
              : "Failed to copy"
        }
      </span>
      <CodeBody
        content={content}
        language={lang}
        styles={` ${bodyStyles} pt-1 px-4 pb-1 text-sm overflow-y-scroll !rounded-b-lg block  `}
      />
    </Code>
  );
};

export default CodeSnippet;

interface CodeProps {
  content?: string;
  tagName?: keyof JSX.IntrinsicElements;
  languages?: string;
  className?: string;
  children?: React.ReactNode
}

const Code: React.FC<CodeProps> = ({
  // style,
  // content,
  tagName = "pre",
  // languages = "css",
  className = "",
  children,
}) => {
  const CustomTag = tagName.toLowerCase() as keyof JSX.IntrinsicElements;

  return <CustomTag className={` ${className} `}>{children}</CustomTag>;
};

// * CodeBody
interface CodeBodyProps {
  styles?: string;
  language?: string;
  content?: string;
}

const CodeBody: React.FC<CodeBodyProps> = ({ styles = "", language, content = "" }) => {
  return (
    <SyntaxHighlighter
      className={`${styles}`}
      language={language}
      style={coldarkDark}
      customStyle={{
        maxHeight: "420px",
        borderRadius: "0px",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingBottom: "20px",
        marginTop: "0px",
        marginBottom: "0px",
        background: "#1C222B",
        fontSize: "14px",
        lineHeight: "22px",
        letterSpacing: "-0.2px",
      }}
    >
      {content}
    </SyntaxHighlighter>
  );
};
