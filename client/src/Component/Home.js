import React, { Component } from 'react';
// import ListView from './ListView'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Fuse from 'fuse.js';
import { IoMdAirplane, IoIosSearch } from "react-icons/io";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.museum !== this.state.data) {
            this.setState({ data: nextProps.museum });
        }
    }


    componentDidMount() {
        this.setState({
            data: this.props.museum
        });
    }


    handleChange = (e) => {
        const options = {
            threshold: 0.05,
            location: 0,
            distance: 100,
            minMatchCharLength: 1,
            keys: ['name']
        }
        const fuse = new Fuse(this.state.data, options)
        const data = fuse.search(e.target.value.trim())
        this.setState({
            value: e.target.value.trim(),
            data
        });
    }

    render() {
        const { data } = this.state
        console.log(data)
        return (
            <div className="all">
                <div className="all-search">
                    <div className="logo">
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOd_tdCl5xISunahYC7KBWlgxh_sj1A2Oqxohu0-aUgRA0_As'
                            alt='hhh'
                            className='logoImage'
                        />
                    </div>
                    <input
                        type="text"
                        name="quantity"
                        id="search_tern"
                        required=""
                        className="search_box ui-search-field"
                        value={this.props.value}
                        onChange={this.handleChange}
                        placeholder="Tìm kiếm" />
                    <IoIosSearch />
                </div>
                <div className="listview">
                    {
                        data.map((e, i) => {
                            return (
                                <div className="modalP" key={i}>
                                    <div className="right">
                                        <div className="image">
                                            <img src={e.urlImage} alt='' />
                                        </div>
                                    </div>
                                    <div className="left">
                                        <Link to={`/detail/${e._id}`} className="name">
                                            {e.name}
                                        </Link>
                                        <div className="location">
                                            <IoMdAirplane />
                                            {e.location}
                                        </div>
                                        <div className="description">
                                            {e.description.substr(0, 150)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        museum: state.museum.items
    }
}

export default connect(mapStateToProps, null)(Home)

