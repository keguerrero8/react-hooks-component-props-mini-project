import React from "react";

//pass in props = {postInfo : {post}}
// pass in props = {posts: [
//     {
//         id: 1,
//         title: "Components 101",
//         date: "December 15, 2020",
//         preview: "Setting up the building blocks of your site",
//         minutes: 5,
//       },
//       {
//         id: 2,
//         title: "React Data Flow",
//         date: "December 11, 2020",
//         preview: "Passing props is never passé",
//         minutes: 15,
//       },
//       {
//         id: 3,
//         title: "Function vs Class Components",
//         preview: "React, meet OOJS.",
//         minutes: 47,
//       },
//     ]}

function Article ({ title, date = "January 1, 1970", preview}) {

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article