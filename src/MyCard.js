import Card from "react-bootstrap/Card";
import differenceInMinutes from "date-fns/differenceInMinutes";
import differenceInDays from "date-fns/differenceInDays";
import NewCycleDialog from "./NewCycleDialog";
import { useState, useEffect } from "react";

function MyCard({ id, title, imageUrl, linkUrl, startDate, setNewStartDate }) {
  // In testing mode, use these settings:
  const lifespan = 1; // The filter's lifespan in minutes
  const timeDifferenceFunction = differenceInMinutes;

  //In production mode, you can switch lifespan and timeDifferenceFunction to the corresponding values (90 days and differenceInDays).

  const [remainingTime, setRemainingTime] = useState(lifespan);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    // Convert the startDate to a JavaScript Date object
    const startDateObj = new Date(startDate);

    // The current date and time
    const now = new Date();

    // Calculate the elapsed time since the filter start date
    const elapsedTime = timeDifferenceFunction(now, startDateObj);

    // Calculate the remaining time
    const newRemainingTime = lifespan - elapsedTime;
    setRemainingTime(newRemainingTime);

    // Check if the filter has expired
    const newExpired = newRemainingTime <= 0;
    setExpired(newExpired);
  }, [startDate, lifespan, timeDifferenceFunction]);

  const [showDialog, setShowDialog] = useState(false);
  const handleShow = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true); // Start loading

    // Prepare the data for the PATCH request
    const data = { date: new Date().toISOString() };

    // Send the PATCH request
    fetch(`http://localhost:5000/filters/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          // Handle the error
          console.error(data.error);
        } else {
          // Successfully updated the filter
          // Now you can update the state
          setNewStartDate(); // Inform the parent component to update the start date
        }
      })
      .catch((error) => {
        // Handle network errors
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Stop loading
        handleClose();
      });
  };

  return (
    <Card bg="primary" className="d-flex flex-column text-center">
      <Card.Img variant="top" src={require(`./images/${imageUrl}`)} />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ height: "70px", overflow: "hidden" }}>
          {title}
        </Card.Title>
        <div style={{ flexGrow: 1 }}>
          {loading ? (
            <Card.Text>Loading...</Card.Text>
          ) : expired ? (
            <Card.Text>Filter expired, please replace it.</Card.Text>
          ) : (
            <Card.Text>Time remaining: {remainingTime} minutes</Card.Text>
          )}
        </div>

        <br />
        <NewCycleDialog
          show={showDialog}
          handleConfirm={handleConfirm}
          handleShow={handleShow}
          handleClose={handleClose}
          expired={expired}
        />
        <Card.Link href={linkUrl} target="_blank">
          Buscar en Google
        </Card.Link>
      </Card.Body>

      <Card.Footer></Card.Footer>
    </Card>
  );
}

export default MyCard;
