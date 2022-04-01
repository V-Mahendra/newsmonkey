import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className=" my-3 d-flex" style={{width:"100%", height:"70vh", color:"#fff", alignItems:"center",justifyContent:"center"}}>
                <img src={loading} alt="loading"    />
            </div>
        )
    }
}

export default Spinner
