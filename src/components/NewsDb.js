import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import Masonry from 'react-masonry-css'


export class NewsDb extends Component {
    static defaultProps = {

        country: "in",
        pageSize: 8,
        category: "general"

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8fac5e612a30412c8c9f8e615f276da2&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true })

        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false

        })

    }

    async componentDidMount() {
        this.updateNews();
    }

    prevPage = async () => {

        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    nextPage = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }


    breakpoints = {
        default: 4,
        1400: 3,
        1150: 2,
        800: 1
    }

    render() {
        return (
            <div className="container fcx  text-light" style={{ borderRadius: "5px", backgroundColor: " #686868", display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h2 className="text-center " style={{ margin: "35px 10px", paddingTop: "25px" }} >Explore the world by news - Top Headlines</h2>
                {this.state.loading && <Spinner />}

                <div className="row mx-5 my-3">    

                    <Masonry
                        breakpointCols={this.breakpoints}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {/* array of JSX items */}
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-3" key={element.url} >
                                <Newsitems
                                    title={element.title}
                                    Description={element.description}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                source={element.source.name}
                                />
                            </div>
                        })}
                    </Masonry>

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary my-3" onClick={this.prevPage}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary my-3" onClick={this.nextPage}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default NewsDb
