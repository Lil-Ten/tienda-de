import { Link } from "@remix-run/react";

export default function Menu() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex justify-around">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
