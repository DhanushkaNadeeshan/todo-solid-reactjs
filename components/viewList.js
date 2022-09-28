

export default function ViewList({ list, deleteATask }) {

    return (<div>
        {list.slice(0).reverse().map((data, i) => (
            <div key={i} className="view-list">
                <p style={{margin:0}} >{data}</p>
                <button onClick={() => deleteATask(data)} >Delete</button>
            </div>
        ))}
    </div>)
}