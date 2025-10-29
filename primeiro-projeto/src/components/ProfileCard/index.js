export function ProfileCard({name, imageUrl, description}) {
  return (
    <div className="card">
      <img src={imageUrl} alt="Foto" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}