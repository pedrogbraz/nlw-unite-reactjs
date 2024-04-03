import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-links'
export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIcon} />

      <nav className='flex items-center gap-5'>
        <NavLink className='text-zinc-300' href='#' text='Eventos' />
        <NavLink href='#' text='Participantes' />
      </nav>
    </div>
  );
}