import React from "react";
import "./../jsx-curly-braces/Avatar.css";

function Avatar({ person, size }) {
    return (
        <div>
            <h2>Inside Avatar component.</h2>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <img src={person.imageUrl}
                    alt={person.name}
                    width={size}
                    height={size}>
                </img>
            </div>
        </div>
    );
}

function Card({ children }) {
    return (
        <div style={{
            borderRadius: "20px",
            padding: "20px",
            border: "2px solid black",
            display: "inline-block"
        }}>
            <h2>Inside Card component.</h2>
            {children}
        </div>
    );
}

function NestedProfile() {
    return (
        <div>
            <h2>Inside NestedProfile component.</h2>
            <Card>
                <Avatar size={150}
                    person={{
                        name: "Katsuko Saruhashi",
                        imageUrl: "https://i.imgur.com/YfeOqp2s.jpg"
                    }}
                />
            </Card>
        </div>
    );
}

export default NestedProfile;