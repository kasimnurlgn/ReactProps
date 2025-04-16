import "./App.css";
import img1 from "./assets/icon-phase-1.png";
import img2 from "./assets/icon-phase-2.png";
import img3 from "./assets/icon-phase-3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import PhaseCard from "./components/PhaseCard/PhaseCard";

function App() {
  return (
    <>
      <PhaseCard
        image={img1}
        title="Phase 1: Building static websites using HTML, CSS & Bootstrap"
        description="In this phase, you'll learn about the underlying structure of the
              web - HTML. You'll also learn how to apply styling to a website
              through CSS. To help you build websites faster and easier, you
              will learn the Bootstrap framework. Along the way, you'll also
              learn about VS Code editor and Chrome's Developer Tools."
      />
      <PhaseCard
        image={img2}
        title="Phase 2: Learn coding with JavaScript"
        description="JavaScript is among the most powerful and flexible programming
              languages of the web. It powers the dynamic behavior on most
              websites. In this phase of your course, you will learn programming
              fundamentals using the latest JavaScript syntax. The concepts
              covered in these lessons lay the foundation for using JavaScript
              in any environment."
      />
      <PhaseCard
        image={img3}
        title="Phase 3: Node, Express, MySql and React.js"
        description="React is a JavaScript library, developed in 2013 by Facebook. It
              is very popular and used on major sites including on Facebook,
              Netflix, Khan Academy and many others. In this phase, we will
              start from the fundamentals and go all the way up to building full
              applications with custom styling. Along the way, you'll also learn
              about npm, ES6, Node.js, Express and MySql."
      />
    </>
  );
}

export default App;
