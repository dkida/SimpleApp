import React from 'react';

export const Form = () => {
    return(
        <div>
            <div>User Data</div>
            <form className="container">
                <div className="row">
                    <div className="col-sm">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div className="col-sm">
                        <input type="text" id="name" />
                    </div>
                    <div className="col-sm">
                        Invalid Character!
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <label htmlFor="surname">Surname:</label>
                    </div>
                    <div className="col-sm">
                        <input type="text" id="surname" />
                    </div>
                    <div className="col-sm">
                        Invalid Character!
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <label htmlFor="age">Age:</label>
                    </div>
                    <div className="col-sm">
                        <input type="text" id="age" />
                    </div>
                    <div className="col-sm">
                        Invalid Character!
                    </div>
                </div>
                <div>Hello name surname!</div>
                <input type="submit" value="Save"/>
            </form>
        </div>
    );
}