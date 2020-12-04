import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



const MovieItem =({film:{display_title,multimedia},idx}) =>{
    return(
        <Card body className="text-center">
            <Image src={multimedia? multimedia.src: null}/>
            <h5> </h5>
            <h4>{display_title}</h4>
        
        <Button variant ="info" as={Link} to={`/ReviewDetails/${idx}`}>See information</Button>
        </Card>
    )
}

export default MovieItem;