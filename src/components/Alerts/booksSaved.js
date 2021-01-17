import React from "react";
import { Alert } from "react-bootstrap";
import "./booksSaved.css"

function AlertDismissible(props) {
  
      return (
        <Alert className="postedAlert" variant="success" dismissible onClose={() => props.closeDisplay()}>
          <Alert.Heading>Book Saved!</Alert.Heading>
        </Alert>
      );
    }
export default AlertDismissible;