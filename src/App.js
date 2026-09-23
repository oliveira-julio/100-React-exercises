import { BrowserRouter, Routes, Route } from 'react-router-dom';

const exercises = require.context(
  './exercises',
  true,
  /App\.js$/
);

const apps = exercises.keys().map((key) => {
  const Component = exercises(key).default;

  const match = key.match(/\.\/([^/]+)\/App\.js$/);
  const name = match[1];

  return {
    name,
    Component,
  };
});

function App() {
  return (
    <BrowserRouter basename="/100-react-exercises">
      <Routes>
        {apps.map(({ name, Component }) => (
          <Route
            key={name}
            path={`/${name}`}
            element={<Component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

