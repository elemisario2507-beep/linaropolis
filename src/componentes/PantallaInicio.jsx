import { useState, useEffect } from 'react'
import './PantallaInicio.css'

/**
 * Pantalla de inicio de Linarópolis
 * Muestra el título, un dado animado y los botones de los modos de juego
 */
export function PantallaInicio() {
  // Estado para la animación del dado
  const [valorDado, setValorDado] = useState(6)
  const [animando, setAnimando] = useState(false)

  // Caras del dado con puntos Unicode
  const carasDado = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

  // Función para animar el dado al hacer clic
  const tirarDado = () => {
    if (animando) return
    setAnimando(true)

    // Animación: cambia la cara del dado varias veces rápidamente
    let contador = 0
    const intervalo = setInterval(() => {
      setValorDado(Math.floor(Math.random() * 6))
      contador++
      if (contador > 10) {
        clearInterval(intervalo)
        setValorDado(Math.floor(Math.random() * 6))
        setAnimando(false)
      }
    }, 80)
  }

  return (
    <div className="pantalla-inicio">
      {/* Fondo decorativo */}
      <div className="fondo-decorativo">
        <div className="linea-decorativa linea-1"></div>
        <div className="linea-decorativa linea-2"></div>
        <div className="linea-decorativa linea-3"></div>
      </div>

      {/* Contenido principal */}
      <div className="contenido-inicio">
        {/* Logo y título */}
        <div className="logo-container">
          <h1 className="titulo-juego">LINARÓPOLIS</h1>
          <p className="subtitulo">El juego de las calles de Linares</p>
          <p className="lema">"En Linares, tres huevos son dos pares"</p>
        </div>

        {/* Dado interactivo */}
        <div
          className={`dado ${animando ? 'dado-animando' : ''}`}
          onClick={tirarDado}
          title="¡Pulsa para tirar el dado!"
        >
          {carasDado[valorDado]}
        </div>
        <p className="texto-dado">¡Toca el dado!</p>

        {/* Botones de modos de juego */}
        <div className="botones-menu">
          <button className="boton-menu boton-principal">
            🎲 Partida Rápida
            <span className="boton-descripcion">Pasar el móvil (2-6 jugadores)</span>
          </button>

          <button className="boton-menu boton-cpu">
            🤖 Contra la CPU
            <span className="boton-descripcion">Juega contra la máquina</span>
          </button>

          <button className="boton-menu boton-online">
            🌐 Online con amigos
            <span className="boton-descripcion">Crea una sala con código</span>
          </button>
        </div>

        {/* Pie de página */}
        <footer className="pie-inicio">
          <p>Hecho con ❤️ en Linares (Jaén)</p>
          <p className="version">Fase 1 — v0.1.0</p>
        </footer>
      </div>
    </div>
  )
}
