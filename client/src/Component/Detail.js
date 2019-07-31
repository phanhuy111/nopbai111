import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IoMdAirplane, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'

class DetailQuestion extends Component {

    render() {
        const { museum } = this.props;
        const details = museum.filter((i) => { return i._id === this.props.match.params.ID });
        return (
            <div className="chitietcauhoi" >
                <div className="back">
                    <Link to='/' className="iconback">
                        <IoIosArrowBack />
                    </Link>
                </div>
                <div className="cauhoi">
                    {
                        details.map((detail) => {
                            return (
                                <div className='detail' key={detail.id}>
                                    <div className="right1">
                                        <div className='title1'>
                                            <h1>
                                                {detail.name}
                                            </h1>
                                        </div>
                                        <div className='image1'>
                                            <img src={detail.urlImage} alt='' />
                                        </div>
                                        <div className="location1">
                                            <IoMdAirplane />
                                            {detail.location}
                                        </div>
                                        <div className="des1">
                                            {detail.description}
                                        </div>
                                    </div>
                                    <div className="left1">
                                        <iframe frameBorder="0" style={{ width: "100%", height: "500px" }} title="map"
                                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15672.268931690754!2d106.7824432!3d10.882491!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1564508476809!5m2!1svi!2s">
                                        </iframe>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        museum: state.museum.items
    }
}


export default connect(mapStateToProps, null)(DetailQuestion)