import React, { Props } from 'react';

type TableCellProps = {
  data: any;
  render(item: any): React.ReactElement;
};

const TableCell: React.FC<TableCellProps> = ({ data, render }) => render(data);

export default React.memo(TableCell);
