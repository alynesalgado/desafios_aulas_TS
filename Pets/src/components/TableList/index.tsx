import React from 'react';
import IReport from '../../apifake/Interfaces/IReport';

interface TableReportProps {
  report: IReport[];
}

const Table: React.FC<TableReportProps> = ({report}) => {
  return (
    <table id="reportList">
      <thead>
        <tr>
          <th>Dono</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {report.map((reportItem) => (
          <tr key={reportItem.ownerId}>
            <td>{reportItem.ownerName}</td>
            <td>{reportItem.animalsCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;