import React, { Props } from 'react';

import TableRow from '../TableRow';

import { TableContextProvider } from '../../hooks/table';

interface TableProps<T> extends Props<void> {
  data: T[];
  keyExtractor(item: T): string;
}

function Table<T>({
  children,
  data,
  keyExtractor,
}: TableProps<T>): React.ReactElement {
  return (
    <TableContextProvider>
      <table>
        <thead>
          <tr>{children}</tr>
        </thead>
        <tbody>
          {data.map(item => (
            <TableRow<T> key={keyExtractor(item)} data={item} />
          ))}
        </tbody>
      </table>
    </TableContextProvider>
  );
}

export default Table;
