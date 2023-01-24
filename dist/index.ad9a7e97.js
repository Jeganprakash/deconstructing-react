const React = {
    createElement: (tag, props, ...children)=>{
        if (typeof tag === "function") return tag(props);
        return {
            tag,
            props: {
                ...props,
                children
            }
        };
    }
};
const states = [];
let stateCursor = 0;
const useState = (initialState)=>{
    const FROZENCURSOR = stateCursor;
    states[FROZENCURSOR] = states[FROZENCURSOR] || initialState;
    const setState = (newState)=>{
        states[FROZENCURSOR] = newState;
        reRender();
    };
    stateCursor++;
    return [
        states[FROZENCURSOR],
        setState
    ];
};
const App = ()=>{
    const [name, setName] = useState("person");
    const [count, setCount] = useState(0);
    return /*#__PURE__*/ React.createElement("div", {
        class: "jan",
        __source: {
            fileName: "index.tsx",
            lineNumber: 31,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 32,
            columnNumber: 13
        },
        __self: this
    }, "hello ", name, " !"), /*#__PURE__*/ React.createElement("input", {
        value: name,
        onchange: (e)=>setName(e.target.value),
        type: "text",
        placeholder: "name",
        __source: {
            fileName: "index.tsx",
            lineNumber: 33,
            columnNumber: 13
        },
        __self: this
    }), /*#__PURE__*/ React.createElement("button", {
        onclick: ()=>setCount(count + 1),
        __source: {
            fileName: "index.tsx",
            lineNumber: 34,
            columnNumber: 13
        },
        __self: this
    }, "+"), /*#__PURE__*/ React.createElement("button", {
        onclick: ()=>setCount(count - 1),
        __source: {
            fileName: "index.tsx",
            lineNumber: 35,
            columnNumber: 13
        },
        __self: this
    }, "-"), /*#__PURE__*/ React.createElement("h2", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 36,
            columnNumber: 13
        },
        __self: this
    }, "The count is: ", count), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 37,
            columnNumber: 13
        },
        __self: this
    }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem nemo corporis inventore quae, deleniti velit iusto amet sit enim similique error consectetur assumenda, neque minus provident atque deserunt molestias?"), /*#__PURE__*/ React.createElement("div", {
        class: "content",
        id: "sds",
        __source: {
            fileName: "index.tsx",
            lineNumber: 38,
            columnNumber: 13
        },
        __self: this
    }, "Super"));
};
const render = (reactElement, container)=>{
    if ([
        "string",
        "number"
    ].includes(typeof reactElement)) {
        container.appendChild(document.createTextNode(String(reactElement)));
        return;
    }
    const actualDomElement = document.createElement(reactElement.tag);
    if (reactElement.props) Object.keys(reactElement.props).filter((p)=>p !== "children").forEach((p)=>actualDomElement[p] = reactElement.props[p]);
    if (reactElement.props.children) reactElement.props.children.forEach((child)=>render(child, actualDomElement));
    container.appendChild(actualDomElement);
};
const reRender = ()=>{
    stateCursor = 0;
    document.querySelector("#app").firstChild.remove();
    render(/*#__PURE__*/ React.createElement(App, {
        __source: {
            fileName: "index.tsx",
            lineNumber: 63,
            columnNumber: 12
        },
        __self: this
    }), document.querySelector("#app"));
};
render(/*#__PURE__*/ React.createElement(App, {
    __source: {
        fileName: "index.tsx",
        lineNumber: 67,
        columnNumber: 8
    },
    __self: this
}), document.querySelector("#app")); // render(<App />,window.app);

//# sourceMappingURL=index.ad9a7e97.js.map
