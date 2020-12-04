import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class Searching extends React.Component{
    constructor(props){
        super(props);

        this.state={
            movieText :''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchMovies(this.state.movieText);

        this.setState({movieText:''});
    }
    onChange = (e) => {
        this.setState({movieText: e.target.value})
    }
render(){
        return(
            
            <Form onSubmit={this.onSubmit}>
                <br></br>
                <h1 className='h1'>Movie Review</h1>
                <br></br>
                <Form.Control type="text" name="movieText" placeholder="Search Movies" value={this.state.movieText} onChange={this.onChange} autoFocus/>
                <h5> </h5>
                <Button variant="secondary" type="submit" block>Search  </Button>
                <br></br>
            </Form>
        );
    }


}

Searching.propTypes={
    searchMovies: PropTypes.func.isRequired
}

export default Searching;