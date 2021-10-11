import { useEffect, useState } from "react";

const UseCopiedToClipBoard = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopied(false), 1000);
  }, [copied]);

  const copyToClipboard = (url) => {
    setCopied(true);
    navigator.clipboard.writeText(url);
  };

  let copyBtnClass = copied ? "copied" : "copy";
  let copyBtn = copied ? "Copied!" : "Copy";

  return [copyBtnClass, copyBtn, copyToClipboard];
};

export default UseCopiedToClipBoard;
