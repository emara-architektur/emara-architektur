export default function Page() {
  return (
    <main style={{
      fontFamily: "serif",
      background: "#f7e9e9",
      color: "#9e1f24",
      padding: "40px",
      lineHeight: "1.6"
    }}>
      
      {/* HEADER */}
      <section style={{marginBottom: "80px"}}>
        <h1 style={{fontSize: "64px", marginBottom: "10px"}}>EMARA</h1>
        <p style={{letterSpacing: "4px"}}>ARCHITEKTUR</p>

        <p style={{marginTop: "30px", maxWidth: "600px"}}>
          Architekturstudentin mit Fokus auf Entwurf, Konzept und Design.
          Räume mit Klarheit, Atmosphäre und gestalterischer Haltung.
        </p>
      </section>

      {/* HERO */}
      <section style={{marginBottom: "80px"}}>
        <h2 style={{fontSize: "36px"}}>
          Räume mit Klarheit, Emotion und gestalterischer Ruhe.
        </h2>

        <p style={{marginTop: "20px", maxWidth: "600px"}}>
          Ich möchte, dass die Menschen, die meine zukünftigen Gebäude betreten,
          das gleiche Lächeln und die gleiche Freude spüren, die ich beim Entwerfen empfinde.
        </p>
      </section>

      {/* ABOUT */}
      <section style={{marginBottom: "80px"}}>
        <h2>Über mich</h2>

        <p><strong>Name:</strong> Emma Rauwolf</p>
        <p><strong>Alter:</strong> 21</p>
        <p><strong>Standort:</strong> Augsburg / Rosenheim</p>
        <p><strong>Studium:</strong> Bachelor Architektur</p>
        <p><strong>Semester:</strong> 6 von 8</p>

        <p style={{marginTop: "20px"}}>
          Fokus auf Entwurf, Wohnbau, Konzept und öffentliche Gebäude.
        </p>
      </section>

      {/* PROJECTS */}
      <section style={{marginBottom: "80px"}}>
        <h2>Projekte</h2>

        <div style={{marginTop: "20px"}}>
          <p><strong>Projekt 01</strong></p>
          <p>Hier kannst du später dein erstes Projekt einfügen.</p>
        </div>

        <div style={{marginTop: "20px"}}>
          <p><strong>Projekt 02</strong></p>
          <p>Weitere Projekte kannst du hier ergänzen.</p>
        </div>

        <div style={{marginTop: "20px"}}>
          <p><strong>Projekt 03</strong></p>
          <p>Flexibel austauschbar.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <h2>Kontakt</h2>

        <p style={{marginTop: "20px"}}>
          Instagram: @emara.architektur
        </p>

        <p>E-Mail: deine.mail@beispiel.de</p>
      </section>

    </main>
  );
}
