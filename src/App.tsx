import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Experience/>
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-12 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} henok demissie.

          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;