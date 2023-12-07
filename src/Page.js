import React, { Component } from 'react';
import FieldIngredient from './FieldIngredient';

class Page extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input
                    className="FieldPreTime"
                    type="text"
                />
                <div className="FieldIngredientContainer">
                    <FieldIngredient />
                    <FieldIngredient />
                    <FieldIngredient />
                    <FieldIngredient />
                </div>
            </div>

        );
    }
}

export default Page;
