import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../App'
import { Produto } from '../../components/Produto/styles'

type CarrinhoState = {
  itens: ProdutoType[]
}
const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload

      if (state.itens.find((produto) => produto.id === produto.id)) {
        alert('Produto já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    adicionarAoFavorito: (state, action: PayloadAction<ProdutoType>) => {
      const favorito = action.payload

      if (state.itens.find((favorito) => favorito.id === favorito.id)){
        const favoritosSemProduto = favorito.filter((p) => p.id !== Produto.id)


  } else {

  }
      }
    }


  }
})

function favoritar(produto: Produto) {
  if (favoritos.find((p) => p.id === produto.id)) {
    const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
    setFavoritos(favoritosSemProduto)
  } else {
    setFavoritos([...favoritos, produto])
  }
}

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
