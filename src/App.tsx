import Form from './components/Form';
import './styles/app.less';

function App() {
  return (
    <main>
      <header>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </header>
      <section>
        <aside>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </aside>
        <Form></Form>
      </section>
    </main>
  );
}

export default App;
