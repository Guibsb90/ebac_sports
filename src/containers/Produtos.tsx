import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetItensQuery } from '../service/api'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  adicionarAoFavorito: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  favoritos,
  adicionarAoCarrinho,
  adicionarAoFavorito
}: Props) => {
  const { data: produtos, isLoading, error } = useGetItensQuery()

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
