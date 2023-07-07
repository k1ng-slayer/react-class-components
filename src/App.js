import "./App.css";
import Greet from "./components/Greet";
import Adios from "./components/Adios";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterForRender from "./components/CounterForRender";

function App() {
    return (
        <div className="App">
            {/* <Greet fname="Randy" lname="Orton">
                <p>RKO</p>
            </Greet>
            <Greet fname="John" lname="Cena">
                <p>UCME</p>
            </Greet>
            <Greet fname="CM" lname="Punk" />
            <hr /> */}
            {/* <Adios fname="Randy" lname="Orton" />
            <Adios fname="John" lname="Cena" />
            <hr /> */}
            {/* <Message /> */}
            {/* <Counter /> */}
            {/* <FunctionClick /> */}
            {/* <ClassClick /> */}
            {/* <EventBind /> */}
            {/* <ParentComponent /> */}
            {/* <UserGreeting /> */}
            {/* <NameList /> */}
            {/* <Stylesheet primary={true} /> */}
            {/* <Inline /> */}
            {/* <h1 className="error">Error</h1>
            <h1 className={styles.success}>Success</h1> */}
            {/* <Form /> */}
            {/* <LifeCycleA /> */}
            {/* <FragmentDemo /> */}
            {/* <Table /> */}
            {/* <PureComp /> */}
            {/* <ParentComp /> */}
            {/* <RefsDemo /> */}
            {/* <FocusInput /> */}
            {/* <PortalDemo /> */}
            {/* <ErrorBoundary>
                <Hero heroName={"Superman"} />
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName={"Randy Orton"} />
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName={"Joker"} />
            </ErrorBoundary> */}
            {/* <ClickCounter name="Marco" />
            <HoverCounter place="Paris" /> */}
            {/* <ClickCounterTwo />
            <HoverCounterTwo />
            <User render={(isLoggedIn) => (isLoggedIn ? "Steve" : "Marnus")} /> */}
            {/* <CounterForRender
                render={(count, incrementCount) => (
                    <ClickCounterTwo
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            />
            <CounterForRender
                render={(count, incrementCount) => (
                    <HoverCounterTwo
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            /> */}

            {/* passing the props as children inbetween the tags */}
            {/* <CounterForRender>
                {(count, incrementCount) => (
                    <ClickCounterTwo
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </CounterForRender>
            <CounterForRender>
                {(count, incrementCount) => (
                    <HoverCounterTwo
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </CounterForRender> */}
        </div>
    );
}

export default App;

// import React, { Component } from "react";
// import ComponentC from "./components/ComponentC";
// import { UserProvider } from "./components/userContext";
// import RenderTable from "./components/RenderTable";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <UserProvider value="Sansa"> */}
//         {/* <ComponentC /> */}
//         {/* </UserProvider> */}
//         <RenderTable />
//       </div>
//     );
//   }
// }
//
// export default App;
