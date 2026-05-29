import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Maria Elena Tacos al Vapor" 
              width={80} 
              height={80}
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
              Nosotros
            </Link>
            <Link href="#catering" className="text-sm font-medium hover:text-primary transition-colors">
              Catering
            </Link>
            <Link href="#menu" className="text-sm font-medium hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="#ubicaciones" className="text-sm font-medium hover:text-primary transition-colors">
              Ubicaciones
            </Link>
          </div>
          
          {/* Right side - Cart & Social */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-primary transition-colors" aria-label="Carrito">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-3">
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
