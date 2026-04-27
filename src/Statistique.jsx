export default function Statistique({ chiffre, libelle }) {
  return (
    <div className="stat-card">
      <h3>{chiffre}</h3>
      <p>{libelle}</p>
    </div>
  );
}
