const bodyHtml = document.body;

const domArray = [
  { tag: "div", children: [] },
  {
    tag: "div",
    children: [
      {
        tag: "div",
        children: [
          { tag: "span", children: [] },
          { tag: "span", children: [] },
        ],
      },
      {
        tag: "div",
        children: [
          { tag: "span", children: [] },
          { tag: "span", children: [] },
        ],
      },
    ],
  },
  {
    tag: "div",
    children: [
      {
        tag: "div",
        children: [
          { tag: "span", children: [] },
          { tag: "span", children: [] },
        ],
      },
      {
        tag: "div",
        children: [
          { tag: "span", children: [] },
          { tag: "span", children: [] },
        ],
      },
    ],
  },
];

function renderDomObj(domObj, parent) {
  const createTag = document.createElement(domObj.tag);

  parent.append(createTag);

  return createTag;

  //   createTag.style.backgroundColor = `rgb(${domObj.color.r}, ${domObj.color.g}, ${domObj.color.b})`;
  //   createTag.style.width = `${domObj.size.x}px`;
  //   createTag.style.height = `${domObj.size.y}px`;
  //   createTag.style.position = "relative";
  //   createTag.style.left = `${domObj.position.x}px`;
  //   createTag.style.top = `${domObj.position.y}px`;
}

function renderDomArray(domArray, parent) {
  domArray.forEach((el) => {
    
    parent = renderDomObj(el, parent)



  });
}


