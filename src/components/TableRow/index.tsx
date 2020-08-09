import React, { Props, useMemo } from 'react';
import { useTable } from 'hooks/table';
import TableCell from 'components/TableCell';

interface TableRowProps<T> extends Props<void> {
  data: T;
}

type DataType = {
  [key: string]: any;
};
function TableRow<T extends DataType>({
  data,
}: TableRowProps<T>): React.ReactElement {
  const { getAllColumns } = useTable();

  const ordenedColumns = useMemo(() => {
    const columns = getAllColumns();

    return columns.sort((a, b) => a.index - b.index);
  }, [getAllColumns]);

  return (
    <tr>
      {ordenedColumns.map(column => (
        <TableCell
          key={column.name}
          render={column.render}
          data={data[column.name]}
        />
      ))}
    </tr>
  );
}

export default TableRow;
