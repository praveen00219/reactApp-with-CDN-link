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
  let developerName = "Jordan Walke";
  let releaseDate = 2013;
  return (
    <div className="w-9/12 mx-auto">
      <h1
        id="myheading"
        className="mx-auto mt-24 bg-gray-100 p-3 rounded-lg text-3xl font-bold text-gray-700 text-center "
      >
        This is my first React App
      </h1>

      {/* first div with p tag */}
      <div className="mx-auto mt-8 bg-gray-50 rounded-lg flex items-center justify-center">
        <p className="text-center w-[600px]">
          I created a straight forward web page using ReactJS with the
          assistance of Content Delivery Network (CDN) links.
        </p>
      </div>

      {/* second div with p and anchor tags */}
      <div className=" mx-auto my-8  bg-gray-50 rounded-lg flex flex-col items-center justify-center">
        <p className="text-center w-[600px] mb-5 text-gray-800">
          ReactJS is a powerful JavaScript library that allows us to build
          interactive and dynamic user interfaces. By leveraging CDNs, we can
          quickly access the necessary React libraries without the need for
          complex development setups. Use the React.createElement to create the
          Element And for rendering it use React.render.
        </p>

        <span className="font-semibold">
          Visit here : {/* anchor tag */}
          <a
            className="text-blue-500 hover:underline"
            href="https://react.dev/"
          >
            React.dev
          </a>
        </span>
      </div>

      <hr></hr>

      {/* 3rd div with p tag */}
      <div className="mx-auto my-8 text-gray-700 font-semibold bg-gray-50 rounded-lg flex flex-col items-center justify-center">
        <img
          src="/assets/img/React_(web_framework)-Logo.svg"
          className="logo"
        />
        <span>Release : {releaseDate}</span>
        <h2>Developer : {developerName}</h2>
        <p>Maintained and developed by Facebook.</p>
      </div>
    </div>
  );
};

const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv); // Virtual DOM / React DOM
root.render(<MyReactApp />);
