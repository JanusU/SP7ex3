import React, {Component} from 'react'
import auth from '../authorization/auth'
import {observer} from "mobx-react";

const Home = observer(class Home extends Component {

    render() {
        return (
            <div>
                <h3>Exam Demo Project</h3>
            </div>
        )
    }
})

export default Home;


