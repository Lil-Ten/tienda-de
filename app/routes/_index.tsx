import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-grow flex items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold">Bienvenido a Mi Tienda</h1>
      </main>
      <Footer />
    </div>
  );
}
