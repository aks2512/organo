export interface IColaborador {
    id: string,
    nome: string,
    cargo: string,
    imagem: string,
    time?: string | undefined,
    data: string,
    favorito: boolean
}