import { ReactElement } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Bebidas(): ReactElement {
  return (
    <>
      <h2>Bebidas Disponíveis</h2>
      <h2>Adicionar</h2>
      <div>
        <Input name="Nome" placeholder="ex: milkshake de morango" />
        <Input name="Categoria" type="select" />
        <Input name="Imagem" type="file"/>
      </div>

      <div>
        <Input name="Tamanho" placeholder="ex: 500ml"/>
        <Input name="Preço" placeholder="ex: R$ 20"/>
        <Button />
      </div>
    </>
  )
}