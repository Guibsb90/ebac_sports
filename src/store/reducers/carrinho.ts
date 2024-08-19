import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto as ProdutoType } from '../../App'

type CarrinhoState = {
  itens: ProdutoType[]
  favorito: ProdutoType[]
}
const initialState: CarrinhoState = {
  itens: [],
  favorito: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ProdutoType>) => {
      const produto = action.payload

      if (state.itens.find((itens) => itens.id === produto.id)) {
        alert('Produto já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    adicionarAoFavorito: (state, action: PayloadAction<ProdutoType>) => {
      const favorito = action.payload
      const produtoFavorito = state.favorito.find((p) => p.id === favorito.id)

      if (produtoFavorito) {
        state.favorito = state.favorito.filter((p) => p.id !== favorito.id)
      } else {
        state.favorito.push(favorito)
      }
    }
  }
})

export const { adicionarAoCarrinho, adicionarAoFavorito } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer
