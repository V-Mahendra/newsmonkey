import React, { Component } from 'react'

export class Newsitems extends Component {
 

    render() {
        let { title, Description, imageUrl, newsUrl, author, date, source } = this.props;
        
        return (
            <div >
                <div className="card bg-dark text-light" style={{  width:"275px"}}>
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "87%", zIndex: "1" }}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageUrl ? imageUrl : "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800}"} style={{height:"150px"}}className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title " style={{fontSize:"15px"}} >{title}...</h5>

                        <p className="card-text" style={{fontSize:"10px"}}> {Description ? Description : "description not written by author..... "}....</p>
                        <p className="card-text"><small className="text-danger">By :  {author ? author : "unknown"} <br />  {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-info">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitems
