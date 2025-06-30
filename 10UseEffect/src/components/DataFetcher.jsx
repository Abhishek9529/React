import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Component render")
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <button onClick={() => handleData()}>Click Me</button>
            {loading ? (<h1>Loading...</h1>)
                :
                (<ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>)
            }


        </div>
    )
}

export default DataFetcher
