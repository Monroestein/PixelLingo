import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header Section */}
      <header className="relative flex h-[70vh] w-full flex-col items-center justify-center overflow-hidden border-b-4 border-zelda-500">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/zelda-header.png"
            alt="Link reading under a tree - The Legend of Zelda inspired background"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zelda-800/40 to-black/70" />
        </div>
        <div className="z-10 flex flex-col items-center space-y-6 px-4 text-center">
          <div className="mb-2 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="h-0 w-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-zelda-gold"></div>
              <div className="flex">
                <div className="h-0 w-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-zelda-gold"></div>
                <div className="h-0 w-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-zelda-gold"></div>
              </div>
            </div>
          </div>
          <h1 className="font-pixel text-4xl font-bold tracking-wider text-white drop-shadow-[0_0_10px_rgba(74,222,128,0.8)] md:text-6xl lg:text-7xl">
            <span className="text-zelda-gold">Pixel</span>Lingo
          </h1>
          <p className="max-w-2xl text-lg font-medium text-gray-200 md:text-xl">
            Traduciendo tu contenido de videojuegos con precisión pixel-perfecta
          </p>
          <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="bg-zelda-600 px-8 py-6 text-lg font-semibold hover:bg-zelda-700">
              Solicitar Cotización
            </Button>
            <Button variant="outline" className="border-zelda-500 px-8 py-6 text-lg font-semibold text-zelda-400">
              Nuestros Servicios
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[url('/zelda-border.svg')] bg-repeat-x" />
      </header>

      {/* Company Information Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-pixel mb-4 text-3xl font-bold text-zelda-400 md:text-4xl">Acerca de PixelLingo</h2>
            <div className="mx-auto h-1 w-24 bg-zelda-600" />
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-zelda-700 bg-gray-900">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-zelda-600 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <polyline points="4 7 4 4 20 4 20 7" />
                    <line x1="9" y1="20" x2="15" y2="20" />
                    <line x1="12" y1="4" x2="12" y2="20" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-zelda-400">Localización de Videojuegos</h3>
                <p className="text-gray-300">
                  Traducimos tus juegos a múltiples idiomas preservando la experiencia de juego y los matices
                  culturales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-zelda-700 bg-gray-900">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-zelda-600 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-zelda-400">Documentación</h3>
                <p className="text-gray-300">
                  Manuales técnicos, guías y textos dentro del juego traducidos con precisión y experiencia en
                  terminología de videojuegos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-zelda-700 bg-gray-900">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-zelda-600 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-zelda-400">Multimedia</h3>
                <p className="text-gray-300">
                  Servicios de subtitulado, voz en off y doblaje para cinemáticas, tráilers y contenido promocional.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-bold text-zelda-400">Nuestra Misión</h3>
              <p className="mb-4 text-gray-300">
                En PixelLingo, cerramos la brecha entre los mundos de los videojuegos y las audiencias globales. Nuestro
                equipo de apasionados gamers y lingüistas profesionales asegura que tu contenido mantenga su espíritu
                original mientras conecta con jugadores de todo el mundo.
              </p>
              <p className="text-gray-300">
                Con experiencia en más de 30 idiomas y un profundo conocimiento de la cultura gamer, entregamos
                traducciones que se sienten nativas para cada audiencia objetivo, preservando la voz y el estilo único
                de tu juego.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg border-2 border-zelda-700 md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Traductores de videojuegos trabajando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="bg-zelda-800/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-pixel mb-4 text-3xl font-bold text-zelda-400 md:text-4xl">Nuestro Trabajo</h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              Conoce algunos de los increíbles juegos que hemos ayudado a localizar para audiencias globales
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-zelda-600" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg border-2 border-zelda-700">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=Game%20${item}`}
                  alt={`Game project ${item}`}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-bold">Proyecto de Juego {item}</h3>
                  <p className="text-sm text-gray-200">Idiomas: Inglés, Español, Japonés, Alemán</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-zelda-600 px-8 py-6 text-lg font-semibold hover:bg-zelda-700">
              Ver Más Proyectos
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with Contact Form */}
      <footer className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-pixel mb-6 text-3xl font-bold text-zelda-400">Contáctanos</h2>
              <p className="mb-8 max-w-md text-gray-300">
                ¿Listo para llevar tu juego al mundo? Ponte en contacto con nuestro equipo de expertos en traducción de
                videojuegos hoy mismo.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-zelda-400" />
                  <span className="text-gray-300">Calle Gaming, Ciudad Pixel, CP 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-zelda-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-zelda-400" />
                  <span className="text-gray-300">info@pixellingo.com</span>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                  <Link
                    key={social}
                    href={`#${social}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-zelda-400 transition-colors hover:bg-zelda-700 hover:text-zelda-gold"
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {social === "twitter" && (
                        <>
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </>
                      )}
                      {social === "facebook" && (
                        <>
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </>
                      )}
                      {social === "instagram" && (
                        <>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </>
                      )}
                      {social === "linkedin" && (
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </>
                      )}
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border-2 border-zelda-700 bg-gray-900 p-6">
              <h3 className="mb-4 text-xl font-bold text-zelda-400">Envíanos un mensaje</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      placeholder="Tu Nombre"
                      className="border-zelda-700 bg-gray-800 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu Email"
                      className="border-zelda-700 bg-gray-800 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Asunto"
                    className="border-zelda-700 bg-gray-800 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tu Mensaje"
                    className="min-h-[120px] border-zelda-700 bg-gray-800 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button className="w-full bg-zelda-600 font-semibold hover:bg-zelda-700">Enviar Mensaje</Button>
              </form>
            </div>
          </div>

          <div className="mt-16 border-t border-zelda-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} PixelLingo. Todos los derechos reservados. Traduciendo juegos con precisión
              pixel-perfecta.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
