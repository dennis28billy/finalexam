import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';


const ReviewDetails = ({movies})=>{


    const {idx} = useParams();
    const detail = movies[idx];


    return(
        <div>
        <br></br>
                <Image src={detail.multimedia? detail.multimedia.src: null} style={{width : '270px'}}/>
        <br></br>
            <h1>{detail.display_title}</h1>
                <Badge variant="secondary">Date Updated : {detail.date_updated}</Badge>{' '}
                <Badge variant="primary">Publication Date : {detail.publication_date}</Badge>{' '}
                <Badge variant="success">Opening Date : {detail.opening_date}</Badge>{' '}
        <br></br>
            <h7> </h7>
        <br></br>
            <h4>{detail.headline}</h4>
            <h6>by {detail.byline}</h6>
            <h6>{detail.summary_short}</h6>
        <br></br>
            <h1> </h1>
        <br></br>

        <Link to="/">
        <Button variant="secondary" className="mb-4">Back to Home</Button>
        </Link>
        {" "}
        <Button variant="info" className="mb-4" href={detail.link.url}>See Details</Button>
       
    </div>


    )

}

ReviewDetails.propTypes = {
    movies:PropTypes.array.isRequired
}

export default ReviewDetails;

