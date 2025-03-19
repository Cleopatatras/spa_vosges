export default function AnimalDetail({params}:{
    params: {id: string}
}) {
    return <h1>Animal détail {params.id}</h1>
}