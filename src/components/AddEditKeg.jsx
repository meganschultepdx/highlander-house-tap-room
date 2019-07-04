import React from 'react';

function AddEditKeg() {
    return (
        <div>
            <style jsx>{`

        #keg-form {
            font-family: sans-serif;
            width: 300px;
            border: 2px solid white;
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

        label, input {
            padding: 5px;
            margin: 5px;
            margin-bottom: 10px;
        }

        input {
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
                        id="name" />
                    <label>Brewery name:  </label>
                    <input
                        type='text'
                        id="brewery" />
                    <label>Price: </label>
                    <input
                        type='number'
                        id="price" />
                    <label>ABV:  </label>
                    <input
                        type='number'
                        id="abv" />
                    <button type='submit'>Add</button>
                    <button type='submit'>Edit Kegs</button>
                </form>
            </div>
        </div>
    );
}

export default AddEditKeg;