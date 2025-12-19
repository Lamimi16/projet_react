/*import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>© 2025 Mon Portfolio - Tous droits réservés</p>
    </footer>
  );
}*/








import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} <span>Mariem</span> — All rights reserved.
    </footer>
  );
}

