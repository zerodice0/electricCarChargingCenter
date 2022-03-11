const appendHeadline = (
  {target, text, level} : {
    target: Element | ShadowRoot,
    text: string,
    level: number,
  }
) => {
  const assignValueInRange = (
    target: number,
    {min, max}: {min: number, max: number}
  ) => target < min ? min : target > max ? max : target;

  const render = () => {
    const _level = assignValueInRange(level, {min: 1, max: 6});
    const headline = document.createElement('h' + _level);
    headline.innerText = text;
    
    target?.appendChild(headline);
    return headline;
  }

  return render();
}

export default appendHeadline;