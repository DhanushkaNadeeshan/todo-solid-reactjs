export default function ViewList({ list, deleteATask }) {
  return (
    <div>
      {list.slice(0).map((data, i) => (
        <div key={i} className={"view-list slide-bottom"}>
          <p style={{ margin: 0 }}>{data}</p>
          <button onClick={() => deleteATask(i)} >Delete</button>
        </div>
      ))}
    </div>
  );
}
