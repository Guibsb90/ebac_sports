import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store/store'
import {
  adicionarAoCarrinho,
  adicionarAoFavorito
} from './store/reducers/carrinho'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          adicionarAoFavorito={adicionarAoFavorito}
          adicionarAoCarrinho={adicionarAoCarrinho}
          produtos={[]}
          favoritos={[]}
        />
      </div>
    </Provider>
  )
}

export default App
