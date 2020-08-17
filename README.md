# React Simpl Table

A simple table component for React.js with Typescript support

```sh
npm install react-simpl-table
```

## Usage

```tsx
import Table, { TableColumn } from 'react-simpl-table';

type DataType = {
  key: string;
  description: description;
};

const data: DataType[] = [
  {
    key: 'item1',
    description: 'this is a description for item one',
  },
  {
    key: 'item2',
    description: 'this is a description for item two',
  },
];

const App: React.FC = () => (
  <Table<DataType> data={data} keyExtractor={item => item.key}>
    <TableColumn name="key">Key</TableColumn>
    <TableColumn name="description">Description</TableColumn>
  </Table>
);
```

More examples in https://cleiton-d.github.io/React-Simpl-Table

By Cleiton Dione Ahnerth Kiper: [LinkedIn](https://www.linkedin.com/in/cleitonkiper)
