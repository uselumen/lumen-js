export const createHtmlElement = (htmlContent: string, htmlTag = "div") => {
    const bannerNode = document.createElement(htmlTag);
    bannerNode.innerHTML = htmlContent;
    return bannerNode;
};
