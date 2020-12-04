import Container from 'react-bootstrap/Container';


const About = () =>{

    return(
        <Container className="mt=-4">
            <br></br>
            <h1>About</h1>

            <br></br>
            <h5><b>Movie Review</b> - Dennis Billy Yosua Toreh (for Final Exam Front-End Web Development Class 2020 - FIK UNKLAB)</h5>
            
            <br></br>
            <h3>Ini adalah aplikasi untuk menampilkan review dari film-film yang diambil dari API New York Times - Movie</h3>
            <h5>Aplikasi ini memiliki fitur mencari film, melihat informasi film, melihat detail film di website resmi NewYorkTimes</h5>
            <br></br>

            <h3>End-Point yang digunakan untuk Movie Review:</h3>
            <ul>
                <li>Pertama, untuk mengambil 20 review movie terkini dari API NewYorkTimes : <br></br> <b>https://api.nytimes.com/svc/movies/v2/reviews/all.json?</b></li>
                <li>Kedua, mengambil API dari NewYorkTimes untuk mencari film berdasarkan querynya : <br></br><b>https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=$movieText</b> </li>
                
            </ul>


            
        </Container>

    );

}

export default About;