export default function AnimalComment({
    params
}:{
    params:{
        id: string;
        commentId: string
    }
}){
    return (
        <h1>Commentaire {params.commentId} pour le produit {params.id}</h1>
    )
}