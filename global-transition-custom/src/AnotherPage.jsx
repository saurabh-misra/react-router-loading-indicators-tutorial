import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import getData from "./api";

export async function loader() {
    return await getData();
}

export default function AnotherPage() {
    const data = useLoaderData();

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>Another Page</h1>
                        <Card {...data} width="300px" />
                    </div>
                </div>
            </div>
        </>
    );
}