const Tabla = (props) => {
  const images = props.dota.sprites

  return (
    <>
    <h2>Name: {props.dota.name.charAt(0).toUpperCase() + props.dota.name.slice(1)}</h2>
    <div className="tabla-cont">
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.dota.name}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{props.dota.height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{props.dota.weight}</td>
          </tr>
          <tr>
            <td>Species</td>
            <td>{props.dota.species.name}</td>
          </tr>
          {props.dota.stats.map((statObj, index) => (
            <tr key={index}>
              <td>{statObj.stat.name}</td>
              <td>{statObj.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="img-gallery">
    {Object.values(images).map((value, index) =>
  typeof value === 'string' && (value.endsWith('.png') || value.endsWith('.gif')) ? (
    <img key={index} src={value} alt={`sprite-${index}`} />
  ) : null
)}
    </div>
    </>

  );
}

export default Tabla