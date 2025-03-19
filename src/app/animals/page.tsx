import Link from "next/link"

export default function AnimalList() {
    return (
        <>
        <h1>Liste des animaux</h1>
        <Link href="animals/1">Animal 1</Link>
        <Link href="animals/2">Animal 2</Link>
        <Link href="animals/3">Animal 3</Link>
        </>
    )
}