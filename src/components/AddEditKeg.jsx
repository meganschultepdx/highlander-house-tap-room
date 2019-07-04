import React from 'react';

function AddEditKeg() {
    return (
        <div>
            <style jsx>{`

        #keg-form {
            font-family: sans-serif;
            width: 500px;
            border: 2px solid darkgrey;
            background-color: white;
            border-radius: 8px;
            z-index: 1;
            top: 20%;
            position: absolute;
            margin-left: 10vw;
        }

        #form-title {
            padding-left: 5px;
        }

        label, input, textarea {
            padding: 5px;
            margin: 5px;
            margin-bottom: 10px;
        }

        input, textarea {
            border: 2px solid lightgrey;
            background-color: lightgrey;
            border-radius: 4px;
        }
        `}</style>
        
            <div id="keg-form">
                <form>
                    <h1 id="form-title">Add or Edit a keg:  </h1>
                    <label>Name of Beer:  </label>
                    <input
                        type='text'
                        id="name" /><br />

                        <label>About this beer:  </label>
                    <textarea
                        type='text'
                        id="name" /><br />

                    <label>Brewery name:  </label>
                    <input
                        type='text'
                        id="brewery" /><br />

                    <label>Price per pint:  </label>
                    <input
                        type='number'
                        id="price" /><br />

                    <label>ABV:  </label>
                    <input
                        type='number' step='.1'
                        id="abv" /><br />

                    <button type='submit'>Add</button><br />
                    <button type='submit'>Edit Kegs</button>
                </form>
            </div>
        </div>
    );
}

export default AddEditKeg;