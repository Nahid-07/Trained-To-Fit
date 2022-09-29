import React from "react";

const Footer = () => {
  return (
    <div className="bg-cyan-800 grid grid-cols-1 md:grid-cols-3 gap-16 text-white px-5 py-3">
      <div>
        <h1 className="text-3xl font-bold ">How does react work</h1>
        <div>
          <p className="text-xl text-justify mt-4 text-gray-300">
            React is a JavaScript liabrary which is use to buildind flexible
            UI.React developers once feel that DOM is slow to run.Thats the
            reason they have made a concept called Virtual DOM.Actually React
            work with Virtual dom.Now it can be the question of "How Does react
            virtual dom work?".well it is quite siimple method.React virtual dom
            compares to the real dom that something has changed or not in the
            document.if changes happen the virtual dom apply the changes without
            reload the hole document.React uses a declarative paradigm that
            makes it easier to reason about your application and aims to be both
            efficient and flexible. It designs simple views for each state in
            your application, and React will efficiently update and render just
            the right component when your data changes.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">
          Diefferece between props and State
        </h1>
        <p className="text-xl text-justify mt-4 text-gray-300">
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components. The this.setState property is used to
          update the state values in the component.
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Use Case of UseEffect</h1>
        <p className="text-xl mt-4 text-justify text-gray-300">
        Whenever we need to make use of side effects in our application, useEffect is the way to go. This hook doesn't present many complications, except for non-primitive data types, due to how JavaScript handles them.it can be use for timer , fething data from an api, Running on state change: live filtering, many more side that we can use for side effects
        </p>
      </div>
    </div>
  );
};

export default Footer;
