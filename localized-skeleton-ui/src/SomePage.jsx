import { Await, defer, useLoaderData } from "react-router-dom";
import Card from "./Card";
import getData from "./api";
import React from "react";
import CardSkeleton from "./CardSkeleton";

export async function loader() {
    return defer({ data: getData() });
}

export default function SomePage() {
    const { data } = useLoaderData();

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>Some Page</h1>
                        <React.Suspense fallback={<CardSkeleton />}>
                            <Await resolve={data} errorElement={<div className="alert alert-danger">Something went wrong!</div>}>
                                {
                                    (data) => <Card {...data} />
                                }
                            </Await>
                        </React.Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}