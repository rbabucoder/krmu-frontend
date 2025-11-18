import Image from "next/image";

const TeamLibraryCard = () => {
  return (
    <div className="card">
      <Image src="/research/Hela.webp" width={150} height={360} alt="" />
      <div className="profile-card-content">
        <h1>Dr. Helaluddin (Ph.D.)</h1>
        <ul>
          <li>University Librarian</li>
          <li>University Nodal Officer to IRINS/UGC</li>
          <li>University Coordinator for Ph.D. Thesis to INFLIBNET/UGC</li>
          <li>University Coordinator for Anti-Plagiarism Checking</li>
        </ul>
      </div>
    </div>
  );
};

export default TeamLibraryCard;
