import './AnnualReports.css';

const VigilMechanismPolicy = () => {
  return (
    <main className="annual-reports-page">
      <div className="annual-reports-page__heading">
        <h1>Vigil Mechanism Policy</h1>
      </div>
      <div className="annual-reports-page__viewer">
        <iframe
          src="/policies/vigil-mechanism-policy.pdf"
          title="Vigil Mechanism Policy PDF"
        />
      </div>
    </main>
  );
};

export default VigilMechanismPolicy;
