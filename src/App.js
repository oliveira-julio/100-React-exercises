import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
        <Route
          path="/"
          element={
            <main>
              <h1>React Exercises</h1>

              <ul>
                {apps.map(({ name }) => (
                  <li key={name}>
                    <Link to={`/${name}`}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </main>
          }
        />

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

