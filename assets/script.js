/*------------------- OLD WAY OF REACT BELOW -----------------*/

// const rootDiv = document.getElementById("root");

// // const h1 = document.createElement("h1")
// // h1.classList.add("h1-heading")
// // h1.innerText = "Welcome to ReactJS";
// // rootDiv.append(h1);

// const h1React = React.createElement("h1", { className: "h1-heading" }, "Welcome to ReactJS");
// const div = React.createElement("div", null, "Div from react")
// const root = ReactDOM.createRoot(rootDiv)
// root.render(div)

/*------------------ NEW WAY OF REACT BELOW -------------------*/

const MyReactApp = () => {
  // React functional Component
  let name = "John Smith";
  let age = 50;
  let address = `123, ABC Street, NJ`;
  return (
    <div className="">
      <h1 id="myheading" className="color-blue text-center ">
        This is my first React App
      </h1>

      <div className="card-container">
        {/* first card */}
        <div className="card text-center">
          <img src="/assets/img/avatar-image.png" />
          <h2>Name: {name}</h2>
          <span>Age: {age}</span>
          <br />
          <span>Address: {address}</span>
        </div>

        {/* second card */}
        <div className="card text-center">
          <img src="/assets/img/avatar-image-2.png" />
          <h2>Name: {name}</h2>
          <span>Age: {age}</span>
          <br />
          <span>Address: {address}</span>
        </div>
      </div>
      <p className="text-center">
        I created a straightforward web page using ReactJS with the assistance
        of <br /> Content Delivery Network (CDN) links.
      </p>
    </div>
  );
};

const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv); // Virtual DOM / React DOM
root.render(<MyReactApp />);
