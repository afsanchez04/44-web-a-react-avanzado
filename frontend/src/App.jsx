import { ChatBot } from './components/ChatBot'
import { FormularioPeliculas } from './components/FormularioPeliculas'
import { ChatProvider } from './context/ChatContext'

export const App = () => {
  return (
    <ChatProvider>
      {/* <ChatBot /> */}
      <FormularioPeliculas />
    </ChatProvider>
  )
}
