import React, { Component } from 'react';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import img from './images/image.png'

import {fetchData} from './api/index'

export class App extends Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country})
    }

    render() {
        const {data, country} = this.state

        return (
            <div className={styles.container}>
                <img src={img} alt="COVID-19" className={styles.image}/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;
