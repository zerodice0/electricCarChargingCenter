import appendButton from "../button/button";
import appendHeadline from "../headline/headline";


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
    
    appendHeadline({
      target: container, 
      text: status.titleString,
      level: 1,
    });
    
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

    shadowRoot?.replaceChildren(container);
  };

  return render();
}

export default App;