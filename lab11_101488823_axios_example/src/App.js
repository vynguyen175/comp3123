import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(res => {
        setPeople(res.data.results || []);
      })
      .catch(err => {
        console.error("Failed to fetch users:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container className="py-5">
        <h4>Loading users…</h4>
      </Container>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f8" }}>
      {/* Top title bar */}
      <div
        style={{
          background: "#21a543",
          color: "#fff",
          padding: "14px 24px",
          fontWeight: 700,
          fontSize: 22,
          textAlign: "center",
          letterSpacing: 0.4
        }}
      >
        User List
      </div>

      <Container className="my-4">
        {people.map((p, idx) => {
          const fullName = `${p.name.title} ${p.name.first} ${p.name.last}`;
          const headerText = `${fullName} - ${p.login.uuid}`;
          const username = p.login.username;
          const gender = (p.gender || "").toUpperCase();
          const tz = p.location?.timezone?.description;
          const address = `${p.location?.street?.number} ${p.location?.street?.name}, ${p.location?.city}, ${p.location?.state}, ${p.location?.country} - ${p.location?.postcode}`;
          const email = p.email;
          const dobDate = new Date(p.dob?.date).toISOString().slice(0, 10);
          const dobAge = p.dob?.age;
          const regDate = new Date(p.registered?.date).toISOString().slice(0, 19).replace("T", " ");
          const phone = p.phone;
          const cell = p.cell;

          return (
            <Card key={idx} className="mb-3 shadow-sm" style={{ border: "none" }}>
              {/* thin top bar like in screenshot */}
              <div style={{ height: 10, background: "#135d72" }} />
              <Card.Body style={{ background: "#0e95a5" }}>
                <Row className="align-items-center">
                  {/* avatar + Details button */}
                  <Col xs="auto" className="text-center">
                    <img
                      src={p.picture?.large}
                      alt={fullName}
                      style={{
                        width: 90,
                        height: 90,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid #fff"
                      }}
                    />
                    <div className="mt-2">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => alert(`More details for ${fullName}`)}
                      >
                        Details
                      </Button>
                    </div>
                  </Col>

                  {/* main info block */}
                  <Col>
                    <div
                      style={{
                        color: "#d6f4f6",
                        fontWeight: 700,
                        marginBottom: 6,
                        fontSize: 16
                      }}
                    >
                      {headerText}
                    </div>

                    <Row as="ul" style={{ listStyle: "none", paddingLeft: 0, marginBottom: 0, color: "#f3f9fb" }}>
                      <Col as="li" md={6} className="mb-1">
                        <strong>User Name:</strong> {username}
                      </Col>
                      <Col as="li" md={6} className="mb-1">
                        <strong>Gender:</strong> {gender}
                      </Col>
                      <Col as="li" md={12} className="mb-1">
                        <strong>Time Zone Description:</strong> {tz}
                      </Col>
                      <Col as="li" md={12} className="mb-1">
                        <strong>Address:</strong> {address}
                      </Col>
                      <Col as="li" md={6} className="mb-1">
                        <strong>Email:</strong> {email}
                      </Col>
                      <Col as="li" md={6} className="mb-1">
                        <strong>Birth Date and Age:</strong> {dobDate} ({dobAge})
                      </Col>
                      <Col as="li" md={6} className="mb-1">
                        <strong>Register Date:</strong> {regDate}
                      </Col>
                      <Col as="li" md={3} className="mb-1">
                        <strong>Phone:</strong> {phone}
                      </Col>
                      <Col as="li" md={3} className="mb-1">
                        <strong>Cell:</strong> {cell}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}
