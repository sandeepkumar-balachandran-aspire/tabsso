import React, { useEffect, useState } from "react";
import { getAccessToken } from "./Auth";

const UserInfo = () => {
    const [user] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = await getAccessToken();
                console.log("Client side toeken :  " + token);
                const response = await fetch('https://localhost:7136/api/auth/getProfileOnBehalfOf', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log("Server response data: ", data);
                setUser(data);

                // const data = await response.json();
                // setUser(data);
            } catch (error) {
                console.error("Error fetching user info: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>Failed to load user information.</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.displayName}</h1>
        </div>
    );
};

export default UserInfo;