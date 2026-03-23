import React from "react";
import { useParams } from "react-router-dom";
import scpData from "./scpData.json";

export default function SCP() {
  const { id } = useParams();

  const scp = scpData.scps.find((item) => item.itemNumber === id);

  if (!scp) {
    return <p>SCP not found.</p>;
  }

  return (
    <div>
      <h1>Item #: {scp.itemNumber}</h1>
      <h2>Object Class: {scp.objectClass}</h2>

      <h3>Special Containment Procedures</h3>
      <p>{scp.specialContainmentProcedures}</p>

      <h3>Description</h3>
      <p>{scp.description}</p>
      {scp.Image && <img src={scp.Image} alt={scp.itemNumber} />}

      {scp.addenda && (
        <div>
          <h3>Addenda</h3>
          {scp.addenda.map((a) => (
            <div key={a.id}>
              <h4>{a.summary}</h4>
              <p>{a.content}</p>
            </div>
          ))}
        </div>
      )}

      {scp.chronologicalHistory && (
        <div>
          <h3>Chronological History</h3>
          {scp.chronologicalHistory.map((entry) => (
            <p key={entry.date}><strong>{entry.date}:</strong> {entry.event}</p>
          ))}
        </div>
      )}

      {scp.humanProperties && (
        <div>
          <h3>Properties</h3>
          <ul>
            {scp.humanProperties.map((prop) => (
              <li key={prop}>{prop}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}