import { Search, MoreHorizontal, ChevronLeft, ChevronRight, ChevronsRight, ChevronsLeft } from 'lucide-react'
export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className='size-4 text-emerald-300' />
          <input className="flex-1 bg-transparent outline-none text-sm h-auto border-0 p-0 focus:ring-0" placeholder="Buscar participantes..." />
        </div>
      </div>

      <div className='border border-white/10 rounded-lg'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/10'>
              <th style={{ width: 48 }} className='py-3 px-4 text-sm font-semibold text-left'>
                <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 focus:ring-0' />
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Participantes</th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Data de inscrição</th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Data de check-in</th>
              <th style={{ width: 64 }} className='py-3 px-4 text-sm font-semibold text-left'></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr key={i} className='border-b border-white/10 hover:bg-white/5'>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 focus:ring-0' />
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    1723712873912
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <div className='flex flex-col gap-1'>
                      <span className='font-semibold text-white'>Pedro Gontijo Braz</span>
                      <span>pedrogbraz@gmail.com</span>
                    </div>
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>7 days ago</td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>3 days ago</td>
                  <td className='py-3 px-4 text-sm'>
                    <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                      <MoreHorizontal className='size-4' />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
                Showing 10 of 228 items
              </td>
              <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                <div className='inline-flex items-center gap-8'>
                  <span>Page 1 of 11</span>
                  <div className='flex gap-1.5'>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronsLeft className='size-4' />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronLeft className='size-4' />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronRight className='size-4' />
                    </button>
                    <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                      <ChevronsRight className='size-4' />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}