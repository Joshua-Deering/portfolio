import { configs } from "shared/content/Content";

export const open = (link: string) => {
  const anchor = document.createElement("a");
  anchor.href = link;
  anchor.target = "_blank";
  anchor.rel = "noreferrer"; // This blocks the referrer header Google hates
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

export const onResumeOpen = () => {
    open(configs.common.resume);
};

export const onMailTo = () => {
    open("mailto:" + configs.common.email);
};
