import UserList from './UserList';

const App = () => {
  const users = [
    { id: 1, name: 'Abdifatah', email: 'abdifatah@example.com' },
    { id: 2, name: 'Ahmed', email: 'ahmed@example.com' },
    { id: 3, name: 'Muuse', email: 'muuse@example.com' },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
