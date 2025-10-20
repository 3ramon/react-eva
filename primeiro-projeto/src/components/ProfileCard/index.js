// export function ProfileCard() {
//   return (
//     <div className="card">
//       <img src="url-da-imagem-fixa.png" alt="Foto" />
//       <h2>João da Silva</h2>
//       <p>Desenvolvedor Front-end</p>
//     </div>
//   );
// }

export function ProfileCard({name, imageUrl, description}) {
  return (
    <div className="card">
      <img src={imageUrl} alt="Foto" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}