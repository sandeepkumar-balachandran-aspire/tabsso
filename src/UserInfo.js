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
                //    const response = await fetch("https://graph.microsoft.com/v1.0/me", {
                //        headers: {
                //            Authorization: `Bearer ${token}`,
                //        },
                //    });

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