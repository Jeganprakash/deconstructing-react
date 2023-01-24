const React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag === "function") {
            return tag(props);
        }
        return { tag, props: { ...props, children } }  
    }
};

const states = []

let stateCursor = 0;


const useState = (initialState) => {
    const FROZENCURSOR = stateCursor;
    states[FROZENCURSOR] = states[FROZENCURSOR] || initialState;
    const setState = newState => {
        states[FROZENCURSOR] = newState;
        reRender();
    };
    stateCursor++;
    return [states[FROZENCURSOR],setState]
}

const App = () => {
    const [name, setName] = useState("person");
    const [count, setCount] = useState(0);

    return (
        <div class='jan'>
            <h1>hello {name} !</h1>
            <input value={name} onchange={e => setName(e.target.value)} type="text" placeholder="name" />
            <button onclick={() => setCount(count + 1)}>+</button>
            <button onclick = {() => setCount(count - 1)}>-</button>
            <h2>The count is: {count}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem nemo corporis inventore quae, deleniti velit iusto amet sit enim similique error consectetur assumenda, neque minus provident atque deserunt molestias?</p>
            <div class="content" id="sds">Super</div>
        </div>
    );
}



const render = (reactElement, container) => {
    if (['string', 'number'].includes(typeof reactElement)) {
        container.appendChild(document.createTextNode(String(reactElement)))
        return;
    }
    const actualDomElement = document.createElement(reactElement.tag);
    if (reactElement.props) {
        Object.keys(reactElement.props).filter(p => p !== 'children').forEach(p => actualDomElement[p] = reactElement.props[p]);
    }
    if (reactElement.props.children) {
        reactElement.props.children.forEach(child => render(child,actualDomElement))
    }
    container.appendChild(actualDomElement)
}

const reRender = () => {
    stateCursor = 0;
    document.querySelector("#app").firstChild.remove();
    render(<App />, document.querySelector("#app"));
}


render(<App />, document.querySelector("#app"));
// render(<App />,window.app);