import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="your city name" className="form-control" autoFocus></input>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="your contry" className="form-control"></input>
            </div>
            <button type="submit" className="btn btn-success btn-block">
                Get Weather
            </button>
        </form>
    </div>
);

export default  WeatherForm;