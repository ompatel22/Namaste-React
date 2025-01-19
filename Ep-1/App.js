const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"c1"},[
        React.createElement("h1",{},"h1"),
        React.createElement("h2",{},"h2")
    ]),
    React.createElement("div",{id:"c2"},[
        React.createElement("h1",{},"h1"),
        React.createElement("h2",{},"h2")
    ])
])
// const heading=React.createElement(
//     "h1",
//     {id:"heading", xyz:"abc"},
//     "hello from react"
// );
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);