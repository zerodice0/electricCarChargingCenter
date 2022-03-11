import appendButton from "../button/button";

const App = (target: Element | ShadowRoot) => {
  const shadowRoot = (target instanceof ShadowRoot) ? target
    : target?.shadowRoot ?? target?.attachShadow({mode: 'open'});

  let status: {
    titleString: string,
    buttonText: string,
  } = {
    titleString: 'Hello',
    buttonText: 'Click me',
  }

  const setState = (_status: {
    titleString: string,
    buttonText: string,
  }) => {
    status = {..._status};
    render();
  }
  
  const render = () => {
    const container = document.createElement('div');
    const title = document.createElement('h1');
    
    container.className = 'container';
    container.appendChild(title);
    
    appendButton({
      target: container,
      title: status.buttonText,
      clickEventCallback: () => {
        setState({
          ...status,
          titleString: status.titleString += '!',
        });
      }
    });
  
    title.innerText = status.titleString;

    shadowRoot?.replaceChildren(container);
  };

  return render();
}

export default App;