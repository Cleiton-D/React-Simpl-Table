import React from 'react';

import Table, { TableColumn } from '../src/index';

export default {
  title: 'Table',
  component: Table,
};

type DataProps = {
  key: string;
  description: string;
};

const data: DataProps[] = [
  { key: 'item1', description: 'Description for the item one' },
  { key: 'item2', description: 'Description for the item two' },
];

export const BasicTable: React.FC = () => (
  <Table<DataProps> data={data} keyExtractor={item => item.key}>
    <TableColumn name="key">key</TableColumn>
    <TableColumn name="description">description</TableColumn>
  </Table>
);

export const withCustomRender: React.FC = () => (
  <Table<DataProps> data={data} keyExtractor={item => item.key}>
    <TableColumn name="key">Key</TableColumn>
    <TableColumn
      name="description"
      render={item => <div>this is a custom render of {item}</div>}
    >
      description
    </TableColumn>
  </Table>
);
