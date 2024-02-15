import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'

interface NoteCardProps {
  note: {
    date: Date
    content: string
  }
}

export function NoteCard({ note }: NoteCardProps) {
    return (
      <Dialog.Root>
        {/* Trigger é o botão que abre o modal - eu vou usar o Trigger sempre aonde eu vou querer abrir o modal */}
        <Dialog.Trigger className='bg-slate-800 rounded-md text-left p-5 flex-col gap-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
          <span className='text-sm font-medium text-slate-300'>
            {formatDistanceToNow(note.date, {addSuffix: true, locale: ptBR})} 
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            {note.content}
          </p>
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </Dialog.Trigger>

        {/* Portal é o lugar onde o modal vai aparecer, ele teleporta o modal para o lugar correto, para raiz da página */}
        <Dialog.Portal>
          {/* Overlay é o fundo que fica transparente quando o modal estiver aberto */}
          <Dialog.Overlay className='bg-black/50 inset-0 fixed' />
          {/* Content é o que vai aparecer quando abrir o modal */}
          <Dialog.Content 
            className='fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 outline-none rounded-md flex flex-col'
          >
            <Dialog.Close className='bg-slate-800 text-slate-400 absolute right-0 top-0 p-1.5 hover:text-slate-100'>
              <X className='size-5' />
            </Dialog.Close>
            <div className='flex flex-1 flex-col gap-3 p-5'>
              <span className='text-sm font-medium text-slate-300'>
                {formatDistanceToNow(note.date, {addSuffix: true, locale: ptBR})}
              </span>
              <p className='text-sm leading-6 text-slate-400'>{note.content}</p>
            </div>

            <button 
              type='button'
              className='w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group'
            >
              Deseja <span className='text-red-400 group-hover:underline'>apagar esta nota</span>?
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}