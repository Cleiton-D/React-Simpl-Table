import React, { Props } from 'react';

import { TableContextProvider } from '../../hooks/table';

interface TableProps<T> extends Props<void> {
  data: T[];
  keyExtractor(item: T): string;
}

function Table<T>({ children, data }: TableProps<T>): React.ReactElement {
  return (
    <TableContextProvider>
      <table>
        <thead>
          <tr>{children}</tr>
        </thead>
        <tbody />
      </table>
    </TableContextProvider>
  );
}

export default Table;
