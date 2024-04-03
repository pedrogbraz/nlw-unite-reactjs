import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIcon} />

      <nav className='flex items-center gap-5'>
        <a className='text-sm font-medium text-zinc-300' href="#">Eventos</a>
        <a className='text-sm font-medium' href="#">Participantes</a>
      </nav>
    </div>
  );
}