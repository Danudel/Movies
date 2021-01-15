import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { CardDeck, Col } from 'react-bootstrap';
import './ActorsView.css'



class Actors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredSearch: '',
        }
    }



    handleSearch = (e) => {
        this.setState({
            filteredSearch: e.target.value
        })
    }

    filteredActors = () => {
        return this.state.actors.filter(actor => {
            return actor.fname.toLowerCase().includes(this.state.filteredSearch.toLowerCase())
        })
    }


    render() {
        const ActorsCards = []; 
        for (let i = 0; i < this.props.actors.length; i++) {
            let fullname= this.props.actors[i].fname+this.props.actors[i].lname;
            fullname= fullname.toLowerCase();
            if (! fullname.includes(this.state.filteredSearch)){
                continue
            }
            const cardContent = 
                <Col sm={4} style={{padding: '25px'}}>
                    <Card style={{ borderRadius: 15, height: '40rem', width: '20rem' }}>
                        <Card.Img variant="top" src={this.props.actors[i].img} />
                        <Card.Body>
                            <Card.Title>{this.props.actors[i].fname} {this.props.actors[i].lname}</Card.Title>
                            <Card.Text>Age: {this.props.actors[i].age()}</Card.Text>
                            <a target="_blank" href={this.props.actors[i].imdb}>
                                 <Button variant="outline-dark" >Go to IMDB</Button>
                            </a>
                        </Card.Body>
                    </Card> 
            </Col>
            ActorsCards.push(cardContent);
        }
        return (
            <div>
                <h1 className="header"  >Actors Gallery</h1>
                <div style={{ textAlign: 'center' }} >   
                    <input label='Filter Actors: ' placeholder='Enter actor name' value={this.state.filteredSearch} onChange={this.handleSearch} />
                </div>
                < CardDeck >        
                    {ActorsCards} 
                </CardDeck>
            </div>
            )
    }
}

export default Actors;


