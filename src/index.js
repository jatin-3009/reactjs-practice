import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './describing-the-ui/importing-exporting-components/App';
import reportWebVitals from './reportWebVitals';
import TodoList from './describing-the-ui/writing-markup-jsx/TodoList';
import Avatar from './describing-the-ui/jsx-curly-braces/Avatar';
import Intern from './describing-the-ui/jsx-curly-braces/Intern';
import Today from './describing-the-ui/jsx-curly-braces/Today';
import List from './describing-the-ui/jsx-curly-braces/List';
import AllInOne from './describing-the-ui/jsx-curly-braces/AllInOne';
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
import UsingSeparateProps from './describing-the-ui/passing-props/UsingSeparateProps';
import UsingSinglePropsObject from './describing-the-ui/passing-props/UsingSingleProps';
import DefaultPropsValue from './describing-the-ui/passing-props/DefaultPropsValue';
import ForwardingProps from './describing-the-ui/passing-props/ForwardingProps';
import NestedProfile from './describing-the-ui/passing-props/Children';
import ItemsForOffice from './describing-the-ui/conditional-rendering/IfElse';
import ShowcaseSkills from './describing-the-ui/conditional-rendering/ReturnNull';
import WatchList from './describing-the-ui/conditional-rendering/Ternary';
import ListOfNames from './describing-the-ui/conditional-rendering/LogicalAndOperator';
import ShowListUsingMapMethod from './describing-the-ui/rendering-list/Map';
import ShowListUsingFilterAndMapMethods from './describing-the-ui/rendering-list/Filter';

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
    {/* <Parent /> */}
    {/* <UsingSeparateProps /> */}
    {/* <UsingSinglePropsObject /> */}
    {/* <DefaultPropsValue /> */}
    {/* <ForwardingProps
      firstName = {"Jatin"}
      lastName = {"Ninawe"}
      color = {"white"}
      backgroundColor = {"black"}
    /> */}
    {/* <NestedProfile /> */}
    {/* <ItemsForOffice />
    <ShowcaseSkills /> */}
    {/* <WatchList /> */}
    {/* <ListOfNames /> */}
    {/* <ShowListUsingMapMethod /> */}
    <ShowListUsingFilterAndMapMethods />
  </React.StrictMode>
);