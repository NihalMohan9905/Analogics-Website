import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './AnnualReports.css';

const reports = [
  {
    year: '2024-2025',
    path: '/annual-reports/annual-reports%202024-2025.pdf',
  },
  {
    year: '2023-2024',
    path: '/annual-reports/annual-reports%202023-2024.pdf',
  },
];

const AnnualReports = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedYear = searchParams.get('year');
  const initialReport = reports.find(({ year }) => year === requestedYear) || reports[0];
  const [selectedReport, setSelectedReport] = useState(initialReport);

  const selectReport = (year) => {
    const report = reports.find((item) => item.year === year);
    if (report) {
      setSelectedReport(report);
      setSearchParams({ year: report.year }, { replace: true });
    }
  };

  return (
    <main className="annual-reports-page">
      <div className="annual-reports-page__heading">
        <h1>Annual Reports {selectedReport.year}</h1>
        <label className="annual-reports-page__select-label" htmlFor="annual-report-year">
          Select year
        </label>
        <select
          id="annual-report-year"
          className="annual-reports-page__select"
          value={selectedReport.year}
          onChange={(event) => selectReport(event.target.value)}
        >
          {reports.map(({ year }) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="annual-reports-page__viewer">
        <iframe src={selectedReport.path} title={`Annual Reports ${selectedReport.year} PDF`} />
      </div>
    </main>
  );
};

export default AnnualReports;