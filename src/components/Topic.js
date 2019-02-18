import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Radio} from "antd";

const topics = [
    {
        name: 'React Router',
        id: 'react-router',
        description: 'Declarative, component based routing for React',
        resources: [
            {
                name: 'URL Parameters',
                id: 'url-parameters',
                description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
                url: 'https://tylermcginnis.com/react-router-url-parameters/'
            },
            {
                name: 'Programatically navigate',
                id: 'programmatically-navigate',
                description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
                url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
            }
        ]
    },
    {
        name: 'React.js',
        id: 'reactjs',
        description: 'A JavaScript library for building user interfaces',
        resources: [
            {
                name: 'React Lifecycle Events',
                id: 'react-lifecycle',
                description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
                url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
            },
            {
                name: 'React AHA Moments',
                id: 'react-aha',
                description: "A collection of 'Aha' moments while learning React.",
                url: 'https://tylermcginnis.com/react-aha-moments/'
            }
        ]
    },
    {
        name: 'Functional Programming',
        id: 'functional-programming',
        description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
        resources: [
            {
                name: 'Imperative vs Declarative programming',
                id: 'imperative-declarative',
                description: 'A guide to understanding the difference between Imperative and Declarative programming.',
                url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
            },
            {
                name: 'Building User Interfaces with Pure Functions and Function Composition',
                id: 'fn-composition',
                description: 'A guide to building UI with pure functions and function composition in React',
                url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
            }
        ]
    }
];

function Resource({match}) {
    const topic = topics.find(({id}) => id === match.params.topicId)
        .resources.find(({ id }) => id === match.params.subId)
    return(
        <div>
            <h2>RESOURCES</h2>
            <p>{topic.name}</p>
            <p>{topic.desription}</p>
            <a href="topic.url">more</a>
        </div>
    )
}

function One_topic({ match }) {
    const topic = topics.find(({ id }) => id === match.params.topicId);
    console.log(match);
    return(
        <div>
            <h1>ONE TOPIC</h1>
            <h2>{topic.name}</h2>
            <p>{topic.description}</p>
            <ul>
                {topic.resources.map((sub) => (
                    <li key={sub.id}>
                        <Link to={`/topics/${match.params.topicId}/${sub.id}`}>{sub.name}</Link>
                    </li>
                ))}
            </ul>
            <hr/>
            <Route path={`/topics/:topicId/:subId`} component={Resource}/>
        </div>
    )
}

function Topics({match}) {

    return(
        <div>
            <h1>TOPCICS PAGE</h1>
            <ul>
                {topics.map(({name, id}) => (
                    <li key={id}><Link to={`/topics/${id}`}>{name}</Link></li>
                ))}
            </ul>
            <hr/>
            <Route path={`/topics/:topicId`} component={One_topic}/>
        </div>
    )
}

function Home() {
    return(
        <h1>HOME PAGE</h1>
    )
}

class Topic extends Component {
    render() {
        return (
            <Router>
                <div style={{width: 1000, margin: '0 auto'}}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/topics'>Topics</Link> </li>
                    </ul>
                    <hr/>

                    <Route exact path='/' component={Home} />
                    <Route path='/topics' component={Topics} />
                </div>
            </Router>
        );
    }
}
export default Topic;