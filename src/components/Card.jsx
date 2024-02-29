import Card from 'react-bootstrap/Card';

function KitchenSinkExample(props) {
  return (
    <Card className="card" style={{ width: '15vw', margin: '10px', backgroundColor: 'rgba(0,0,0,0.01)', display: 'inline-block' }}>
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>No.{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
