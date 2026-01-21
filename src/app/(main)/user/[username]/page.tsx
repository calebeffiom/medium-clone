"use client"
import User from "@/components/pages/user";
import { useParams } from "next/navigation";

const UserRoute = () => {
    const params = useParams();
    const username = params.username as string;

    return <User username={username} />;
};

export default UserRoute;
