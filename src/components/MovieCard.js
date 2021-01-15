import { Card } from "react-bootstrap"

const MovieCard = function (props) {
    const { movieName } = props
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{movieName}</Card.Title>
                <Card.Text>
                    Bla bla bla
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MovieCard

/**
 * adding: 
Movie name
Length in minutes
Poster
Director
Main stars **/