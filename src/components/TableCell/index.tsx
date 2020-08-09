import React from 'react';

type TableCellProps = {
  data: any;
  render(item: any): React.ReactElement;
};

const TableCell: React.FC<TableCellProps> = ({ data, render }) => (
  <td>{render(data)}</td>
);

export default React.memo(TableCell);
