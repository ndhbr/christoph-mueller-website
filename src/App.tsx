import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-3">
              <img
                src="/cm_logo_vektor.svg"
                alt="CM Logo"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-primary">Christoph Müller</span>
                <span className="text-xs sm:text-sm text-gray-600">Freiberuflicher Ingenieur für Schutz- und Leittechnik</span>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('leistungen')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Kontakt
              </button>
              <button
                onClick={() => setShowImpressum(true)}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Impressum
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection('leistungen')}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Leistungen
                </button>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Kontakt
                </button>
                <button
                  onClick={() => {
                    setShowImpressum(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Impressum
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16 sm:pt-20">
        <section className="bg-gradient-to-br from-primary via-primary to-blue-900 text-white py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full">
                  <span className="text-secondary font-semibold text-sm">Freiberuflicher Ingenieur für Schutz- und Leittechnik</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Elektrische Prüftechnik aus Mainburg - Ihr Experte für Schutzprüfungen
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                  Professionelle Schutzprüfungen, Wandlerprüfungen und Umbau von Huawei-Container Trafostationen. Zertifizierte Prüfungen nach aktuellen VDE-Normen und TAB-Standards in ganz Bayern.
                </p>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="bg-secondary hover:bg-yellow-400 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Jetzt Kontakt aufnehmen
                </button>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-2xl"></div>
                  <img
                    src="/christoph-bei-arbeit.jpg"
                    alt="Christoph Müller bei der Arbeit"
                    className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Leistungen
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: 'Schutzprüfungen',
                  description: 'Fachgerechte Schutzprüfungen Dank meiner Omicron CMC 500.'
                },
                {
                  title: 'Wandlerprüfungen',
                  description: 'Vollumfängliche Wandlerprüfung für eine sichere Erstinbetriebnahme.'
                },
                {
                  title: 'Umbau Huawei-Container Trafostationen',
                  description: 'Einbau- und Prüfung aller notwendigen Komponenten.'
                },
                {
                  title: 'Restarbeiten',
                  description: 'Sonstige Restarbeiten nach Absprache.'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary group"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                  Kontakt
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                  Sie benötigen professionelle Schutzprüfungen oder Wandlerprüfungen in Deutschland? Kontaktieren Sie mich für eine unverbindliche Beratung zu Ihrem Projekt.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        Lohmühle 2<br />
                        84048 Mainburg
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-1">Telefon</h3>
                      <a
                        href="tel:+4917634431508"
                        className="text-gray-600 hover:text-secondary transition-colors"
                      >
                        +49 176 34431508
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-1">E-Mail</h3>
                      <a
                        href="mailto:christoph.mueller@schutz-pruefung.de"
                        className="text-gray-600 hover:text-secondary transition-colors break-all"
                      >
                        christoph.mueller@schutz-pruefung.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                  Lassen Sie uns zusammenarbeiten
                </h3>
                <p className="text-gray-200 mb-8 leading-relaxed">
                  Kontaktieren Sie mich für ein unverbindliches Gespräch über Ihr Projekt. Ich berate Sie gerne zu Ihren technischen Anforderungen.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+4917634431508"
                    className="block w-full bg-secondary hover:bg-yellow-400 text-primary px-6 py-4 rounded-lg font-semibold text-center transition-all transform hover:scale-105"
                  >
                    Anrufen
                  </a>
                  <a
                    href="mailto:christoph.mueller@schutz-pruefung.de"
                    className="block w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg font-semibold text-center transition-all border border-white/30"
                  >
                    E-Mail senden
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Christoph Müller. Alle Rechte vorbehalten.
            </p>
            <button
              onClick={() => setShowImpressum(true)}
              className="text-secondary hover:text-yellow-400 transition-colors font-medium text-sm"
            >
              Impressum
            </button>
          </div>
        </div>
      </footer>

      {showImpressum && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowImpressum(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 sm:px-8 py-6 flex justify-between items-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">Impressum</h2>
              <button
                onClick={() => setShowImpressum(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="px-6 sm:px-8 py-8 space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Angaben gemäß § 5 TMG</h3>
                <p className="text-gray-700 leading-relaxed">
                  Christoph Müller<br />
                  Freiberuflicher Ingenieur<br />
                  Lohmühle 2<br />
                  84048 Mainburg
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Kontakt</h3>
                <p className="text-gray-700 leading-relaxed">
                  Telefon: <a href="tel:+4917634431508" className="text-secondary hover:underline">+49 176 34431508</a><br />
                  E-Mail: <a href="mailto:christoph.mueller@schutz-pruefung.de" className="text-secondary hover:underline break-all">christoph.mueller@schutz-pruefung.de</a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Berufsbezeichnung</h3>
                <p className="text-gray-700">
                  Ingenieur (verliehen in Deutschland)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Umsatzsteuer-ID</h3>
                <p className="text-gray-700">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE458116095
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong className="text-primary">Hinweis zur Berufshaftpflicht:</strong><br />
                  Eine Berufshaftpflichtversicherung wird derzeit aufgebaut und die Angaben werden hier ergänzt, sobald diese abgeschlossen ist.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-primary mb-2">Webdesign</h3>
                <p className="text-gray-700">
                  Webdesign durch <a href="https://bavarianbits.de" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">bavarianbits.de</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
