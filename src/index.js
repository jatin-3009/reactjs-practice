import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './importing-exporting-components/App';
import reportWebVitals from './reportWebVitals';
import TodoList from './writing-markup-jsx/TodoList';
import Avatar from './jsx-curly-braces/Avatar';
import Intern from './jsx-curly-braces/Intern';
import Today from './jsx-curly-braces/Today';
import List from './jsx-curly-braces/List';
import AllInOne from './jsx-curly-braces/AllInOne';
import Car from './class-based-components/Props';
import Garage from './class-based-components/NestedComponents';
import Button from './class-based-components/State';
import Constructor from './class-based-components/lifecycle-methods/Constructor';
import GetDerivedStateFromProps from './class-based-components/lifecycle-methods/GetDerivedStateFromProps';
import ComponentDidMount from './class-based-components/lifecycle-methods/ComponentDidMount';
import Counter from './simple-problems/Counter';
import ParentCounterClass from './simple-problems/Counter2';
import Range from './class-based-components/lifecycle-methods/ShouldComponentUpdate';
import Snapshot from './class-based-components/lifecycle-methods/GetSnapshotBeforeUpdate';
import UpdateCity from './class-based-components/lifecycle-methods/ComponentDidUpdate';
import Parent from './class-based-components/lifecycle-methods/ComponentWillUnmount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoList /> */}
    {/* <Avatar />
    <Intern />
    <Today />
    <List /> */}
    {/* <AllInOne /> */}
    {/* <Car speed={300} /> */}
    {/* <Garage /> */}
    {/* <Button /> */}
    {/* <Constructor /> */}
    {/* <GetDerivedStateFromProps level={40} /> */}
    {/* <ComponentDidMount /> */}
    {/* <Counter initialCount={0} /> */}
    {/* <ParentCounterClass initialCount={0} /> */}
    {/* <Range initialCount={0} /> */}
    {/* <Snapshot /> */}
    {/* <UpdateCity /> */}
    <Parent />
  </React.StrictMode>
);