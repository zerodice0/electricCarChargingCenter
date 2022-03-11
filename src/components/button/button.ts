const appendButton = (
  {target, title, clickEventCallback}: 
  {
    target: Element | ShadowRoot | undefined,
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

      target?.appendChild(button);
      return button;
    }

    return render();
  }

export default appendButton;