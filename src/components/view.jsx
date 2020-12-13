import React, { Component } from 'react'
import http from './services/http';
import config from '../config.json';
import { toast } from 'react-toastify';


class View extends Component {
    state = {
        list: []
    }

    makeRequest = async () => {
        const request = {
            title: "gowtham",
            body: "just a request"
        }

        try {
            let { data: list } = await http.post(config.apiEndpoint, request);
            list = JSON.stringify(list)
            this.setState({ list });
        }
        catch (error) {
            if (error.response && error.response.status === 404)
                toast.error('its already been deleated, client side error');

            //Here we have to set the set the state to previous state
        }

    }
    render() {
        return (
            <div>
                <button onClick={() => this.makeRequest()}>GET</button>
                <p>
                    {this.state.list}
                </p>
            </div>
        )
    }
}

export default View
