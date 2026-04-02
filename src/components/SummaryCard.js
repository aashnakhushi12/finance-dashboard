export default function SummaryCard({ title, value }) {
  return (
    <div className="card">
      <p style={{ fontSize: "14px", color: "#6b7280" }}>{title}</p>
      <h2 style={{ fontSize: "28px", margin: "5px 0" }}>₹{value}</h2>
    </div>
  );
}
