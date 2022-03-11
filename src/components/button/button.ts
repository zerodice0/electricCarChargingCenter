const appendButton = (
  {target, title, clickEventCallback}: 
  {
    target: Element | ShadowRoot,
    title: string,
    clickEventCallback: Function | undefined,
  }) => {
    const render = () => {
      const button = document.createElement('button');
      button.innerText = title;

      clickEventCallback && button.addEventListener(
        'click',
        () => clickEventCallback(),
      );

      target.appendChild(button);
    }

    render();
  }

export default appendButton;