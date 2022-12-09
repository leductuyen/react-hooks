import { IinitialArtists } from './App'

export interface Iartists {
    artists: IinitialArtists[]
    handleDeleteArtists?: any
    handleEditArtists?: any
}
const List = ({
    artists,
    handleDeleteArtists,
    handleEditArtists,
}: Iartists) => {
    //! state

    return (
        <>
            <ul>
                {artists.map((item) => (
                    <>
                        <li key={item.id}>
                            <input
                                value={item.name}
                                onChange={(e) => handleEditArtists(item.id, e)}
                            />
                            <button>Edit</button>
                            <button
                                onClick={() => handleDeleteArtists(item.id)}
                            >
                                Delete
                            </button>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}
export default List
